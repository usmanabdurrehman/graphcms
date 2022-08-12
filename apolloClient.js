import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl6qm01ls348j01tb6ou5fgm7/master",
  cache: new InMemoryCache(),
});
