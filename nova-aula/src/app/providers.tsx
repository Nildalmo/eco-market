"use client";

import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "@/contexts/AuthContext";
import { customTheme } from "@/styles/chackraTheme";
import Cartprovider from "@/contexts/CartContext";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <CacheProvider>
      <ChakraProvider theme={customTheme}>
        <ThemeProvider theme={theme}>
          <AuthContextProvider>
            <Cartprovider>{children}</Cartprovider>
          </AuthContextProvider>
        </ThemeProvider>
      </ChakraProvider>
    </CacheProvider>
  );
};
export default Providers;
