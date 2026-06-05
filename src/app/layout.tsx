import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L.N.M.P Foundation",
  description: "Foundation Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}