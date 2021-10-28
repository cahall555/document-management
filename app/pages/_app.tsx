import type { AppProps /*, AppContext */ } from 'next/app'
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { withApollo } from "next-apollo";
// import { client } from "../pages/api/graphql"

// const client = new ApolloClient({
//   uri: "http://localhost:3000/api/graphql",
//   credentials: 'same-origin',
//   cache: new InMemoryCache()
// });

const defaultOptions = {
  watchQuery: {
      fetchPolicy: "no-cache",
      errorPolicy: "ignore",
  },
  query: {
      fetchPolicy: "no-cache",
      errorPolicy: "all",
  }
};

const cache = new InMemoryCache({
  resultCaching: false,
});

const link = createHttpLink({
  uri: "https://countries.trevorblades.com",
})

const client = new ApolloClient({
  link,
  cache,
  defaultOptions
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client= {client}> 
      <Component {...pageProps} />
    </ApolloProvider>
  ) 
}
// @ts-ignore
export default MyApp;

