import { t } from 'i18next';
import { CHAINS_LIST } from '@debank/common';

export const GET_WALLETCONNECT_CONFIG = () => {
  return {
    // 1h
    maxDuration: 3600000,
    clientMeta: {
      description: t('global.appDescription'),
      url: 'https://rabby.io',
      icons: [
        'https://static-assets.rabby.io/files/122da969-da58-42e9-ab39-0a8dd38d94b8.png',
      ],
      name: 'Rabby',
    },
    projectId: 'ed21a1293590bdc995404dff7e033f04',
    v2Whitelist: [
      'AMBER',
      'Zerion',
      'Bitget',
      'TP',
      'WALLETCONNECT',
      'WalletConnect',
      'FIREBLOCKS',
      'MPCVault',
      'MetaMask',
      'Rainbow',
      'imToken',
      'MATHWALLET',
      'TRUSTWALLET',
      'Utila',
      'IMTOKEN',
    ],
  };
};

export const allChainIds = CHAINS_LIST.map(
  (chain) => !chain.isTestnet && chain.id
).filter(Boolean) as number[];
