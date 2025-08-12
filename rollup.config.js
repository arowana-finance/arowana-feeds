/**
 * Unused for solidity projects unless you need to test custom src files
 */
import { getRollupConfig } from '@arowanadao/rollup';

const config = [
    getRollupConfig({ input: './src/index.ts' }),
    getRollupConfig({ input: './src/start.ts' }),
    getRollupConfig({ 
        input: './src/index.ts',
        browserName: 'arwFeeds',
        globals: {
            ethers: 'ethers',
            'ethers-opt': 'ethersOpt',
        },
        external: ['crypto', 'ethers', 'ethers-opt'],
    }),
]

export default config;
