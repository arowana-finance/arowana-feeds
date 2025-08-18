#!/usr/bin/env node
'use strict';

var promises = require('fs/promises');
var ccxt = require('ccxt');
var ethersOpt = require('ethers-opt');
var ethers = require('ethers');

function parseJSONL(jsonl) {
  const lines = jsonl.split(/\r?\n/);
  return lines.map((line) => line.trim()).filter((line) => line.length > 0).map((line) => JSON.parse(line));
}
function toJSONL(array) {
  return array.map((item) => JSON.stringify(item)).join("\n");
}

async function getOHLCV({
  exchange,
  symbol,
  startTime,
  timeframe = "1h",
  timeframeSec = 3600
}) {
  const candles = [];
  while (true) {
    const from = (() => {
      if (candles.length) {
        const _startTime = candles.slice(-1)[0][0] + 1;
        return _startTime > Date.now() ? Date.now() : _startTime;
      }
      return startTime;
    })();
    const _candles = await exchange.fetchOHLCV(symbol, timeframe, from, 1e3);
    if (!_candles.length) {
      break;
    }
    candles.push(..._candles);
  }
  return candles.map(([time, open, high, low, close, volume]) => {
    const timestamp = Math.floor(Math.floor(time / 1e3) / timeframeSec) * timeframeSec;
    return {
      timestamp,
      price: close,
      volume
    };
  }).filter((c) => c.price && c.volume);
}

const LOCAL_GATE = "price_gate.jsonl";
const LOCAL_MEXC = "price_mexc.jsonl";
const LOCAL_VWAP = "price_vwap.jsonl";
async function existsAsync(fileOrDir) {
  try {
    await promises.stat(fileOrDir);
    return true;
  } catch {
    return false;
  }
}
async function getLocalPrice(localFile) {
  try {
    const exists = await existsAsync(localFile);
    if (!exists) {
      return [];
    }
    return parseJSONL(await promises.readFile(localFile, { encoding: "utf8" }));
  } catch {
    return [];
  }
}
async function getPrices(localFile, symbol, exchange) {
  const localPrices = await getLocalPrice(localFile);
  const startTime = localPrices.length ? (localPrices.slice(-1)[0].timestamp + 1) * 1e3 : void 0;
  try {
    const latestPrices = (await getOHLCV({ exchange, symbol, startTime })).slice(0, -1);
    return localPrices.concat(latestPrices);
  } catch (error) {
    console.log(`Error from exchange ${exchange.name}`, error);
    return localPrices;
  }
}
async function syncPrice() {
  const symbol = "ARW/USDT";
  const gateEx = new ccxt.gate({ enableRateLimit: true });
  const mexcEx = new ccxt.mexc({ enableRateLimit: true });
  const [gatePrices, mexcPrices] = await Promise.all([
    getPrices(LOCAL_GATE, symbol, gateEx),
    getPrices(LOCAL_MEXC, symbol, mexcEx)
  ]);
  const vwapPrices = Object.values(
    [...gatePrices, ...mexcPrices].sort((a, b) => a.timestamp - b.timestamp).reduce(
      (acc, curr) => {
        if (!acc[curr.timestamp]) {
          acc[curr.timestamp] = {
            timestamp: curr.timestamp,
            accPriceVol: 0,
            accVol: 0,
            price: 0
          };
        }
        acc[curr.timestamp].accPriceVol += curr.price * curr.volume;
        acc[curr.timestamp].accVol += curr.volume;
        acc[curr.timestamp].price = acc[curr.timestamp].accPriceVol / acc[curr.timestamp].accVol;
        return acc;
      },
      {}
    )
  );
  const lastPrice = vwapPrices[vwapPrices.length - 1];
  const lastPriceTimestamp = lastPrice?.timestamp ? lastPrice.timestamp * 1e3 : 0;
  console.log(
    `VWAP Prices Count: ${vwapPrices.length}, Last Price: ${new Date(lastPriceTimestamp).toUTCString()}: ${lastPrice.price || 0}`
  );
  await promises.writeFile(LOCAL_GATE, toJSONL(gatePrices));
  await promises.writeFile(LOCAL_MEXC, toJSONL(mexcPrices));
  await promises.writeFile(LOCAL_VWAP, toJSONL(vwapPrices));
}

const _abi$1 = [
  {
    inputs: [],
    name: "circulatingSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "excludedAddresses",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "excludedSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IARWSupply__factory {
  static abi = _abi$1;
  static createInterface() {
    return new ethers.Interface(_abi$1);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$1, runner);
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8"
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32"
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IERC20Exp__factory {
  static abi = _abi;
  static createInterface() {
    return new ethers.Interface(_abi);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi, runner);
  }
}

const RPC_URL = process.env.RPC_URL || "https://arb1.arbitrum.io/rpc";
const ARW_ADDRESS = process.env.ARW_ADDRESS || "0x747952A59292a9B3862F3C59664B95e8B461eF45";
const ARW_SUPPLY_ADDRESS = process.env.ARW_SUPPLY_ADDRESS || "0xDA8f5308630D08d1800fc0a029E2c5CaEE55283F";
const LOCAL_TOTAL = process.env.LOCAL_TOTAL || "arw_total.txt";
const LOCAL_CIRCULATING = process.env.LOCAL_CIRCULATING || "arw_circulating.txt";
async function syncSupply() {
  const provider = new ethersOpt.Provider(RPC_URL);
  const ARW = IERC20Exp__factory.connect(ARW_ADDRESS, provider);
  const ARWSupply = IARWSupply__factory.connect(ARW_SUPPLY_ADDRESS, provider);
  const [symbol, decimals, _totalSupply, _circulatingSupply] = await Promise.all([
    ARW.symbol(),
    ARW.decimals(),
    ARW.totalSupply(),
    ARWSupply.circulatingSupply()
  ]);
  const totalSupply = Number(Number(ethers.formatUnits(_totalSupply, Number(decimals))).toFixed(8));
  const circulatingSupply = Number(Number(ethers.formatUnits(_circulatingSupply, Number(decimals))).toFixed(8));
  console.log(`Total: ${totalSupply} ${symbol}, Circulating: ${circulatingSupply} ${symbol}`);
  await promises.writeFile(LOCAL_TOTAL, String(totalSupply));
  await promises.writeFile(LOCAL_CIRCULATING, String(circulatingSupply));
}

syncPrice();
syncSupply();
