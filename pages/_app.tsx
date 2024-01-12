import type { AppProps } from 'next/app'

// import { wallets as coin98Wallets } from "@cosmos-kit/coin98";
import { wallets as cosmostationWallets } from "@cosmos-kit/cosmostation";
// import { wallets as finWallets } from "@cosmos-kit/fin";
import { wallets as keplrWallets } from "@cosmos-kit/keplr";
// import { wallets as leapWallets } from "@cosmos-kit/leap";
// import { wallets as snapWallet } from "@cosmos-kit/leap-metamask-cosmos-snap";
// import { wallets as ledgerWallets } from "@cosmos-kit/ledger";
import { ChainProvider, defaultModalViews } from "@cosmos-kit/react";
// import { wallets as shellWallets } from "@cosmos-kit/shell";
// import { wallets as stationWallets } from "@cosmos-kit/station";
// import { wallets as vectisWallets } from "@cosmos-kit/vectis";
import { Chain } from "@chain-registry/types";
import { Decimal } from "@cosmjs/math";
import { GasPrice } from "@cosmjs/stargate";
import { assets, chains } from "chain-registry";

import "@interchain-ui/react/styles";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChainProvider
        chains={chains}
        assetLists={[...assets]}
        wallets={[
          ...keplrWallets,
          ...cosmostationWallets,

        ]}
        throwErrors={false}
        subscribeConnectEvents={true}
        defaultNameService={"stargaze"}
        walletConnectOptions={{
          signClient: {
            projectId: "a8510432ebb71e6948cfd6cde54b70f7",
            relayUrl: "wss://relay.walletconnect.org",
            metadata: {
              name: "CosmosKit Example",
              description: "CosmosKit test dapp",
              url: "https://test.cosmoskit.com/",
              icons: [
                "https://raw.githubusercontent.com/cosmology-tech/cosmos-kit/main/packages/docs/public/favicon-96x96.png",
              ],
            },
          },
        }}
        signerOptions={{
          signingStargate: (chain: Chain) => {
            switch (chain.chain_name) {
              case "osmosis":
                return {
                  gasPrice: new GasPrice(Decimal.zero(1), "uosmo"),
                };
              default:
                return void 0;
            }
          },
        }}
        logLevel={"DEBUG"}
        endpointOptions={{
          isLazy: true,
          endpoints: {
            cosmoshub: {
              rpc: [
                {
                  url: "https://rpc.cosmos.directory/cosmoshub",
                  headers: {},
                },
              ],
            },
          },
        }}
        disableIframe={false}
      >
        <Component {...pageProps} />
      </ChainProvider>
  )
}
