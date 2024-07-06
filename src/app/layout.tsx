import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.scss";

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "People Register",
  description: "A register of people",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={ubuntu.className}>{children}</body>
    </html>
  );
}
