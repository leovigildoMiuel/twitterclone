import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Twitter Clone",
  description: "clone Old version twitter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
