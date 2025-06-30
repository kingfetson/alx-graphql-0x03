import "@/styles/globals.css";
import type { AppProps } from "next/app";
<<<<<<< HEAD
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
=======

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
>>>>>>> 3d7ff773d87736bdf877bd7f2e77fa809f553ea0
}
