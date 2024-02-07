import type { Metadata } from "next";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";
import { Bungee_Spice } from "next/font/google";

const bungeeSpice = Bungee_Spice({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Dex",
  description: "Got that Big Dex Energy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={bungeeSpice.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
