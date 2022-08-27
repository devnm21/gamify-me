// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/montserrat";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
