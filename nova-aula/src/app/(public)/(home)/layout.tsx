"use client"

import Header from "@/components/Header"
import Providers from "@/app/providers"
import GlobalStyles from "@/styles/global"
import StyledComponentsRegistry from '@/app/registry';
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Food Market",
  description: "Generated by Food Market ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) { 
  return (
    <html lang="pt-br">
      <body>
        <ToastContainer
          position="top-right"
          theme="colored"
          autoClose={4000}
          hideProgressBar
        />

        <StyledComponentsRegistry>
          <Providers>
            <GlobalStyles />
            <Header />
            {children}
            <Footer/>
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}


