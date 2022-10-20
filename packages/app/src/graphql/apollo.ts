import { ApolloClient, InMemoryCache } from "@apollo/client";

const JUICEBOX_SUBGRAPH_URL =
  "https://api.studio.thegraph.com/query/31944/nft-rewards-goerli/0.0.24";

const client = new ApolloClient({
  uri: JUICEBOX_SUBGRAPH_URL,
  cache: new InMemoryCache(),
});

export default client;
