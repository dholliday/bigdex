import type { Metadata } from "next";
import { Providers } from "./providers";
import NavBar from "@/components/NavBar";

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
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
