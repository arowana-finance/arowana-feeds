'use strict';

var ethers = require('ethers');

const _abi$L = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error"
  }
];
const _bytecode$h = "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212203beb2466376421b0a54b7344b416cd28c9a070c74ac3a3d28fabebadaa805a2564736f6c634300081e0033";
const isSuperArgs$h = (xs) => xs.length > 1;
class AutomationBase__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$h(args)) {
      super(...args);
    } else {
      super(_abi$L, _bytecode$h, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$h;
  static abi = _abi$L;
  static createInterface() {
    return new ethers.Interface(_abi$L);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$L, runner);
  }
}

var index$1g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AutomationBase__factory: AutomationBase__factory
});

const _abi$K = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
        type: "bytes"
      }
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes"
      }
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class AutomationCompatible__factory {
  static abi = _abi$K;
  static createInterface() {
    return new ethers.Interface(_abi$K);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$K,
      runner
    );
  }
}

var index$1f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AutomationCompatible__factory: AutomationCompatible__factory
});

const _abi$J = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "checkData",
        type: "bytes"
      }
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "performData",
        type: "bytes"
      }
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class AutomationCompatibleInterface__factory {
  static abi = _abi$J;
  static createInterface() {
    return new ethers.Interface(_abi$J);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$J,
      runner
    );
  }
}

var index$1e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AutomationCompatibleInterface__factory: AutomationCompatibleInterface__factory
});

var index$1d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  automationCompatibleInterfaceSol: index$1e
});

var index$1c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  automationBaseSol: index$1g,
  automationCompatibleSol: index$1f,
  interfaces: index$1d
});

const _abi$I = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IFunctionsClient__factory {
  static abi = _abi$I;
  static createInterface() {
    return new ethers.Interface(_abi$I);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$I, runner);
  }
}

var index$1b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IFunctionsClient__factory: IFunctionsClient__factory
});

const _abi$H = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes"
      },
      {
        internalType: "uint96",
        name: "juelsPerGas",
        type: "uint96"
      },
      {
        internalType: "uint96",
        name: "costWithoutFulfillment",
        type: "uint96"
      },
      {
        internalType: "address",
        name: "transmitter",
        type: "address"
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "requestId",
            type: "bytes32"
          },
          {
            internalType: "address",
            name: "coordinator",
            type: "address"
          },
          {
            internalType: "uint96",
            name: "estimatedTotalCostJuels",
            type: "uint96"
          },
          {
            internalType: "address",
            name: "client",
            type: "address"
          },
          {
            internalType: "uint64",
            name: "subscriptionId",
            type: "uint64"
          },
          {
            internalType: "uint32",
            name: "callbackGasLimit",
            type: "uint32"
          },
          {
            internalType: "uint72",
            name: "adminFee",
            type: "uint72"
          },
          {
            internalType: "uint72",
            name: "donFee",
            type: "uint72"
          },
          {
            internalType: "uint40",
            name: "gasOverheadBeforeCallback",
            type: "uint40"
          },
          {
            internalType: "uint40",
            name: "gasOverheadAfterCallback",
            type: "uint40"
          },
          {
            internalType: "uint32",
            name: "timeoutTimestamp",
            type: "uint32"
          }
        ],
        internalType: "struct FunctionsResponse.Commitment",
        name: "commitment",
        type: "tuple"
      }
    ],
    name: "fulfill",
    outputs: [
      {
        internalType: "enum FunctionsResponse.FulfillResult",
        name: "",
        type: "uint8"
      },
      {
        internalType: "uint96",
        name: "",
        type: "uint96"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getAdminFee",
    outputs: [
      {
        internalType: "uint72",
        name: "adminFee",
        type: "uint72"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getAllowListId",
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
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "getContractById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "getProposedContractById",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getProposedContractSet",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]"
      },
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
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32"
      }
    ],
    name: "isValidCallbackGasLimit",
    outputs: [],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "proposalSetIds",
        type: "bytes32[]"
      },
      {
        internalType: "address[]",
        name: "proposalSetAddresses",
        type: "address[]"
      }
    ],
    name: "proposeContractsUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint16",
        name: "dataVersion",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "donId",
        type: "bytes32"
      }
    ],
    name: "sendRequest",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "subscriptionId",
        type: "uint64"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      },
      {
        internalType: "uint16",
        name: "dataVersion",
        type: "uint16"
      },
      {
        internalType: "uint32",
        name: "callbackGasLimit",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "donId",
        type: "bytes32"
      }
    ],
    name: "sendRequestToProposed",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "allowListId",
        type: "bytes32"
      }
    ],
    name: "setAllowListId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "updateContracts",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class IFunctionsRouter__factory {
  static abi = _abi$H;
  static createInterface() {
    return new ethers.Interface(_abi$H);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$H, runner);
  }
}

var index$1a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IFunctionsRouter__factory: IFunctionsRouter__factory
});

var index$19 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iFunctionsClientSol: index$1b,
  iFunctionsRouterSol: index$1a
});

const _abi$G = [
  {
    inputs: [],
    name: "EmptyArgs",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptySecrets",
    type: "error"
  },
  {
    inputs: [],
    name: "EmptySource",
    type: "error"
  },
  {
    inputs: [],
    name: "NoInlineSecrets",
    type: "error"
  },
  {
    inputs: [],
    name: "REQUEST_DATA_VERSION",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const _bytecode$g = "0x608c6037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c80635d641dfc146038575b600080fd5b603f600181565b60405161ffff909116815260200160405180910390f3fea2646970667358221220d24598c1b6fbff05fbeed29b052fef0ee561172a0ff1428776d80b96ab20ba3364736f6c634300081e0033";
const isSuperArgs$g = (xs) => xs.length > 1;
class FunctionsRequest__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$g(args)) {
      super(...args);
    } else {
      super(_abi$G, _bytecode$g, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$g;
  static abi = _abi$G;
  static createInterface() {
    return new ethers.Interface(_abi$G);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$G, runner);
  }
}

var index$18 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FunctionsRequest__factory: FunctionsRequest__factory
});

var index$17 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  functionsRequestSol: index$18
});

var index$16 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interfaces: index$19,
  libraries: index$17
});

var index$15 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  v100: index$16
});

var index$14 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  automation: index$1c,
  functions: index$15
});

var index$13 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  v08: index$14
});

var index$12 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  src: index$13
});

var index$11 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$12
});

const _abi$F = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
let Ownable__factory$1 = class Ownable__factory {
  static abi = _abi$F;
  static createInterface() {
    return new ethers.Interface(_abi$F);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$F, runner);
  }
};

var index$10 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ownable__factory: Ownable__factory$1
});

var index$$ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableSol: index$10
});

const _abi$E = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "BeaconUpgraded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  }
];
class IERC1967__factory {
  static abi = _abi$E;
  static createInterface() {
    return new ethers.Interface(_abi$E);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$E, runner);
  }
}

var index$_ = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1967__factory: IERC1967__factory
});

const _abi$D = [
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IERC5267__factory {
  static abi = _abi$D;
  static createInterface() {
    return new ethers.Interface(_abi$D);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$D, runner);
  }
}

var index$Z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC5267__factory: IERC5267__factory
});

const _abi$C = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC1155InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC1155InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "valuesLength",
        type: "uint256"
      }
    ],
    name: "ERC1155InvalidArrayLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "ERC1155InvalidOperator",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC1155InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC1155InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC1155MissingApprovalForAll",
    type: "error"
  }
];
class IERC1155Errors__factory {
  static abi = _abi$C;
  static createInterface() {
    return new ethers.Interface(_abi$C);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$C, runner);
  }
}

const _abi$B = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  }
];
class IERC20Errors__factory {
  static abi = _abi$B;
  static createInterface() {
    return new ethers.Interface(_abi$B);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$B, runner);
  }
}

const _abi$A = [
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721IncorrectOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721InsufficientApproval",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC721InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "ERC721InvalidOperator",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC721InvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC721InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC721InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ERC721NonexistentToken",
    type: "error"
  }
];
class IERC721Errors__factory {
  static abi = _abi$A;
  static createInterface() {
    return new ethers.Interface(_abi$A);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$A, runner);
  }
}

var index$Y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC1155Errors__factory: IERC1155Errors__factory,
  IERC20Errors__factory: IERC20Errors__factory,
  IERC721Errors__factory: IERC721Errors__factory
});

var index$X = /*#__PURE__*/Object.freeze({
  __proto__: null,
  draftIerc6093Sol: index$Y,
  ierc1967Sol: index$_,
  ierc5267Sol: index$Z
});

const _abi$z = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "ERC1967InvalidAdmin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address"
      }
    ],
    name: "ERC1967InvalidBeacon",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  }
];
const _bytecode$f = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122049f70748fa059c844c6ce9ed1138c4186ee42c9118c241868f20436bb0934c3f64736f6c634300081e0033";
const isSuperArgs$f = (xs) => xs.length > 1;
class ERC1967Utils__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$f(args)) {
      super(...args);
    } else {
      super(_abi$z, _bytecode$f, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$f;
  static abi = _abi$z;
  static createInterface() {
    return new ethers.Interface(_abi$z);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$z, runner);
  }
}

var index$W = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC1967Utils__factory: ERC1967Utils__factory
});

var index$V = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc1967UtilsSol: index$W
});

const _abi$y = [
  {
    stateMutability: "payable",
    type: "fallback"
  }
];
class Proxy__factory {
  static abi = _abi$y;
  static createInterface() {
    return new ethers.Interface(_abi$y);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$y, runner);
  }
}

var index$U = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Proxy__factory: Proxy__factory
});

const _abi$x = [
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class IBeacon__factory {
  static abi = _abi$x;
  static createInterface() {
    return new ethers.Interface(_abi$x);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$x, runner);
  }
}

var index$T = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IBeacon__factory: IBeacon__factory
});

var index$S = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iBeaconSol: index$T
});

var index$R = /*#__PURE__*/Object.freeze({
  __proto__: null,
  beacon: index$S,
  erc1967: index$V,
  proxySol: index$U
});

const _abi$w = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
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
class ERC20__factory {
  static abi = _abi$w;
  static createInterface() {
    return new ethers.Interface(_abi$w);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$w, runner);
  }
}

var index$Q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20__factory: ERC20__factory
});

const _abi$v = [
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
class IERC20__factory {
  static abi = _abi$v;
  static createInterface() {
    return new ethers.Interface(_abi$v);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$v, runner);
  }
}

var index$P = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20__factory: IERC20__factory
});

const _abi$u = [
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
class ERC20Burnable__factory {
  static abi = _abi$u;
  static createInterface() {
    return new ethers.Interface(_abi$u);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$u, runner);
  }
}

var index$O = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Burnable__factory: ERC20Burnable__factory
});

const _abi$t = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
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
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
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
    inputs: [],
    name: "EIP712DomainChanged",
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
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
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
class ERC20Permit__factory {
  static abi = _abi$t;
  static createInterface() {
    return new ethers.Interface(_abi$t);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$t, runner);
  }
}

var index$N = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Permit__factory: ERC20Permit__factory
});

const _abi$s = [
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
class IERC20Metadata__factory {
  static abi = _abi$s;
  static createInterface() {
    return new ethers.Interface(_abi$s);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$s, runner);
  }
}

var index$M = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Metadata__factory: IERC20Metadata__factory
});

const _abi$r = [
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
  }
];
class IERC20Permit__factory {
  static abi = _abi$r;
  static createInterface() {
    return new ethers.Interface(_abi$r);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$r, runner);
  }
}

var index$L = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Permit__factory: IERC20Permit__factory
});

var index$K = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20BurnableSol: index$O,
  erc20PermitSol: index$N,
  ierc20MetadataSol: index$M,
  ierc20PermitSol: index$L
});

var index$J = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20Sol: index$Q,
  extensions: index$K,
  ierc20Sol: index$P
});

var index$I = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20: index$J
});

const _abi$q = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address"
      }
    ],
    name: "AddressEmptyCode",
    type: "error"
  }
];
const _bytecode$e = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122089f127f4be9eb07dd98eb2a04d4f48b0e6858315adfe84bf1dbc9bd5e8fc158b64736f6c634300081e0033";
const isSuperArgs$e = (xs) => xs.length > 1;
class Address__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$e(args)) {
      super(...args);
    } else {
      super(_abi$q, _bytecode$e, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$e;
  static abi = _abi$q;
  static createInterface() {
    return new ethers.Interface(_abi$q);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$q, runner);
  }
}

var index$H = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Address__factory: Address__factory
});

const _abi$p = [
  {
    inputs: [],
    name: "FailedCall",
    type: "error"
  },
  {
    inputs: [],
    name: "FailedDeployment",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "MissingPrecompile",
    type: "error"
  }
];
const _bytecode$d = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122031ea4d8f0ef072d2b9142cf647aea10d75cce59fe2cdeffc6357818a3b4d04ac64736f6c634300081e0033";
const isSuperArgs$d = (xs) => xs.length > 1;
class Errors__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$d(args)) {
      super(...args);
    } else {
      super(_abi$p, _bytecode$d, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$d;
  static abi = _abi$p;
  static createInterface() {
    return new ethers.Interface(_abi$p);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$p, runner);
  }
}

var index$G = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Errors__factory: Errors__factory
});

const _abi$o = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
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
  }
];
class Nonces__factory {
  static abi = _abi$o;
  static createInterface() {
    return new ethers.Interface(_abi$o);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$o, runner);
  }
}

var index$F = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Nonces__factory: Nonces__factory
});

const _abi$n = [
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  }
];
const _bytecode$c = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212202447213907adb0bd6ee9d10e7ccb2206e0af729c9fc2ae708659cad36d46e1ac64736f6c634300081e0033";
const isSuperArgs$c = (xs) => xs.length > 1;
class ShortStrings__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$c(args)) {
      super(...args);
    } else {
      super(_abi$n, _bytecode$c, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$c;
  static abi = _abi$n;
  static createInterface() {
    return new ethers.Interface(_abi$n);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$n, runner);
  }
}

var index$E = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ShortStrings__factory: ShortStrings__factory
});

const _abi$m = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "StringsInsufficientHexLength",
    type: "error"
  },
  {
    inputs: [],
    name: "StringsInvalidAddressFormat",
    type: "error"
  },
  {
    inputs: [],
    name: "StringsInvalidChar",
    type: "error"
  }
];
const _bytecode$b = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220f252b7c934a0687339135960036c0cc83c8b508ad984ec6a848d447cebaa32f464736f6c634300081e0033";
const isSuperArgs$b = (xs) => xs.length > 1;
class Strings__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$b(args)) {
      super(...args);
    } else {
      super(_abi$m, _bytecode$b, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$b;
  static abi = _abi$m;
  static createInterface() {
    return new ethers.Interface(_abi$m);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$m, runner);
  }
}

var index$D = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Strings__factory: Strings__factory
});

const _abi$l = [
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
  }
];
const _bytecode$a = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220e087f0878c22b01db8b37e0b1d6e90afc2b92fc6528e2644b560c2838538e32764736f6c634300081e0033";
const isSuperArgs$a = (xs) => xs.length > 1;
class ECDSA__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$a(args)) {
      super(...args);
    } else {
      super(_abi$l, _bytecode$a, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$a;
  static abi = _abi$l;
  static createInterface() {
    return new ethers.Interface(_abi$l);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$l, runner);
  }
}

var index$C = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ECDSA__factory: ECDSA__factory
});

const _abi$k = [
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class EIP712__factory {
  static abi = _abi$k;
  static createInterface() {
    return new ethers.Interface(_abi$k);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$k, runner);
  }
}

var index$B = /*#__PURE__*/Object.freeze({
  __proto__: null,
  EIP712__factory: EIP712__factory
});

var index$A = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ecdsaSol: index$C,
  eip712Sol: index$B
});

const _abi$j = [
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8"
      },
      {
        internalType: "int256",
        name: "value",
        type: "int256"
      }
    ],
    name: "SafeCastOverflowedIntDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "value",
        type: "int256"
      }
    ],
    name: "SafeCastOverflowedIntToUint",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "bits",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintDowncast",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "SafeCastOverflowedUintToInt",
    type: "error"
  }
];
const _bytecode$9 = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea264697066735822122005fdd4a6c39aff8c7d33bbb23d8624140755ce7cb5e7d8821b403f85e85ee20464736f6c634300081e0033";
const isSuperArgs$9 = (xs) => xs.length > 1;
class SafeCast__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$9(args)) {
      super(...args);
    } else {
      super(_abi$j, _bytecode$9, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$9;
  static abi = _abi$j;
  static createInterface() {
    return new ethers.Interface(_abi$j);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$j, runner);
  }
}

var index$z = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SafeCast__factory: SafeCast__factory
});

var index$y = /*#__PURE__*/Object.freeze({
  __proto__: null,
  safeCastSol: index$z
});

var index$x = /*#__PURE__*/Object.freeze({
  __proto__: null,
  addressSol: index$H,
  cryptography: index$A,
  errorsSol: index$G,
  math: index$y,
  noncesSol: index$F,
  shortStringsSol: index$E,
  stringsSol: index$D
});

var index$w = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$$,
  interfaces: index$X,
  proxy: index$R,
  token: index$I,
  utils: index$x
});

const _abi$i = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class OwnableUpgradeable__factory {
  static abi = _abi$i;
  static createInterface() {
    return new ethers.Interface(_abi$i);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$i, runner);
  }
}

var index$v = /*#__PURE__*/Object.freeze({
  __proto__: null,
  OwnableUpgradeable__factory: OwnableUpgradeable__factory
});

var index$u = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableUpgradeableSol: index$v
});

const _abi$h = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  }
];
class Initializable__factory {
  static abi = _abi$h;
  static createInterface() {
    return new ethers.Interface(_abi$h);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$h, runner);
  }
}

var index$t = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Initializable__factory: Initializable__factory
});

var index$s = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableSol: index$t
});

var index$r = /*#__PURE__*/Object.freeze({
  __proto__: null,
  utils: index$s
});

const _abi$g = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  }
];
class ContextUpgradeable__factory {
  static abi = _abi$g;
  static createInterface() {
    return new ethers.Interface(_abi$g);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$g, runner);
  }
}

var index$q = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ContextUpgradeable__factory: ContextUpgradeable__factory
});

var index$p = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contextUpgradeableSol: index$q
});

var index$o = /*#__PURE__*/Object.freeze({
  __proto__: null,
  access: index$u,
  proxy: index$r,
  utils: index$p
});

var index$n = /*#__PURE__*/Object.freeze({
  __proto__: null,
  contracts: index$w,
  contractsUpgradeable: index$o
});

const _abi$f = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_unlockTime",
        type: "uint256"
      }
    ],
    stateMutability: "payable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "when",
        type: "uint256"
      }
    ],
    name: "Withdrawal",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "unlockTime",
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
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$8 = "0x60806040526040516102a03803806102a08339810160408190526020916097565b804210607e5760405162461bcd60e51b815260206004820152602360248201527f556e6c6f636b2074696d652073686f756c6420626520696e207468652066757460448201526275726560e81b606482015260840160405180910390fd5b600055600180546001600160a01b0319163317905560af565b60006020828403121560a857600080fd5b5051919050565b6101e2806100be6000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c8063251c1aa3146100465780633ccfd60b146100625780638da5cb5b1461006c575b600080fd5b61004f60005481565b6040519081526020015b60405180910390f35b61006a610097565b005b60015461007f906001600160a01b031681565b6040516001600160a01b039091168152602001610059565b6000544210156100e75760405162461bcd60e51b8152602060048201526016602482015275165bdd4818d85b89dd081dda5d1a191c985dc81e595d60521b60448201526064015b60405180910390fd5b6001546001600160a01b031633146101385760405162461bcd60e51b81526020600482015260146024820152732cb7ba9030b932b713ba103a34329037bbb732b960611b60448201526064016100de565b604080514781524260208201527fbf2ed60bd5b5965d685680c01195c9514e4382e28e3a5a2d2d5244bf59411b93910160405180910390a16001546040516001600160a01b03909116904780156108fc02916000818181858888f193505050501580156101a9573d6000803e3d6000fd5b5056fea264697066735822122000bdcf9926c7540c10accb2488ca19d0751a6d41b12397a9b9653d0449b9b7dd64736f6c634300081e0033";
const isSuperArgs$8 = (xs) => xs.length > 1;
class Lock__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$8(args)) {
      super(...args);
    } else {
      super(_abi$f, _bytecode$8, args[0]);
    }
  }
  getDeployTransaction(_unlockTime, overrides) {
    return super.getDeployTransaction(_unlockTime, overrides || {});
  }
  deploy(_unlockTime, overrides) {
    return super.deploy(_unlockTime, overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$8;
  static abi = _abi$f;
  static createInterface() {
    return new ethers.Interface(_abi$f);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$f, runner);
  }
}

var index$m = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Lock__factory: Lock__factory
});

const _abi$e = [
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
  static abi = _abi$e;
  static createInterface() {
    return new ethers.Interface(_abi$e);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$e, runner);
  }
}

var index$l = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IARWSupply__factory: IARWSupply__factory
});

const _abi$d = [
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
  static abi = _abi$d;
  static createInterface() {
    return new ethers.Interface(_abi$d);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$d, runner);
  }
}

const _abi$c = [
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
class IERC20Mintable__factory {
  static abi = _abi$c;
  static createInterface() {
    return new ethers.Interface(_abi$c);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$c, runner);
  }
}

var index$k = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IERC20Exp__factory: IERC20Exp__factory,
  IERC20Mintable__factory: IERC20Mintable__factory
});

const _abi$b = [
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyDescription",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  }
];
class IInitializableProxy__factory {
  static abi = _abi$b;
  static createInterface() {
    return new ethers.Interface(_abi$b);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$b,
      runner
    );
  }
}

var index$j = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IInitializableProxy__factory: IInitializableProxy__factory
});

const _abi$a = [
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
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "getTokenType",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "pure",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
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
class IPriceFeed__factory {
  static abi = _abi$a;
  static createInterface() {
    return new ethers.Interface(_abi$a);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$a, runner);
  }
}

var index$i = /*#__PURE__*/Object.freeze({
  __proto__: null,
  IPriceFeed__factory: IPriceFeed__factory
});

var index$h = /*#__PURE__*/Object.freeze({
  __proto__: null,
  iInitializableProxySol: index$j,
  iPriceFeedSol: index$i,
  iarwSupplySol: index$l,
  ierc20Sol: index$k
});

const _abi$9 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
class Ownable__factory {
  static abi = _abi$9;
  static createInterface() {
    return new ethers.Interface(_abi$9);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$9, runner);
  }
}

var index$g = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Ownable__factory: Ownable__factory
});

const _abi$8 = [
  {
    inputs: [],
    name: "InvalidSignatureLength",
    type: "error"
  }
];
const _bytecode$7 = "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207a240917b058dd323e44e08adbd4c9b206d5ee80f1a9fe4027627e5a827bb2af64736f6c634300081e0033";
const isSuperArgs$7 = (xs) => xs.length > 1;
class SigLib__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$7(args)) {
      super(...args);
    } else {
      super(_abi$8, _bytecode$7, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$7;
  static abi = _abi$8;
  static createInterface() {
    return new ethers.Interface(_abi$8);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$8, runner);
  }
}

var index$f = /*#__PURE__*/Object.freeze({
  __proto__: null,
  SigLib__factory: SigLib__factory
});

const _abi$7 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode$6 = "0x6080604052348015600f57600080fd5b506108428061001f6000396000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c8063715018a61161005b578063715018a6146100bc5780638da5cb5b146100c4578063b1da41fe14610103578063f2fde38b1461011857600080fd5b8062b105e61461008157806314d3940d14610096578063329bad17146100a9575b600080fd5b61009461008f36600461074a565b61012b565b005b6100946100a436600461074a565b6101cd565b6100946100b736600461074a565b610266565b610094610362565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546040516001600160a01b0390911681526020015b60405180910390f35b61010b610376565b6040516100fa9190610773565b61009461012636600461074a565b610387565b6101336103c5565b61013e60008261043b565b6101815760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61018c600082610462565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6101d56103c5565b6101e060008261043b565b156102215760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610178565b61022c600082610477565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e906020016101c2565b600061027061048c565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156102985750825b905060008267ffffffffffffffff1660011480156102b55750303b155b9050811580156102c3575080155b156102e15760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561030b57845460ff60401b1916600160401b1785555b610314866104b5565b831561035a57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b61036a6103c5565b61037460006104cf565b565b60606103826000610540565b905090565b61038f6103c5565b6001600160a01b0381166103b957604051631e4fbdf760e01b815260006004820152602401610178565b6103c2816104cf565b50565b60006103f87f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b0381161580159061041b57506001600160a01b0381163314155b156103c25760405163118cdaa760e01b8152336004820152602401610178565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b6000610459836001600160a01b038416610554565b6000610459836001600160a01b038416610647565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a0061045c565b6001600160a01b0381166104c65750335b61022181610696565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b6060600061054d836106a7565b9392505050565b6000818152600183016020526040812054801561063d5760006105786001836107bf565b855490915060009061058c906001906107bf565b90508082146105f15760008660000182815481106105ac576105ac6107e0565b90600052602060002001549050808760000184815481106105cf576105cf6107e0565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610602576106026107f6565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061045c565b600091505061045c565b600081815260018301602052604081205461068e5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561045c565b50600061045c565b61069e610703565b6103c281610728565b6060816000018054806020026020016040519081016040528092919081815260200182805480156106f757602002820191906000526020600020905b8154815260200190600101908083116106e3575b50505050509050919050565b61070b610730565b61037457604051631afcd79f60e31b815260040160405180910390fd5b61038f610703565b600061073a61048c565b54600160401b900460ff16919050565b60006020828403121561075c57600080fd5b81356001600160a01b038116811461054d57600080fd5b602080825282518282018190526000918401906040840190835b818110156107b45783516001600160a01b031683526020938401939092019160010161078d565b509095945050505050565b8181038181111561045c57634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea2646970667358221220c9f2d95787ca9171427cd5d8089d4ec487033af677e7c22a744bd3ec0eea4dea64736f6c634300081e0033";
const isSuperArgs$6 = (xs) => xs.length > 1;
class WithSettler__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$6(args)) {
      super(...args);
    } else {
      super(_abi$7, _bytecode$6, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$6;
  static abi = _abi$7;
  static createInterface() {
    return new ethers.Interface(_abi$7);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$7, runner);
  }
}

var index$e = /*#__PURE__*/Object.freeze({
  __proto__: null,
  WithSettler__factory: WithSettler__factory
});

var index$d = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ownableSol: index$g,
  sigLibSol: index$f,
  withSettlerSol: index$e
});

const _abi$6 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    name: "UnexpectedRequestID",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address"
      }
    ],
    name: "InitializedConsumer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "Response",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "upkeepContract",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepInterval",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepRateInterval",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepRateCap",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maxBaseGasPrice",
        type: "uint64"
      }
    ],
    name: "SetUpkeep",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
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
    name: "deploymentTimestamp",
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
    name: "description",
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
    name: "donID",
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
    inputs: [],
    name: "gasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
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
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "getUpkeepTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "i_router",
    outputs: [
      {
        internalType: "contract IFunctionsRouter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "_router",
        type: "address"
      },
      {
        internalType: "address",
        name: "_upkeepContract",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_upkeepInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateCap",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_maxBaseGasPrice",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_updateInterval",
        type: "uint64"
      }
    ],
    name: "initializeARWFeedInfo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_router",
        type: "address"
      }
    ],
    name: "initializeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "initializeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "lastUpkeep",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
    name: "maxBaseGasPrice",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "request",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_lastRequestId",
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
    inputs: [],
    name: "sendRequestCBOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "setAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "_updateInterval",
        type: "uint64"
      }
    ],
    name: "setInterval",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_upkeepContract",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_upkeepInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateCap",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_maxBaseGasPrice",
        type: "uint64"
      }
    ],
    name: "setUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256"
      }
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
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
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newAnswer",
        type: "int256"
      }
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "updateInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_request",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "_gasLimit",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "_donID",
        type: "bytes32"
      }
    ],
    name: "updateRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepRateCap",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepRateInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "upkeepRates",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
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
const _bytecode$5 = "0x60806040526006600555348015601457600080fd5b50612543806100246000396000f3fe608060405234801561001057600080fd5b50600436106102ba5760003560e01c8063668a0f0211610182578063b1da41fe116100e9578063c41c7dce116100a2578063f2fde38b1161007c578063f2fde38b1461068f578063f68016b7146106a2578063fd2c80ae146106ce578063feaf968c146106e157600080fd5b8063c41c7dce14610656578063d0d552dd14610669578063e58864421461067c57600080fd5b8063b1da41fe146105d5578063b1e21749146105ea578063b5ab58dc146105f3578063b633620c14610613578063bfc12c0514610633578063c3ba0e241461063c57600080fd5b80638205bf6a1161013b5780638205bf6a1461053d5780638da5cb5b1461054657806390c3f38f1461054e5780639a6fc8f514610561578063a26fd90d146105a8578063a87a20ce146105c257600080fd5b8063668a0f02146104d15780636ad6c8ce146104da5780636e04ff0d146105035780636e74336b14610524578063715018a61461052d5780637284e4161461053557600080fd5b80633b2235fc1161022657806354fd4d50116101df57806354fd4d5014610462578063581bdd161461046b57806359770db21461047e5780635a74373c146104915780635dcbdc5a146104ab5780635e0611f1146104be57600080fd5b80633b2235fc146103e65780633d7c5d3e14610406578063408def1e146104205780634585e33b146104335780634f8c0c781461044657806350d25bcd1461045957600080fd5b806314d3940d1161027857806314d3940d14610353578063225a2b9314610366578063313ce56714610379578063329bad1714610393578063338cdca1146103a657806338d52e0f146103bb57600080fd5b8062b105e6146102bf5780630494878e146102d4578063057b39671461030457806309c1ba2e146103175780630ca761751461032a57806314b316781461033d575b600080fd5b6102d26102cd366004611c48565b6106e9565b005b6012546102e7906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b6102d2610312366004611d0d565b61078b565b600e546102e7906001600160401b031681565b6102d2610338366004611d6a565b610877565b6103456108dd565b6040519081526020016102fb565b6102d2610361366004611c48565b610a0d565b6102d2610374366004611dc4565b610aa6565b610381600881565b60405160ff90911681526020016102fb565b6102d26103a1366004611c48565b610b90565b6103ae610c78565b6040516102fb9190611e3d565b6003546103ce906001600160a01b031681565b6040516001600160a01b0390911681526020016102fb565b6103456103f4366004611e50565b600c6020526000908152604090205481565b6012546102e790600160801b90046001600160401b031681565b6102d261042e366004611e50565b610d06565b6102d2610441366004611e69565b610d13565b6102d2610454366004611ef2565b610d5f565b61034560075481565b61034560055481565b6000546103ce906001600160a01b031681565b6102d261048c366004611fc6565b610e73565b6011546102e790600160a01b90046001600160401b031681565b6102e76104b9366004611e50565b610e9e565b6011546103ce906001600160a01b031681565b61034560095481565b6102e76104e8366004611fc6565b6013602052600090815260409020546001600160401b031681565b610516610511366004611e69565b610ec7565b6040516102fb929190611fe1565b610345600f5481565b6102d2610eed565b6103ae610f01565b61034560085481565b6103ce610f0e565b6102d261055c366004612004565b610f3c565b61057461056f366004612038565b610f80565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016102fb565b6012546102e790600160c01b90046001600160401b031681565b6102d26105d0366004611e50565b610ffe565b6105dd61105f565b6040516102fb9190612061565b61034560105481565b610345610601366004611e50565b600a6020526000908152604090205481565b610345610621366004611e50565b600b6020526000908152604090205481565b61034560065481565b6012546102e790600160401b90046001600160401b031681565b6102d26106643660046120ad565b611070565b6102d2610677366004611c48565b6110c4565b6102d261068a36600461211d565b611116565b6102d261069d366004611c48565b6111e5565b600e546106b990600160401b900463ffffffff1681565b60405163ffffffff90911681526020016102fb565b6014546102e7906001600160401b031681565b610574611220565b6106f1611244565b6106fc600182611291565b61073f5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61074a6001826112b6565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b60006107956112cb565b805490915060ff600160401b82041615906001600160401b03166000811580156107bc5750825b90506000826001600160401b031660011480156107d85750303b155b9050811580156107e6575080155b156108045760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561082e57845460ff60401b1916600160401b1785555b6108398888886112f4565b831561086d57845460ff60401b19168555604051600181526000805160206124ee8339815191529060200160405180910390a15b5050505050505050565b6000546001600160a01b031633146108a25760405163c6829f8360e01b815260040160405180910390fd5b6108ad83838361131d565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b60006108e7610f0e565b6001600160a01b0316336001600160a01b0316148061091057506011546001600160a01b031633145b61094f5760405162461bcd60e51b815260206004820152601060248201526f2737ba20b63637bbb2b221b0b63632b960811b6044820152606401610736565b610a03600d805461095f90612182565b80601f016020809104026020016040519081016040528092919081815260200182805461098b90612182565b80156109d85780601f106109ad576101008083540402835291602001916109d8565b820191906000526020600020905b8154815290600101906020018083116109bb57829003601f168201915b5050600e54600f546001600160401b0382169450600160401b90910463ffffffff16925090506113fe565b6010819055905090565b610a15611244565b610a20600182611291565b15610a615760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610736565b610a6c6001826114b2565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e90602001610780565b6000610ab06112cb565b805490915060ff600160401b82041615906001600160401b0316600081158015610ad75750825b90506000826001600160401b03166001148015610af35750303b155b905081158015610b01575080155b15610b1f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610b4957845460ff60401b1916600160401b1785555b610b5387876114c7565b8315610b8757845460ff60401b19168555604051600181526000805160206124ee8339815191529060200160405180910390a15b50505050505050565b6000610b9a6112cb565b805490915060ff600160401b82041615906001600160401b0316600081158015610bc15750825b90506000826001600160401b03166001148015610bdd5750303b155b905081158015610beb575080155b15610c095760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610c3357845460ff60401b1916600160401b1785555b610c3c86611532565b8315610c7057845460ff60401b19168555604051600181526000805160206124ee8339815191529060200160405180910390a15b505050505050565b600d8054610c8590612182565b80601f0160208091040260200160405190810160405280929190818152602001828054610cb190612182565b8015610cfe5780601f10610cd357610100808354040283529160200191610cfe565b820191906000526020600020905b815481529060010190602001808311610ce157829003601f168201915b505050505081565b610d0e611244565b600555565b610d1b61154c565b15610d5b576012805467ffffffffffffffff60801b1916600160801b426001600160401b031602179055600d8054610d57919061095f90612182565b6010555b5050565b6000610d696112cb565b805490915060ff600160401b82041615906001600160401b0316600081158015610d905750825b90506000826001600160401b03166001148015610dac5750303b155b905081158015610dba575080155b15610dd85760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610e0257845460ff60401b1916600160401b1785555b610e0b86610e73565b610e188b8b8b8b8b611116565b610e2360008d6114c7565b610e2e8f8f8f6112f4565b8315610e6257845460ff60401b19168555604051600181526000805160206124ee8339815191529060200160405180910390a15b505050505050505050505050505050565b610e7b611244565b6014805467ffffffffffffffff19166001600160401b0392909216919091179055565b6012546000906001600160401b0316610eb781846121e8565b610ec19190612216565b92915050565b60006060610ed361154c565b604080516000815260208101909152909590945092505050565b610ef5611244565b610eff600061158c565b565b60048054610c8590612182565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b610f44611244565b6004610f508282612286565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516107809190611e3d565b6001600160501b0381166000818152600a6020526040812054839290919081908190610fae57600654610fd6565b600b6000610fc660016001600160501b038a16612344565b8152602001908152602001600020545b6001600160501b0387166000908152600b602052604090205495979496909594909350915050565b611009600133611291565b6110435760405162461bcd60e51b815260206004820152600b60248201526a2727aa2fa9a2aa2a2622a960a91b6044820152606401610736565b61105c8160095460016110569190612357565b426115fd565b50565b606061106b60016116c9565b905090565b611078611244565b600d6110848582612286565b50600e805463ffffffff909316600160401b026bffffffffffffffffffffffff199093166001600160401b039094169390931791909117909155600f5550565b6110cc611244565b600380546001600160a01b0319166001600160a01b0383169081179091556040517fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a250565b61111e611244565b601180546001600160a01b0387166001600160e01b03199091168117600160a01b6001600160401b0388811691820292909217909355601280548783166fffffffffffffffffffffffffffffffff199091168117600160401b888516908102919091176001600160c01b0316600160c01b948816948502179092556040805195865260208601919091528401526060830152907fbed5a7c7626f62707ea8a0c71900fd8623e8ae9fde3cd99cfa5dc7d54bbabee09060800160405180910390a25050505050565b6111ed611244565b6001600160a01b03811661121757604051631e4fbdf760e01b815260006004820152602401610736565b61105c8161158c565b6000806000806000611233600954610f80565b945094509450945094509091929394565b600061124e610f0e565b90506001600160a01b0381161580159061127157506001600160a01b0381163314155b1561105c5760405163118cdaa760e01b8152336004820152602401610736565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b60006112af836001600160a01b0384166116d6565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610ec1565b426006908155600555611306826110c4565b61130f81610f3c565b61131883611532565b505050565b6013600061132a42610e9e565b6001600160401b03908116825260208201929092526040016000908120805490921691906113578361236a565b91906101000a8154816001600160401b0302191690836001600160401b031602179055505082601054146113a15760405163d068bf5b60e01b815260048101849052602401610736565b600182511180156113b157508051155b156113bf576113bf826117d0565b827f7873807bf6ddc50401cd3d29bbe0decee23fd4d68d273f4b5eb83cded4d2f17283836040516113f1929190612395565b60405180910390a2505050565b6000805460405163230e93b160e11b815282916001600160a01b03169063461d2762906114389088908a906001908a908a906004016123c3565b6020604051808303816000875af1158015611457573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061147b919061240c565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b60006112af836001600160a01b0384166118c4565b600080546001600160a01b0319166001600160a01b0383161790556001600160a01b038216156114fa576114fa82611532565b6040516001600160a01b038216907f8e027fb3d390e4e77e8857eb25c3f2b2b17eb69cb36c0b1b993f8a94e29accea90600090a25050565b6001600160a01b0381166115435750335b610a6181611913565b6000611556611924565b6115605750600090565b601454600854611579916001600160401b031690612357565b4210156115865750600090565b50600190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b806008541061160b57505050565b6007839055600881905560098290556000828152600b602090815260408083208054600a845282852088905590859055848452600c90925290912084905515158061168857604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f846040516116bb91815260200190565b60405180910390a350505050565b606060006112af836119dd565b600081815260018301602052604081205480156117bf5760006116fa600183612344565b855490915060009061170e90600190612344565b905080821461177357600086600001828154811061172e5761172e612425565b906000526020600020015490508087600001848154811061175157611751612425565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806117845761178461243b565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610ec1565b6000915050610ec1565b5092915050565b60006117db82611a39565b90506000600282516117ed9190612451565b905060005b818110156118be57600083611808836002612465565b8151811061181857611818612425565b602002602001015190506000848360026118329190612465565b61183d906001612357565b8151811061184d5761184d612425565b602002602001015190506000826001600160401b0316905080600c6000846001600160401b031681526020019081526020016000205403611890575050506118b6565b6118b28160095460016118a39190612357565b846001600160401b03166115fd565b5050505b6001016117f2565b50505050565b600081815260018301602052604081205461190b57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610ec1565b506000610ec1565b61191b611be5565b61105c81611c0a565b6012546000906001600160401b03600160c01b909104811648909116111561194c5750600090565b601154601254611976916001600160401b03600160a01b909104811691600160801b90041661247c565b6001600160401b0316426001600160401b031610156119955750600090565b601254600160401b90046001600160401b0316601360006119b542610e9e565b6001600160401b03908116825260208201929092526040016000205416106115865750600090565b606081600001805480602002602001604051908101604052809291908181526020018280548015611a2d57602002820191906000526020600020905b815481526020019060010190808311611a19575b50505050509050919050565b606060088251611a49919061249b565b15611aaa5760405162461bcd60e51b815260206004820152602b60248201527f44617461206c656e677468206d75737420626520646976697369626c6520627960448201526a206368756e6b2073697a6560a81b6064820152608401610736565b600060088351611aba9190612451565b90506000816001600160401b03811115611ad657611ad6611c63565b604051908082528060200260200182016040528015611aff578160200160208202803683370190505b50905060005b82811015611bdd5760408051600880825281830190925260009160208201818036833701905050905060005b6008811015611b9d578681611b47856008612465565b611b519190612357565b81518110611b6157611b61612425565b602001015160f81c60f81b828281518110611b7e57611b7e612425565b60200101906001600160f81b031916908160001a905350600101611b31565b50611ba7816124af565b60c01c838381518110611bbc57611bbc612425565b6001600160401b039092166020928302919091019091015250600101611b05565b509392505050565b611bed611c12565b610eff57604051631afcd79f60e31b815260040160405180910390fd5b6111ed611be5565b6000611c1c6112cb565b54600160401b900460ff16919050565b80356001600160a01b0381168114611c4357600080fd5b919050565b600060208284031215611c5a57600080fd5b6112af82611c2c565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611c8a57600080fd5b8135602083016000806001600160401b03841115611caa57611caa611c63565b50604051601f19601f85018116603f011681018181106001600160401b0382111715611cd857611cd8611c63565b604052838152905080828401871015611cf057600080fd5b838360208301376000602085830101528094505050505092915050565b600080600060608486031215611d2257600080fd5b611d2b84611c2c565b9250611d3960208501611c2c565b915060408401356001600160401b03811115611d5457600080fd5b611d6086828701611c79565b9150509250925092565b600080600060608486031215611d7f57600080fd5b8335925060208401356001600160401b03811115611d9c57600080fd5b611da886828701611c79565b92505060408401356001600160401b03811115611d5457600080fd5b60008060408385031215611dd757600080fd5b611de083611c2c565b9150611dee60208401611c2c565b90509250929050565b6000815180845260005b81811015611e1d57602081850181015186830182015201611e01565b506000602082860101526020601f19601f83011685010191505092915050565b6020815260006112af6020830184611df7565b600060208284031215611e6257600080fd5b5035919050565b60008060208385031215611e7c57600080fd5b82356001600160401b03811115611e9257600080fd5b8301601f81018513611ea357600080fd5b80356001600160401b03811115611eb957600080fd5b856020828401011115611ecb57600080fd5b6020919091019590945092505050565b80356001600160401b0381168114611c4357600080fd5b6000806000806000806000806000806101408b8d031215611f1257600080fd5b611f1b8b611c2c565b9950611f2960208c01611c2c565b985060408b01356001600160401b03811115611f4457600080fd5b611f508d828e01611c79565b985050611f5f60608c01611c2c565b9650611f6d60808c01611c2c565b9550611f7b60a08c01611edb565b9450611f8960c08c01611edb565b9350611f9760e08c01611edb565b9250611fa66101008c01611edb565b9150611fb56101208c01611edb565b90509295989b9194979a5092959850565b600060208284031215611fd857600080fd5b6112af82611edb565b8215158152604060208201526000611ffc6040830184611df7565b949350505050565b60006020828403121561201657600080fd5b81356001600160401b0381111561202c57600080fd5b611ffc84828501611c79565b60006020828403121561204a57600080fd5b81356001600160501b03811681146112af57600080fd5b602080825282518282018190526000918401906040840190835b818110156120a25783516001600160a01b031683526020938401939092019160010161207b565b509095945050505050565b600080600080608085870312156120c357600080fd5b84356001600160401b038111156120d957600080fd5b6120e587828801611c79565b9450506120f460208601611edb565b9250604085013563ffffffff8116811461210d57600080fd5b9396929550929360600135925050565b600080600080600060a0868803121561213557600080fd5b61213e86611c2c565b945061214c60208701611edb565b935061215a60408701611edb565b925061216860608701611edb565b915061217660808701611edb565b90509295509295909350565b600181811c9082168061219657607f821691505b6020821081036121b657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001600160401b03831680612201576122016121bc565b806001600160401b0384160491505092915050565b6001600160401b0381811683821602908116908181146117c9576117c96121d2565b601f82111561131857806000526020600020601f840160051c8101602085101561225f5750805b601f840160051c820191505b8181101561227f576000815560010161226b565b5050505050565b81516001600160401b0381111561229f5761229f611c63565b6122b3816122ad8454612182565b84612238565b6020601f8211600181146122e757600083156122cf5750848201515b600019600385901b1c1916600184901b17845561227f565b600084815260208120601f198516915b8281101561231757878501518255602094850194600190920191016122f7565b50848210156123355786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b81810381811115610ec157610ec16121d2565b80820180821115610ec157610ec16121d2565b60006001600160401b0382166001600160401b03810361238c5761238c6121d2565b60010192915050565b6040815260006123a86040830185611df7565b82810360208401526123ba8185611df7565b95945050505050565b6001600160401b038616815260a0602082015260006123e560a0830187611df7565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561241e57600080fd5b5051919050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b600082612460576124606121bc565b500490565b8082028115828204841417610ec157610ec16121d2565b6001600160401b038181168382160190811115610ec157610ec16121d2565b6000826124aa576124aa6121bc565b500690565b805160208201516001600160c01b03198116919060088210156124e6576001600160c01b0319600883900360031b81901b82161692505b505091905056fec7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d2a2646970667358221220c829b9b0f932cbddc1c2b893fadbff98e8f887c229bfacd623eb67fc3d8b6cfd64736f6c634300081e0033";
const isSuperArgs$5 = (xs) => xs.length > 1;
class ARWFeed__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$5(args)) {
      super(...args);
    } else {
      super(_abi$6, _bytecode$5, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$5;
  static abi = _abi$6;
  static createInterface() {
    return new ethers.Interface(_abi$6);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$6, runner);
  }
}

var index$c = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ARWFeed__factory: ARWFeed__factory
});

const _abi$5 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error"
  },
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    name: "UnexpectedRequestID",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "router",
        type: "address"
      }
    ],
    name: "InitializedConsumer",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestSent",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "Response",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "upkeepContract",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepInterval",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepRateInterval",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "upkeepRateCap",
        type: "uint64"
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "maxBaseGasPrice",
        type: "uint64"
      }
    ],
    name: "SetUpkeep",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool"
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "donID",
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
    inputs: [],
    name: "gasLimit",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256"
      }
    ],
    name: "getUpkeepTime",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "i_router",
    outputs: [
      {
        internalType: "contract IFunctionsRouter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_router",
        type: "address"
      }
    ],
    name: "initializeConsumer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "lastUpkeep",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "maxBaseGasPrice",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "request",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "s_lastRequestId",
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
    inputs: [],
    name: "sendRequestCBOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_upkeepContract",
        type: "address"
      },
      {
        internalType: "uint64",
        name: "_upkeepInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateInterval",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_upkeepRateCap",
        type: "uint64"
      },
      {
        internalType: "uint64",
        name: "_maxBaseGasPrice",
        type: "uint64"
      }
    ],
    name: "setUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
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
    name: "subscriptionId",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_request",
        type: "bytes"
      },
      {
        internalType: "uint64",
        name: "_subscriptionId",
        type: "uint64"
      },
      {
        internalType: "uint32",
        name: "_gasLimit",
        type: "uint32"
      },
      {
        internalType: "bytes32",
        name: "_donID",
        type: "bytes32"
      }
    ],
    name: "updateRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepContract",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepRateCap",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "upkeepRateInterval",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    name: "upkeepRates",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const _bytecode$4 = "0x6080604052348015600f57600080fd5b506118da8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101c35760003560e01c80635e0611f1116100f9578063b1da41fe11610097578063c41c7dce11610071578063c41c7dce146103e4578063e5886442146103f7578063f2fde38b1461040a578063f68016b71461041d57600080fd5b8063b1da41fe146103ac578063b1e21749146103c1578063c3ba0e24146103ca57600080fd5b80636e74336b116100d35780636e74336b14610379578063715018a6146103825780638da5cb5b1461038a578063a26fd90d1461039257600080fd5b80635e0611f11461031c5780636ad6c8ce1461032f5780636e04ff0d1461035857600080fd5b8063329bad17116101665780634585e33b116101405780634585e33b146102b1578063581bdd16146102c45780635a74373c146102ef5780635dcbdc5a1461030957600080fd5b8063329bad171461026f578063338cdca1146102825780633d7c5d3e1461029757600080fd5b80630ca76175116101a25780630ca761751461022057806314b316781461023357806314d3940d14610249578063225a2b931461025c57600080fd5b8062b105e6146101c85780630494878e146101dd57806309c1ba2e1461020d575b600080fd5b6101db6101d6366004611215565b610449565b005b6008546101f0906001600160401b031681565b6040516001600160401b0390911681526020015b60405180910390f35b6004546101f0906001600160401b031681565b6101db61022e3660046112d3565b6104eb565b61023b610551565b604051908152602001610204565b6101db610257366004611215565b610681565b6101db61026a366004611343565b61071a565b6101db61027d366004611215565b610816565b61028a610910565b60405161020491906113bc565b6008546101f090600160801b90046001600160401b031681565b6101db6102bf3660046113cf565b61099e565b6000546102d7906001600160a01b031681565b6040516001600160a01b039091168152602001610204565b6007546101f090600160a01b90046001600160401b031681565b6101f0610317366004611441565b6109ea565b6007546102d7906001600160a01b031681565b6101f061033d366004611471565b6009602052600090815260409020546001600160401b031681565b61036b6103663660046113cf565b610a13565b60405161020492919061148c565b61023b60055481565b6101db610a39565b6102d7610a4d565b6008546101f090600160c01b90046001600160401b031681565b6103b4610a7b565b60405161020491906114af565b61023b60065481565b6008546101f090600160401b90046001600160401b031681565b6101db6103f23660046114fb565b610a8c565b6101db61040536600461156b565b610ae0565b6101db610418366004611215565b610baf565b60045461043490600160401b900463ffffffff1681565b60405163ffffffff9091168152602001610204565b610451610bed565b61045c600182610c3a565b61049f5760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b6104aa600182610c5f565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6000546001600160a01b031633146105165760405163c6829f8360e01b815260040160405180910390fd5b610521838383610c74565b60405183907f85e1543bf2f84fe80c6badbce3648c8539ad1df4d2b3d822938ca0538be727e690600090a2505050565b600061055b610a4d565b6001600160a01b0316336001600160a01b0316148061058457506007546001600160a01b031633145b6105c35760405162461bcd60e51b815260206004820152601060248201526f2737ba20b63637bbb2b221b0b63632b960811b6044820152606401610496565b610677600380546105d3906115d0565b80601f01602080910402602001604051908101604052809291908181526020018280546105ff906115d0565b801561064c5780601f106106215761010080835404028352916020019161064c565b820191906000526020600020905b81548152906001019060200180831161062f57829003601f168201915b50506004546005546001600160401b0382169450600160401b90910463ffffffff1692509050610d48565b6006819055905090565b610689610bed565b610694600182610c3a565b156106d55760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610496565b6106e0600182610dfc565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e906020016104e0565b6000610724610e11565b805490915060ff600160401b82041615906001600160401b031660008115801561074b5750825b90506000826001600160401b031660011480156107675750303b155b905081158015610775575080155b156107935760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156107bd57845460ff60401b1916600160401b1785555b6107c78787610e3a565b831561080d57845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6000610820610e11565b805490915060ff600160401b82041615906001600160401b03166000811580156108475750825b90506000826001600160401b031660011480156108635750303b155b905081158015610871575080155b1561088f5760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156108b957845460ff60401b1916600160401b1785555b6108c286610ea5565b831561090857845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6003805461091d906115d0565b80601f0160208091040260200160405190810160405280929190818152602001828054610949906115d0565b80156109965780601f1061096b57610100808354040283529160200191610996565b820191906000526020600020905b81548152906001019060200180831161097957829003601f168201915b505050505081565b6109a6610ebf565b156109e6576008805467ffffffffffffffff60801b1916600160801b426001600160401b031602179055600380546109e291906105d3906115d0565b6006555b5050565b6008546000906001600160401b0316610a038184611620565b610a0d919061165c565b92915050565b60006060610a1f610ebf565b604080516000815260208101909152909590945092505050565b610a41610bed565b610a4b6000610f7e565b565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b6060610a876001610fef565b905090565b610a94610bed565b6003610aa085826116cd565b506004805463ffffffff909316600160401b026bffffffffffffffffffffffff199093166001600160401b03909416939093179190911790915560055550565b610ae8610bed565b600780546001600160a01b0387166001600160e01b03199091168117600160a01b6001600160401b0388811691820292909217909355600880548783166fffffffffffffffffffffffffffffffff199091168117600160401b888516908102919091176001600160c01b0316600160c01b948816948502179092556040805195865260208601919091528401526060830152907fbed5a7c7626f62707ea8a0c71900fd8623e8ae9fde3cd99cfa5dc7d54bbabee09060800160405180910390a25050505050565b610bb7610bed565b6001600160a01b038116610be157604051631e4fbdf760e01b815260006004820152602401610496565b610bea81610f7e565b50565b6000610bf7610a4d565b90506001600160a01b03811615801590610c1a57506001600160a01b0381163314155b15610bea5760405163118cdaa760e01b8152336004820152602401610496565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b6000610c58836001600160a01b038416610ffc565b60096000610c81426109ea565b6001600160401b0390811682526020820192909252604001600090812080549092169190610cae8361178b565b91906101000a8154816001600160401b0302191690836001600160401b03160217905550508260065414610cf85760405163d068bf5b60e01b815260048101849052602401610496565b60018251118015610d0857508051155b50827f7873807bf6ddc50401cd3d29bbe0decee23fd4d68d273f4b5eb83cded4d2f1728383604051610d3b9291906117b6565b60405180910390a2505050565b6000805460405163230e93b160e11b815282916001600160a01b03169063461d276290610d829088908a906001908a908a906004016117e4565b6020604051808303816000875af1158015610da1573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610dc5919061182d565b60405190915081907f1131472297a800fee664d1d89cfa8f7676ff07189ecc53f80bbb5f4969099db890600090a295945050505050565b6000610c58836001600160a01b0384166110f6565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610a0d565b600080546001600160a01b0319166001600160a01b0383161790556001600160a01b03821615610e6d57610e6d82610ea5565b6040516001600160a01b038216907f8e027fb3d390e4e77e8857eb25c3f2b2b17eb69cb36c0b1b993f8a94e29accea90600090a25050565b6001600160a01b038116610eb65750335b6106d581611145565b6008546000906001600160401b03600160c01b9091048116489091161115610ee75750600090565b600754600854610f11916001600160401b03600160a01b909104811691600160801b900416611846565b6001600160401b0316426001600160401b03161015610f305750600090565b600854600160401b90046001600160401b031660096000610f50426109ea565b6001600160401b0390811682526020820192909252604001600020541610610f785750600090565b50600190565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b60606000610c5883611156565b600081815260018301602052604081205480156110e5576000611020600183611865565b855490915060009061103490600190611865565b905080821461109957600086600001828154811061105457611054611878565b906000526020600020015490508087600001848154811061107757611077611878565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806110aa576110aa61188e565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610a0d565b6000915050610a0d565b5092915050565b600081815260018301602052604081205461113d57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a0d565b506000610a0d565b61114d6111b2565b610bea816111d7565b6060816000018054806020026020016040519081016040528092919081815260200182805480156111a657602002820191906000526020600020905b815481526020019060010190808311611192575b50505050509050919050565b6111ba6111df565b610a4b57604051631afcd79f60e31b815260040160405180910390fd5b610bb76111b2565b60006111e9610e11565b54600160401b900460ff16919050565b80356001600160a01b038116811461121057600080fd5b919050565b60006020828403121561122757600080fd5b610c58826111f9565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261125757600080fd5b81356001600160401b0381111561127057611270611230565b604051601f8201601f19908116603f011681016001600160401b038111828210171561129e5761129e611230565b6040528181528382016020018510156112b657600080fd5b816020850160208301376000918101602001919091529392505050565b6000806000606084860312156112e857600080fd5b8335925060208401356001600160401b0381111561130557600080fd5b61131186828701611246565b92505060408401356001600160401b0381111561132d57600080fd5b61133986828701611246565b9150509250925092565b6000806040838503121561135657600080fd5b61135f836111f9565b915061136d602084016111f9565b90509250929050565b6000815180845260005b8181101561139c57602081850181015186830182015201611380565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610c586020830184611376565b600080602083850312156113e257600080fd5b82356001600160401b038111156113f857600080fd5b8301601f8101851361140957600080fd5b80356001600160401b0381111561141f57600080fd5b85602082840101111561143157600080fd5b6020919091019590945092505050565b60006020828403121561145357600080fd5b5035919050565b80356001600160401b038116811461121057600080fd5b60006020828403121561148357600080fd5b610c588261145a565b82151581526040602082015260006114a76040830184611376565b949350505050565b602080825282518282018190526000918401906040840190835b818110156114f05783516001600160a01b03168352602093840193909201916001016114c9565b509095945050505050565b6000806000806080858703121561151157600080fd5b84356001600160401b0381111561152757600080fd5b61153387828801611246565b9450506115426020860161145a565b9250604085013563ffffffff8116811461155b57600080fd5b9396929550929360600135925050565b600080600080600060a0868803121561158357600080fd5b61158c866111f9565b945061159a6020870161145a565b93506115a86040870161145a565b92506115b66060870161145a565b91506115c46080870161145a565b90509295509295909350565b600181811c908216806115e457607f821691505b60208210810361160457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60006001600160401b0383168061164757634e487b7160e01b600052601260045260246000fd5b806001600160401b0384160491505092915050565b6001600160401b0381811683821602908116908181146110ef576110ef61160a565b601f8211156116c857806000526020600020601f840160051c810160208510156116a55750805b601f840160051c820191505b818110156116c557600081556001016116b1565b50505b505050565b81516001600160401b038111156116e6576116e6611230565b6116fa816116f484546115d0565b8461167e565b6020601f82116001811461172e57600083156117165750848201515b600019600385901b1c1916600184901b1784556116c5565b600084815260208120601f198516915b8281101561175e578785015182556020948501946001909201910161173e565b508482101561177c5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b60006001600160401b0382166001600160401b0381036117ad576117ad61160a565b60010192915050565b6040815260006117c96040830185611376565b82810360208401526117db8185611376565b95945050505050565b6001600160401b038616815260a06020820152600061180660a0830187611376565b61ffff9590951660408301525063ffffffff92909216606083015260809091015292915050565b60006020828403121561183f57600080fd5b5051919050565b6001600160401b038181168382160190811115610a0d57610a0d61160a565b81810381811115610a0d57610a0d61160a565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea26469706673582212208a71986d3282ecc3298ed4636319f6f508f3ca7e957184313d54142cbeae548764736f6c634300081e0033";
const isSuperArgs$4 = (xs) => xs.length > 1;
class BaseFunctionsConsumer__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$4(args)) {
      super(...args);
    } else {
      super(_abi$5, _bytecode$4, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$4;
  static abi = _abi$5;
  static createInterface() {
    return new ethers.Interface(_abi$5);
  }
  static connect(address, runner) {
    return new ethers.Contract(
      address,
      _abi$5,
      runner
    );
  }
}

var index$b = /*#__PURE__*/Object.freeze({
  __proto__: null,
  BaseFunctionsConsumer__factory: BaseFunctionsConsumer__factory
});

const _abi$4 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newSettler",
        type: "address"
      }
    ],
    name: "AddSettler",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int256",
        name: "current",
        type: "int256"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      }
    ],
    name: "AnswerUpdated",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      }
    ],
    name: "NewAsset",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "NewDescription",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "roundId",
        type: "uint256"
      },
      {
        indexed: true,
        internalType: "address",
        name: "startedBy",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      }
    ],
    name: "NewRound",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "oldSettler",
        type: "address"
      }
    ],
    name: "RemoveSettler",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "addSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
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
    name: "deploymentTimestamp",
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
    name: "description",
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
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "roundId",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "answer",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "startedAt",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "updatedAt",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "answeredInRound",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
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
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      },
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "initializeFeed",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_initOwner",
        type: "address"
      }
    ],
    name: "initializeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_settler",
        type: "address"
      }
    ],
    name: "removeSettler",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_asset",
        type: "address"
      }
    ],
    name: "setAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "setDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_version",
        type: "uint256"
      }
    ],
    name: "setVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "settlers",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "newAnswer",
        type: "int256"
      }
    ],
    name: "updateAnswer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
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
const _bytecode$3 = "0x60806040526006600455348015601457600080fd5b50611237806100246000396000f3fe608060405234801561001057600080fd5b50600436106101725760003560e01c80637284e416116100de578063b1da41fe11610097578063bfc12c0511610071578063bfc12c0514610383578063d0d552dd1461038c578063f2fde38b1461039f578063feaf968c146103b257600080fd5b8063b1da41fe1461032e578063b5ab58dc14610343578063b633620c1461036357600080fd5b80637284e416146102735780638205bf6a146102885780638da5cb5b1461029157806390c3f38f146102c15780639a6fc8f5146102d4578063a87a20ce1461031b57600080fd5b80633b2235fc116101305780633b2235fc1461020f578063408def1e1461023d57806350d25bcd1461025057806354fd4d5014610259578063668a0f0214610262578063715018a61461026b57600080fd5b8062b105e614610177578063057b39671461018c57806314d3940d1461019f578063313ce567146101b2578063329bad17146101d157806338d52e0f146101e4575b600080fd5b61018a610185366004610e1b565b6103ba565b005b61018a61019a366004610edb565b61045c565b61018a6101ad366004610e1b565b61055c565b6101ba600881565b60405160ff90911681526020015b60405180910390f35b61018a6101df366004610e1b565b6105f5565b6002546101f7906001600160a01b031681565b6040516001600160a01b0390911681526020016101c8565b61022f61021d366004610f39565b600b6020526000908152604090205481565b6040519081526020016101c8565b61018a61024b366004610f39565b6106f1565b61022f60065481565b61022f60045481565b61022f60085481565b61018a6106fe565b61027b610712565b6040516101c89190610f52565b61022f60075481565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b03166101f7565b61018a6102cf366004610fa0565b6107a0565b6102e76102e2366004610fdd565b6107e4565b604080516001600160501b03968716815260208101959095528401929092526060830152909116608082015260a0016101c8565b61018a610329366004610f39565b610862565b6103366108c3565b6040516101c89190611006565b61022f610351366004610f39565b60096020526000908152604090205481565b61022f610371366004610f39565b600a6020526000908152604090205481565b61022f60055481565b61018a61039a366004610e1b565b6108d4565b61018a6103ad366004610e1b565b610926565b6102e7610961565b6103c2610985565b6103cd6000826109fb565b6104105760405162461bcd60e51b815260206004820152600f60248201526e24a72b20a624a22fa9a2aa2a2622a960891b60448201526064015b60405180910390fd5b61041b600082610a22565b506040516001600160a01b03821681527fc75b24622d5a8552bcfe775a11d9009ac47d4c050a3af79686aebe33f902fc03906020015b60405180910390a150565b6000610466610a37565b805490915060ff600160401b820416159067ffffffffffffffff1660008115801561048e5750825b905060008267ffffffffffffffff1660011480156104ab5750303b155b9050811580156104b9575080155b156104d75760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561050157845460ff60401b1916600160401b1785555b61050c888888610a60565b831561055257845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b5050505050505050565b610564610985565b61056f6000826109fb565b156105b05760405162461bcd60e51b8152602060048201526011602482015270222aa82624a1a0aa22afa9a2aa2a2622a960791b6044820152606401610407565b6105bb600082610a89565b506040516001600160a01b03821681527f0e8d4de8d62b8ad5b1837a4a13009121b82a40e3bdcd6e6f454a72418cc86b0e90602001610451565b60006105ff610a37565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156106275750825b905060008267ffffffffffffffff1660011480156106445750303b155b905081158015610652575080155b156106705760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561069a57845460ff60401b1916600160401b1785555b6106a386610a9e565b83156106e957845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b6106f9610985565b600455565b610706610985565b6107106000610ab8565b565b6003805461071f90611052565b80601f016020809104026020016040519081016040528092919081815260200182805461074b90611052565b80156107985780601f1061076d57610100808354040283529160200191610798565b820191906000526020600020905b81548152906001019060200180831161077b57829003601f168201915b505050505081565b6107a8610985565b60036107b482826110da565b507f16fbb51445345dabaa215e5f99a4bd4d8ba9818b508c76d5cd0ea30abcc491c6816040516104519190610f52565b6001600160501b0381166000818152600960205260408120548392909190819081906108125760055461083a565b600a600061082a60016001600160501b038a166111af565b8152602001908152602001600020545b6001600160501b0387166000908152600a602052604090205495979496909594909350915050565b61086d6000336109fb565b6108a75760405162461bcd60e51b815260206004820152600b60248201526a2727aa2fa9a2aa2a2622a960a91b6044820152606401610407565b6108c08160085460016108ba91906111c2565b42610b29565b50565b60606108cf6000610bf5565b905090565b6108dc610985565b600280546001600160a01b0319166001600160a01b0383169081179091556040517fc7d9598af6004de7fa9c489a50a55414c75cfbce9fe56fe46956970744d6bc2c90600090a250565b61092e610985565b6001600160a01b03811661095857604051631e4fbdf760e01b815260006004820152602401610407565b6108c081610ab8565b60008060008060006109746008546107e4565b945094509450945094509091929394565b60006109b87f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b038116158015906109db57506001600160a01b0381163314155b156108c05760405163118cdaa760e01b8152336004820152602401610407565b6001600160a01b038116600090815260018301602052604081205415155b90505b92915050565b6000610a19836001600160a01b038416610c09565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00610a1c565b426005556006600455610a72826108d4565b610a7b816107a0565b610a8483610a9e565b505050565b6000610a19836001600160a01b038416610cfc565b6001600160a01b038116610aaf5750335b6105b081610d4b565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b8060075410610b3757505050565b6006839055600781905560088290556000828152600a6020908152604080832080546009845282852088905590859055848452600b909252909120849055151580610bb457604051828152339084907f0109fc6f55cf40689f02fbaad7af7fe7bbac8a3d2186600afc7d3e10cac602719060200160405180910390a35b82847f0559884fd3a460db3073b7fc896cc77986f16e378210ded43186175bf646fc5f84604051610be791815260200190565b60405180910390a350505050565b60606000610c0283610d5c565b9392505050565b60008181526001830160205260408120548015610cf2576000610c2d6001836111af565b8554909150600090610c41906001906111af565b9050808214610ca6576000866000018281548110610c6157610c616111d5565b9060005260206000200154905080876000018481548110610c8457610c846111d5565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610cb757610cb76111eb565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610a1c565b6000915050610a1c565b6000818152600183016020526040812054610d4357508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610a1c565b506000610a1c565b610d53610db8565b6108c081610ddd565b606081600001805480602002602001604051908101604052809291908181526020018280548015610dac57602002820191906000526020600020905b815481526020019060010190808311610d98575b50505050509050919050565b610dc0610de5565b61071057604051631afcd79f60e31b815260040160405180910390fd5b61092e610db8565b6000610def610a37565b54600160401b900460ff16919050565b80356001600160a01b0381168114610e1657600080fd5b919050565b600060208284031215610e2d57600080fd5b610a1982610dff565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610e5d57600080fd5b813567ffffffffffffffff811115610e7757610e77610e36565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ea657610ea6610e36565b604052818152838201602001851015610ebe57600080fd5b816020850160208301376000918101602001919091529392505050565b600080600060608486031215610ef057600080fd5b610ef984610dff565b9250610f0760208501610dff565b9150604084013567ffffffffffffffff811115610f2357600080fd5b610f2f86828701610e4c565b9150509250925092565b600060208284031215610f4b57600080fd5b5035919050565b602081526000825180602084015260005b81811015610f805760208186018101516040868401015201610f63565b506000604082850101526040601f19601f83011684010191505092915050565b600060208284031215610fb257600080fd5b813567ffffffffffffffff811115610fc957600080fd5b610fd584828501610e4c565b949350505050565b600060208284031215610fef57600080fd5b81356001600160501b0381168114610c0257600080fd5b602080825282518282018190526000918401906040840190835b818110156110475783516001600160a01b0316835260209384019390920191600101611020565b509095945050505050565b600181811c9082168061106657607f821691505b60208210810361108657634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610a8457806000526020600020601f840160051c810160208510156110b35750805b601f840160051c820191505b818110156110d357600081556001016110bf565b5050505050565b815167ffffffffffffffff8111156110f4576110f4610e36565b611108816111028454611052565b8461108c565b6020601f82116001811461113c57600083156111245750848201515b600019600385901b1c1916600184901b1784556110d3565b600084815260208120601f198516915b8281101561116c578785015182556020948501946001909201910161114c565b508482101561118a5786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b81810381811115610a1c57610a1c611199565b80820180821115610a1c57610a1c611199565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122036bc2a4c9c80f27db15570242c7fb629562e08d5160844e4d31988b0ddc395ab64736f6c634300081e0033";
const isSuperArgs$3 = (xs) => xs.length > 1;
class DataFeed__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$3(args)) {
      super(...args);
    } else {
      super(_abi$4, _bytecode$3, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$3;
  static abi = _abi$4;
  static createInterface() {
    return new ethers.Interface(_abi$4);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$4, runner);
  }
}

var index$a = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DataFeed__factory: DataFeed__factory
});

const _abi$3 = [
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error"
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "denomination",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "latestAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "previousAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "nextPhaseId",
        type: "uint16"
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "FeedConfirmed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "asset",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "denomination",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "proposedAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "currentAggregator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "FeedProposed",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64"
      }
    ],
    name: "Initialized",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    inputs: [],
    name: "aggregator",
    outputs: [
      {
        internalType: "contract DataFeedAggregator",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "asset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aggregator",
        type: "address"
      }
    ],
    name: "callAsset",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
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
    name: "deploymentTimestamp",
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
    name: "description",
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
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getAnswer",
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
        internalType: "uint80",
        name: "_roundId",
        type: "uint80"
      }
    ],
    name: "getRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roundId",
        type: "uint256"
      }
    ],
    name: "getTimestamp",
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
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256"
      }
    ],
    name: "getTimestampAnswer",
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
        name: "_initOwner",
        type: "address"
      },
      {
        internalType: "address",
        name: "_aggregator",
        type: "address"
      }
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestRound",
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
    name: "latestRoundData",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      },
      {
        internalType: "int256",
        name: "",
        type: "int256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      },
      {
        internalType: "uint80",
        name: "",
        type: "uint80"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "latestTimestamp",
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
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    name: "phaseAggregators",
    outputs: [
      {
        internalType: "contract DataFeedAggregator",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "phaseId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_aggregator",
        type: "address"
      }
    ],
    name: "proposeAggregator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "version",
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
const _bytecode$2 = "0x6080604052348015600f57600080fd5b50610fdf8061001f6000396000f3fe608060405234801561001057600080fd5b50600436106101425760003560e01c80637284e416116100b8578063b633620c1161007c578063b633620c146102c2578063bfc12c05146102d5578063c1597304146102dd578063f2fde38b14610306578063f8a2abd314610319578063feaf968c1461032c57600080fd5b80637284e416146102185780638205bf6a1461022d5780638da5cb5b146102355780639a6fc8f514610265578063b5ab58dc146102af57600080fd5b8063485cc9551161010a578063485cc955146101c257806350d25bcd146101d757806354fd4d50146101df57806358303b10146101e7578063668a0f0214610208578063715018a61461021057600080fd5b8063245a7bfc1461014757806330c812731461016c578063313ce5671461017f57806338d52e0f146101995780633b2235fc146101a1575b600080fd5b61014f610334565b6040516001600160a01b0390911681526020015b60405180910390f35b61014f61017a366004610cbc565b610354565b61018761040a565b60405160ff9091168152602001610163565b61014f61047a565b6101b46101af366004610ce0565b610487565b604051908152602001610163565b6101d56101d0366004610cf9565b610505565b005b6101b461061a565b6101b4610685565b6000546101f59061ffff1681565b60405161ffff9091168152602001610163565b6101b46106cc565b6101d5610713565b610220610727565b6040516101639190610d56565b6101b4610796565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031661014f565b610278610273366004610da1565b6107dd565b6040805169ffffffffffffffffffff968716815260208101959095528401929092526060830152909116608082015260a001610163565b6101b46102bd366004610ce0565b610875565b6101b46102d0366004610ce0565b6108ac565b6101b46108e3565b61014f6102eb366004610dbe565b6001602052600090815260409020546001600160a01b031681565b6101d5610314366004610cbc565b61092a565b6101d5610327366004610cbc565b61096d565b610278610abd565b6000805461ffff168152600160205260409020546001600160a01b031690565b60408051600481526024810182526020810180516001600160e01b03166338d52e0f60e01b1790529051600091829182916001600160a01b0386169161039a9190610de2565b600060405180830381855afa9150503d80600081146103d5576040519150601f19603f3d011682016040523d82523d6000602084013e6103da565b606091505b5091509150816103ee575060009392505050565b808060200190518101906104029190610dfe565b949350505050565b6000610414610334565b6001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa158015610451573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190610e1b565b905090565b600061047561017a610334565b6000610491610334565b6001600160a01b0316633b2235fc836040518263ffffffff1660e01b81526004016104be91815260200190565b602060405180830381865afa1580156104db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ff9190610e3e565b92915050565b600061050f610b3f565b805490915060ff600160401b820416159067ffffffffffffffff166000811580156105375750825b905060008267ffffffffffffffff1660011480156105545750303b155b905081158015610562575080155b156105805760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff1916600117855583156105aa57845460ff60401b1916600160401b1785555b6001600160a01b038616156105c2576105c28661096d565b6105cb87610b68565b831561061157845460ff60401b19168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6000610624610334565b6001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104759190610e3e565b600061068f610334565b6001600160a01b03166354fd4d506040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b60006106d6610334565b6001600160a01b031663668a0f026040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b61071b610b79565b6107256000610bef565b565b6060610731610334565b6001600160a01b0316637284e4166040518163ffffffff1660e01b8152600401600060405180830381865afa15801561076e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104759190810190610e6d565b60006107a0610334565b6001600160a01b0316638205bf6a6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b60008060008060006107ed610334565b604051639a6fc8f560e01b815269ffffffffffffffffffff881660048201526001600160a01b039190911690639a6fc8f59060240160a060405180830381865afa15801561083f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108639190610f22565b939a9299509097509550909350915050565b600061087f610334565b6001600160a01b031663b5ab58dc836040518263ffffffff1660e01b81526004016104be91815260200190565b60006108b6610334565b6001600160a01b031663b633620c836040518263ffffffff1660e01b81526004016104be91815260200190565b60006108ed610334565b6001600160a01b031663bfc12c056040518163ffffffff1660e01b8152600401602060405180830381865afa158015610661573d6000803e3d6000fd5b610932610b79565b6001600160a01b03811661096157604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61096a81610bef565b50565b610975610b79565b806000610980610334565b9050600061098d84610354565b60005490915061ffff161515806109ac57506001600160a01b03821615155b156109e0576000805461ffff1690806109c483610f7a565b91906101000a81548161ffff021916908361ffff160217905550505b6000805461ffff1681526001602090815260409182902080546001600160a01b0319166001600160a01b03878116919091179091558251858216815233928101929092528681169261034892918516917fb56c4f88c3e344891ef92e51f036d7116e886f4ea57f5ba93e28b5f44925b9ce910160405180910390a4600054604080516001600160a01b03858116825261ffff9093166020820152338183015290518683169261034892908516917f27a180c70f2642f63d1694eb252b7df52e7ab2565e3f67adf7748acb7d82b9bc9181900360600190a450505050565b6000806000806000610acd610334565b6001600160a01b031663feaf968c6040518163ffffffff1660e01b815260040160a060405180830381865afa158015610b0a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b2e9190610f22565b945094509450945094509091929394565b6000807ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a006104ff565b610b70610c60565b61096a81610c85565b6000610bac7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c199300546001600160a01b031690565b90506001600160a01b03811615801590610bcf57506001600160a01b0381163314155b1561096a5760405163118cdaa760e01b8152336004820152602401610958565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3505050565b610c68610c8d565b61072557604051631afcd79f60e31b815260040160405180910390fd5b610932610c60565b6000610c97610b3f565b54600160401b900460ff16919050565b6001600160a01b038116811461096a57600080fd5b600060208284031215610cce57600080fd5b8135610cd981610ca7565b9392505050565b600060208284031215610cf257600080fd5b5035919050565b60008060408385031215610d0c57600080fd5b8235610d1781610ca7565b91506020830135610d2781610ca7565b809150509250929050565b60005b83811015610d4d578181015183820152602001610d35565b50506000910152565b6020815260008251806020840152610d75816040850160208701610d32565b601f01601f19169190910160400192915050565b69ffffffffffffffffffff8116811461096a57600080fd5b600060208284031215610db357600080fd5b8135610cd981610d89565b600060208284031215610dd057600080fd5b813561ffff81168114610cd957600080fd5b60008251610df4818460208701610d32565b9190910192915050565b600060208284031215610e1057600080fd5b8151610cd981610ca7565b600060208284031215610e2d57600080fd5b815160ff81168114610cd957600080fd5b600060208284031215610e5057600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b600060208284031215610e7f57600080fd5b815167ffffffffffffffff811115610e9657600080fd5b8201601f81018413610ea757600080fd5b805167ffffffffffffffff811115610ec157610ec1610e57565b604051601f8201601f19908116603f0116810167ffffffffffffffff81118282101715610ef057610ef0610e57565b604052818152828201602001861015610f0857600080fd5b610f19826020830160208601610d32565b95945050505050565b600080600080600060a08688031215610f3a57600080fd5b8551610f4581610d89565b60208701516040880151606089015160808a015193985091965094509250610f6c81610d89565b809150509295509295909350565b600061ffff821661ffff8103610fa057634e487b7160e01b600052601160045260246000fd5b6001019291505056fea2646970667358221220533b7d443fa7fa4a0fc1e73413cb2361770e137baf0e5bde9893cee7afc170fd64736f6c634300081e0033";
const isSuperArgs$2 = (xs) => xs.length > 1;
class DataFeedAggregator__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$2(args)) {
      super(...args);
    } else {
      super(_abi$3, _bytecode$2, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$2;
  static abi = _abi$3;
  static createInterface() {
    return new ethers.Interface(_abi$3);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$3, runner);
  }
}

var index$9 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  DataFeedAggregator__factory: DataFeedAggregator__factory
});

const _abi$2 = [
  {
    inputs: [],
    name: "OnlyRouterCanFulfill",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestFulfilled",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32"
      }
    ],
    name: "RequestSent",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32"
      },
      {
        internalType: "bytes",
        name: "response",
        type: "bytes"
      },
      {
        internalType: "bytes",
        name: "err",
        type: "bytes"
      }
    ],
    name: "handleOracleFulfillment",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "i_router",
    outputs: [
      {
        internalType: "contract IFunctionsRouter",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
class FunctionsClient__factory {
  static abi = _abi$2;
  static createInterface() {
    return new ethers.Interface(_abi$2);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$2, runner);
  }
}

var index$8 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  FunctionsClient__factory: FunctionsClient__factory
});

var index$7 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  arwFeedSol: index$c,
  baseFunctionsConsumerSol: index$b,
  dataFeedAggregatorSol: index$9,
  dataFeedSol: index$a,
  functionsClientSol: index$8
});

const _abi$1 = [
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address"
      }
    ],
    name: "ERC1967InvalidAdmin",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "ERC1967InvalidImplementation",
    type: "error"
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address"
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "AdminChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "description",
        type: "string"
      }
    ],
    name: "DescriptionChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address"
      }
    ],
    name: "Upgraded",
    type: "event"
  },
  {
    stateMutability: "payable",
    type: "fallback"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      }
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      }
    ],
    name: "changeDescription",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_description",
        type: "string"
      },
      {
        internalType: "address",
        name: "newAdmin",
        type: "address"
      },
      {
        internalType: "address",
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "initializeProxy",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "proxyDescription",
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
        name: "newImplementation",
        type: "address"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    stateMutability: "payable",
    type: "receive"
  }
];
const _bytecode$1 = "0x6080604052348015600f57600080fd5b50610aac8061001f6000396000f3fe6080604052600436106100745760003560e01c8063aba001731161004e578063aba00173146100f0578063e612041314610103578063ee0530f414610123578063f851a4401461014557610083565b80634f1ef2861461008b5780635c60da1b1461009e5780638f283970146100d057610083565b366100835761008161015a565b005b61008161015a565b610081610099366004610762565b61016c565b3480156100aa57600080fd5b506100b36101bb565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100dc57600080fd5b506100816100eb3660046107b0565b6101ca565b6100816100fe3660046107d2565b61020e565b34801561010f57600080fd5b5061008161011e36600461085c565b6102a2565b34801561012f57600080fd5b506101386102e3565b6040516100c791906108bd565b34801561015157600080fd5b506100b3610394565b61016a61016561039e565b6103a8565b565b6101746103d1565b6001600160a01b0316336001600160a01b0316146101ad5760405162461bcd60e51b81526004016101a4906108f0565b60405180910390fd5b6101b782826103db565b5050565b60006101c561039e565b905090565b6101d26103d1565b6001600160a01b0316336001600160a01b0316146102025760405162461bcd60e51b81526004016101a4906108f0565b61020b81610494565b50565b600061021861039e565b6001600160a01b031614801561023e575060006102336103d1565b6001600160a01b0316145b6102805760405162461bcd60e51b81526020600482015260136024820152721053149150511657d253925512505312569151606a1b60448201526064016101a4565b61028983610494565b61029382826103db565b61029c846104e8565b50505050565b6102aa6103d1565b6001600160a01b0316336001600160a01b0316146102da5760405162461bcd60e51b81526004016101a4906108f0565b61020b816104e8565b60607ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff4805461031190610913565b80601f016020809104026020016040519081016040528092919081815260200182805461033d90610913565b801561038a5780601f1061035f5761010080835404028352916020019161038a565b820191906000526020600020905b81548152906001019060200180831161036d57829003601f168201915b5050505050905090565b60006101c56103d1565b60006101c5610555565b3660008037600080366000845af43d6000803e8080156103c7573d6000f35b3d6000fd5b505050565b60006101c5610588565b6103e4826105b0565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a280511561048c57600080836001600160a01b03168360405161043a919061094d565b600060405180830381855af49150503d8060008114610475576040519150601f19603f3d011682016040523d82523d6000602084013e61047a565b606091505b50915091508161029c57805181602001fd5b6101b761062a565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f6104bd610588565b604080516001600160a01b03928316815291841660208301520160405180910390a161020b81610649565b80511561020b577ffcba12fcf625f4823c7c0c86b97ab29721afc9e784836bc00bf04553a0c8dff461051a82826109b7565b507f8a1bce929b257bfd582fa164d9b9fa4d4b0b7442b10b3aad23e2c56aa4e0d61a8160405161054a91906108bd565b60405180910390a150565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b546001600160a01b0316919050565b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610579565b806001600160a01b03163b6000036105e657604051634c9c8ce360e01b81526001600160a01b03821660048201526024016101a4565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5b80546001600160a01b0319166001600160a01b039290921691909117905550565b341561016a5760405163b398979f60e01b815260040160405180910390fd5b6001600160a01b03811661067357604051633173bdd160e11b8152600060048201526024016101a4565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103610609565b80356001600160a01b03811681146106b157600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126106dd57600080fd5b81356020830160008067ffffffffffffffff8411156106fe576106fe6106b6565b50604051601f19601f85018116603f0116810181811067ffffffffffffffff8211171561072d5761072d6106b6565b60405283815290508082840187101561074557600080fd5b838360208301376000602085830101528094505050505092915050565b6000806040838503121561077557600080fd5b61077e8361069a565b9150602083013567ffffffffffffffff81111561079a57600080fd5b6107a6858286016106cc565b9150509250929050565b6000602082840312156107c257600080fd5b6107cb8261069a565b9392505050565b600080600080608085870312156107e857600080fd5b843567ffffffffffffffff8111156107ff57600080fd5b61080b878288016106cc565b94505061081a6020860161069a565b92506108286040860161069a565b9150606085013567ffffffffffffffff81111561084457600080fd5b610850878288016106cc565b91505092959194509250565b60006020828403121561086e57600080fd5b813567ffffffffffffffff81111561088557600080fd5b610891848285016106cc565b949350505050565b60005b838110156108b457818101518382015260200161089c565b50506000910152565b60208152600082518060208401526108dc816040850160208701610899565b601f01601f19169190910160400192915050565b6020808252600990820152682727aa2fa0a226a4a760b91b604082015260600190565b600181811c9082168061092757607f821691505b60208210810361094757634e487b7160e01b600052602260045260246000fd5b50919050565b6000825161095f818460208701610899565b9190910192915050565b601f8211156103cc57806000526020600020601f840160051c810160208510156109905750805b601f840160051c820191505b818110156109b0576000815560010161099c565b5050505050565b815167ffffffffffffffff8111156109d1576109d16106b6565b6109e5816109df8454610913565b84610969565b6020601f821160018114610a195760008315610a015750848201515b600019600385901b1c1916600184901b1784556109b0565b600084815260208120601f198516915b82811015610a495787850151825560209485019460019092019101610a29565b5084821015610a675786840151600019600387901b60f8161c191681555b50505050600190811b0190555056fea2646970667358221220cec960fe5921b17c62b2bd493a151149ecc5bd8beaabca99381e54911c0a838f64736f6c634300081e0033";
const isSuperArgs$1 = (xs) => xs.length > 1;
class InitializableProxy__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs$1(args)) {
      super(...args);
    } else {
      super(_abi$1, _bytecode$1, args[0]);
    }
  }
  getDeployTransaction(overrides) {
    return super.getDeployTransaction(overrides || {});
  }
  deploy(overrides) {
    return super.deploy(overrides || {});
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode$1;
  static abi = _abi$1;
  static createInterface() {
    return new ethers.Interface(_abi$1);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi$1, runner);
  }
}

var index$6 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  InitializableProxy__factory: InitializableProxy__factory
});

var index$5 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  initializableProxySol: index$6
});

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string"
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string"
      },
      {
        internalType: "uint8",
        name: "decimals_",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "supply_",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256"
      }
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32"
      }
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error"
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
        name: "allowance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientAllowance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "balance",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "needed",
        type: "uint256"
      }
    ],
    name: "ERC20InsufficientBalance",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address"
      }
    ],
    name: "ERC20InvalidApprover",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address"
      }
    ],
    name: "ERC20InvalidReceiver",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address"
      }
    ],
    name: "ERC20InvalidSpender",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256"
      }
    ],
    name: "ERC2612ExpiredSignature",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address"
      },
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "ERC2612InvalidSigner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "currentNonce",
        type: "uint256"
      }
    ],
    name: "InvalidAccountNonce",
    type: "error"
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "OwnableInvalidOwner",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string"
      }
    ],
    name: "StringTooLong",
    type: "error"
  },
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
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
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
    inputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256"
      }
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "version",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256"
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address"
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32"
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]"
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
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
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
    name: "renounceOwnership",
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
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];
const _bytecode = "0x61018060405234801561001157600080fd5b506040516118a63803806118a68339810160408190526100309161045f565b338480604051806040016040528060018152602001603160f81b8152508787816003908161005e9190610571565b50600461006b8282610571565b5061007b91508390506005610175565b6101205261008a816006610175565b61014052815160208084019190912060e052815190820120610100524660a05261011760e05161010051604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201529081019290925260608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b60805250503060c052506001600160a01b03811661015057604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b610159816101a8565b5060ff82166101605261016c33826101fa565b505050506106a7565b60006020835110156101915761018a83610234565b90506101a2565b8161019c8482610571565b5060ff90505b92915050565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166102245760405163ec442f0560e01b815260006004820152602401610147565b61023060008383610272565b5050565b600080829050601f8151111561025f578260405163305a27a960e01b8152600401610147919061062f565b805161026a82610662565b179392505050565b6001600160a01b03831661029d5780600260008282546102929190610686565b9091555061030f9050565b6001600160a01b038316600090815260208190526040902054818110156102f05760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610147565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b03821661032b5760028054829003905561034a565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161038f91815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b60005b838110156103cd5781810151838201526020016103b5565b50506000910152565b600082601f8301126103e757600080fd5b81516001600160401b038111156104005761040061039c565b604051601f8201601f19908116603f011681016001600160401b038111828210171561042e5761042e61039c565b60405281815283820160200185101561044657600080fd5b6104578260208301602087016103b2565b949350505050565b6000806000806080858703121561047557600080fd5b84516001600160401b0381111561048b57600080fd5b610497878288016103d6565b602087015190955090506001600160401b038111156104b557600080fd5b6104c1878288016103d6565b935050604085015160ff811681146104d857600080fd5b6060959095015193969295505050565b600181811c908216806104fc57607f821691505b60208210810361051c57634e487b7160e01b600052602260045260246000fd5b50919050565b601f82111561056c57806000526020600020601f840160051c810160208510156105495750805b601f840160051c820191505b818110156105695760008155600101610555565b50505b505050565b81516001600160401b0381111561058a5761058a61039c565b61059e8161059884546104e8565b84610522565b6020601f8211600181146105d257600083156105ba5750848201515b600019600385901b1c1916600184901b178455610569565b600084815260208120601f198516915b8281101561060257878501518255602094850194600190920191016105e2565b50848210156106205786840151600019600387901b60f8161c191681555b50505050600190811b01905550565b602081526000825180602084015261064e8160408501602087016103b2565b601f01601f19169190910160400192915050565b8051602080830151919081101561051c5760001960209190910360031b1b16919050565b808201808211156101a257634e487b7160e01b600052601160045260246000fd5b60805160a05160c05160e0516101005161012051610140516101605161119a61070c600039600061019e015260006109840152600061095701526000610814015260006107ec01526000610747015260006107710152600061079b015261119a6000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806379cc6790116100ad578063a0712d6811610071578063a0712d681461028d578063a9059cbb146102a0578063d505accf146102b3578063dd62ed3e146102c6578063f2fde38b146102ff57600080fd5b806379cc6790146102295780637ecebe001461023c57806384b0196e1461024f5780638da5cb5b1461026a57806395d89b411461028557600080fd5b80633644e515116100f45780633644e515146101c857806340c10f19146101d057806342966c68146101e557806370a08231146101f8578063715018a61461022157600080fd5b806306fdde0314610131578063095ea7b31461014f57806318160ddd1461017257806323b872dd14610184578063313ce56714610197575b600080fd5b610139610312565b6040516101469190610ee4565b60405180910390f35b61016261015d366004610f1a565b6103a4565b6040519015158152602001610146565b6002545b604051908152602001610146565b610162610192366004610f44565b6103be565b60405160ff7f0000000000000000000000000000000000000000000000000000000000000000168152602001610146565b6101766103e2565b6101e36101de366004610f1a565b6103f1565b005b6101e36101f3366004610f81565b610407565b610176610206366004610f9a565b6001600160a01b031660009081526020819052604090205490565b6101e3610414565b6101e3610237366004610f1a565b610428565b61017661024a366004610f9a565b61043d565b61025761045b565b6040516101469796959493929190610fb5565b6008546040516001600160a01b039091168152602001610146565b6101396104a1565b6101e361029b366004610f81565b6104b0565b6101626102ae366004610f1a565b6104c2565b6101e36102c136600461104d565b6104d0565b6101766102d43660046110c0565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101e361030d366004610f9a565b61060f565b606060038054610321906110f3565b80601f016020809104026020016040519081016040528092919081815260200182805461034d906110f3565b801561039a5780601f1061036f5761010080835404028352916020019161039a565b820191906000526020600020905b81548152906001019060200180831161037d57829003601f168201915b5050505050905090565b6000336103b281858561064a565b60019150505b92915050565b6000336103cc85828561065c565b6103d78585856106db565b506001949350505050565b60006103ec61073a565b905090565b6103f9610865565b6104038282610892565b5050565b61041133826108c8565b50565b61041c610865565b61042660006108fe565b565b61043382338361065c565b61040382826108c8565b6001600160a01b0381166000908152600760205260408120546103b8565b60006060806000806000606061046f610950565b61047761097d565b60408051600080825260208201909252600f60f81b9b939a50919850469750309650945092509050565b606060048054610321906110f3565b6104b8610865565b6104113382610892565b6000336103b28185856106db565b834211156104f95760405163313c898160e11b8152600481018590526024015b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886105468c6001600160a01b0316600090815260076020526040902080546001810190915590565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e00160405160208183030381529060405280519060200120905060006105a1826109aa565b905060006105b1828787876109d7565b9050896001600160a01b0316816001600160a01b0316146105f8576040516325c0072360e11b81526001600160a01b0380831660048301528b1660248201526044016104f0565b6106038a8a8a61064a565b50505050505050505050565b610617610865565b6001600160a01b03811661064157604051631e4fbdf760e01b8152600060048201526024016104f0565b610411816108fe565b6106578383836001610a05565b505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198110156106d557818110156106c657604051637dc7a0d960e11b81526001600160a01b038416600482015260248101829052604481018390526064016104f0565b6106d584848484036000610a05565b50505050565b6001600160a01b03831661070557604051634b637e8f60e11b8152600060048201526024016104f0565b6001600160a01b03821661072f5760405163ec442f0560e01b8152600060048201526024016104f0565b610657838383610ada565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561079357507f000000000000000000000000000000000000000000000000000000000000000046145b156107bd57507f000000000000000000000000000000000000000000000000000000000000000090565b6103ec604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60208201527f0000000000000000000000000000000000000000000000000000000000000000918101919091527f000000000000000000000000000000000000000000000000000000000000000060608201524660808201523060a082015260009060c00160405160208183030381529060405280519060200120905090565b6008546001600160a01b031633146104265760405163118cdaa760e01b81523360048201526024016104f0565b6001600160a01b0382166108bc5760405163ec442f0560e01b8152600060048201526024016104f0565b61040360008383610ada565b6001600160a01b0382166108f257604051634b637e8f60e11b8152600060048201526024016104f0565b61040382600083610ada565b600880546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006005610c04565b60606103ec7f00000000000000000000000000000000000000000000000000000000000000006006610c04565b60006103b86109b761073a565b8360405161190160f01b8152600281019290925260228201526042902090565b6000806000806109e988888888610caf565b9250925092506109f98282610d7e565b50909695505050505050565b6001600160a01b038416610a2f5760405163e602df0560e01b8152600060048201526024016104f0565b6001600160a01b038316610a5957604051634a1406b160e11b8152600060048201526024016104f0565b6001600160a01b03808516600090815260016020908152604080832093871683529290522082905580156106d557826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051610acc91815260200190565b60405180910390a350505050565b6001600160a01b038316610b05578060026000828254610afa919061112d565b90915550610b779050565b6001600160a01b03831660009081526020819052604090205481811015610b585760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016104f0565b6001600160a01b03841660009081526020819052604090209082900390555b6001600160a01b038216610b9357600280548290039055610bb2565b6001600160a01b03821660009081526020819052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610bf791815260200190565b60405180910390a3505050565b606060ff8314610c1e57610c1783610e37565b90506103b8565b818054610c2a906110f3565b80601f0160208091040260200160405190810160405280929190818152602001828054610c56906110f3565b8015610ca35780601f10610c7857610100808354040283529160200191610ca3565b820191906000526020600020905b815481529060010190602001808311610c8657829003601f168201915b505050505090506103b8565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0841115610cea5750600091506003905082610d74565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015610d3e573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610d6a57506000925060019150829050610d74565b9250600091508190505b9450945094915050565b6000826003811115610d9257610d9261114e565b03610d9b575050565b6001826003811115610daf57610daf61114e565b03610dcd5760405163f645eedf60e01b815260040160405180910390fd5b6002826003811115610de157610de161114e565b03610e025760405163fce698f760e01b8152600481018290526024016104f0565b6003826003811115610e1657610e1661114e565b03610403576040516335e2f38360e21b8152600481018290526024016104f0565b60606000610e4483610e76565b604080516020808252818301909252919250600091906020820181803683375050509182525060208101929092525090565b600060ff8216601f8111156103b857604051632cd44ac360e21b815260040160405180910390fd5b6000815180845260005b81811015610ec457602081850181015186830182015201610ea8565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610ef76020830184610e9e565b9392505050565b80356001600160a01b0381168114610f1557600080fd5b919050565b60008060408385031215610f2d57600080fd5b610f3683610efe565b946020939093013593505050565b600080600060608486031215610f5957600080fd5b610f6284610efe565b9250610f7060208501610efe565b929592945050506040919091013590565b600060208284031215610f9357600080fd5b5035919050565b600060208284031215610fac57600080fd5b610ef782610efe565b60ff60f81b8816815260e060208201526000610fd460e0830189610e9e565b8281036040840152610fe68189610e9e565b606084018890526001600160a01b038716608085015260a0840186905283810360c08501528451808252602080870193509091019060005b8181101561103c57835183526020938401939092019160010161101e565b50909b9a5050505050505050505050565b600080600080600080600060e0888a03121561106857600080fd5b61107188610efe565b965061107f60208901610efe565b95506040880135945060608801359350608088013560ff811681146110a357600080fd5b9699959850939692959460a0840135945060c09093013592915050565b600080604083850312156110d357600080fd5b6110dc83610efe565b91506110ea60208401610efe565b90509250929050565b600181811c9082168061110757607f821691505b60208210810361112757634e487b7160e01b600052602260045260246000fd5b50919050565b808201808211156103b857634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052602160045260246000fdfea26469706673582212208ef9db55d90bd6e82bdddfbc42ea1900812b5a89ed468875f4f909c189b2eda064736f6c634300081e0033";
const isSuperArgs = (xs) => xs.length > 1;
class ERC20Mock__factory extends ethers.ContractFactory {
  constructor(...args) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }
  getDeployTransaction(name_, symbol_, decimals_, supply_, overrides) {
    return super.getDeployTransaction(
      name_,
      symbol_,
      decimals_,
      supply_,
      overrides || {}
    );
  }
  deploy(name_, symbol_, decimals_, supply_, overrides) {
    return super.deploy(
      name_,
      symbol_,
      decimals_,
      supply_,
      overrides || {}
    );
  }
  connect(runner) {
    return super.connect(runner);
  }
  static bytecode = _bytecode;
  static abi = _abi;
  static createInterface() {
    return new ethers.Interface(_abi);
  }
  static connect(address, runner) {
    return new ethers.Contract(address, _abi, runner);
  }
}

var index$4 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ERC20Mock__factory: ERC20Mock__factory
});

var index$3 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  erc20MockSol: index$4
});

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  interfaces: index$h,
  libraries: index$d,
  lockSol: index$m,
  oracles: index$7,
  proxy: index$5,
  tokens: index$3
});

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  chainlink: index$11,
  contracts: index$2,
  openzeppelin: index$n
});

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ARWFeed__factory: ARWFeed__factory,
  Address__factory: Address__factory,
  AutomationBase__factory: AutomationBase__factory,
  AutomationCompatibleInterface__factory: AutomationCompatibleInterface__factory,
  AutomationCompatible__factory: AutomationCompatible__factory,
  BaseFunctionsConsumer__factory: BaseFunctionsConsumer__factory,
  ContextUpgradeable__factory: ContextUpgradeable__factory,
  DataFeedAggregator__factory: DataFeedAggregator__factory,
  DataFeed__factory: DataFeed__factory,
  ECDSA__factory: ECDSA__factory,
  EIP712__factory: EIP712__factory,
  ERC1967Utils__factory: ERC1967Utils__factory,
  ERC20Burnable__factory: ERC20Burnable__factory,
  ERC20Mock__factory: ERC20Mock__factory,
  ERC20Permit__factory: ERC20Permit__factory,
  ERC20__factory: ERC20__factory,
  Errors__factory: Errors__factory,
  FunctionsClient__factory: FunctionsClient__factory,
  FunctionsRequest__factory: FunctionsRequest__factory,
  IARWSupply__factory: IARWSupply__factory,
  IBeacon__factory: IBeacon__factory,
  IERC1155Errors__factory: IERC1155Errors__factory,
  IERC1967__factory: IERC1967__factory,
  IERC20Errors__factory: IERC20Errors__factory,
  IERC20Exp__factory: IERC20Exp__factory,
  IERC20Metadata__factory: IERC20Metadata__factory,
  IERC20Mintable__factory: IERC20Mintable__factory,
  IERC20Permit__factory: IERC20Permit__factory,
  IERC20__factory: IERC20__factory,
  IERC5267__factory: IERC5267__factory,
  IERC721Errors__factory: IERC721Errors__factory,
  IFunctionsClient__factory: IFunctionsClient__factory,
  IFunctionsRouter__factory: IFunctionsRouter__factory,
  IInitializableProxy__factory: IInitializableProxy__factory,
  IPriceFeed__factory: IPriceFeed__factory,
  InitializableProxy__factory: InitializableProxy__factory,
  Initializable__factory: Initializable__factory,
  Lock__factory: Lock__factory,
  Nonces__factory: Nonces__factory,
  OwnableUpgradeable__factory: OwnableUpgradeable__factory,
  Ownable__factory: Ownable__factory,
  Proxy__factory: Proxy__factory,
  SafeCast__factory: SafeCast__factory,
  ShortStrings__factory: ShortStrings__factory,
  SigLib__factory: SigLib__factory,
  Strings__factory: Strings__factory,
  WithSettler__factory: WithSettler__factory,
  factories: index$1
});

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

function parseJSONL(jsonl) {
  const lines = jsonl.split(/\r?\n/);
  return lines.map((line) => line.trim()).filter((line) => line.length > 0).map((line) => JSON.parse(line));
}
function toJSONL(array) {
  return array.map((item) => JSON.stringify(item)).join("\n");
}

exports.contracts = index;
exports.getOHLCV = getOHLCV;
exports.parseJSONL = parseJSONL;
exports.toJSONL = toJSONL;
