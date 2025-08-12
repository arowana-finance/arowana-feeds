import { ZeroAddress, parseUnits, BaseContract, ContractTransactionResponse } from 'ethers';
import { type SignerWithAddress } from 'ethers-opt';
import { getSigners } from 'ethers-opt/hardhat/fixtures';
import { Logger } from 'logger-chain';
import { ARWFeed__factory, InitializableProxy__factory } from '../typechain-types/index.js';

const ARW_SYMBOL = 'ARW';
const ARW_ADDRESS = ZeroAddress;

const CHAINLINK_ROUTER = '0x234a5fb5Bd614a7AA2FfAB244D603abFA0Ac5C5C';
const UPKEEP_INTERVAL = 60;
const UPKEEP_RATE_INTERVAL = 3600;
const UPKEEP_RATE_CAP = 2;
const MAX_BASE_GAS_PRICE = parseUnits('1', 'gwei');
const UPDATE_INTERVAL = 3600;

const logger = new Logger();

async function logDeploy(contractName: string, contract: BaseContract) {
    logger.debug(
        'Deploy',
        `${contractName}: ${contract.target} (hash: ${(await contract.deploymentTransaction()?.wait())?.hash})`,
    );
}

async function logTx(txName: string, tx: Promise<ContractTransactionResponse>) {
    logger.debug('Tx', `${txName} (hash: ${(await (await tx).wait())?.hash})`);
}

async function deployPriceFeed(owner: SignerWithAddress) {
    const arwFeedImplementation = await new ARWFeed__factory(owner).deploy();
    await logDeploy('ARWFeedImplementation', arwFeedImplementation);

    const arwFeedProxy = await new InitializableProxy__factory(owner).deploy();
    await logDeploy('ARWFeedProxy', arwFeedProxy);

    const arwFeed = ARWFeed__factory.connect(arwFeedProxy.target as string, owner);

    await logTx(
        'Initialize Price Feed',
        arwFeedProxy.initializeProxy(
            `${ARW_SYMBOL} Price Feed`,
            owner.address,
            arwFeedImplementation.target,
            (
                await arwFeedImplementation.initializeARWFeedInfo.populateTransaction(
                    owner.address,
                    ARW_ADDRESS,
                    `${ARW_SYMBOL} / USD`,
                    CHAINLINK_ROUTER,
                    ZeroAddress,
                    UPKEEP_INTERVAL,
                    UPKEEP_RATE_INTERVAL,
                    UPKEEP_RATE_CAP,
                    MAX_BASE_GAS_PRICE,
                    UPDATE_INTERVAL,
                )
            ).data,
        ),
    );

    return {
        arwFeed,
        arwFeedImplementation,
    };
}

async function deploy() {
    const [owner] = await getSigners();

    const { arwFeed, arwFeedImplementation } = await deployPriceFeed(owner);

    console.log({
        arwFeed: arwFeed.target,
        arwFeedImplementation: arwFeedImplementation.target,
    });
}

deploy();
