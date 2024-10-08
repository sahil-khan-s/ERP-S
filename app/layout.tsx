"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const queryClient = new QueryClient()


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
      <body className={inter.className}>
        <div className="font-">
          <Provider store={store}>
            {children}
          </Provider>
        </div>
      </body>
      </QueryClientProvider>
    </html>
  );
}
