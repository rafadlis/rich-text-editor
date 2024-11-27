import type { Metadata } from "next";
import "./globals.css";
import { roboto, roboto_mono } from "./fonts";

export const metadata: Metadata = {
  title: "Rich Text Editor",
  description:
    "A rich text editor built with Next.js, Tiptap, and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${roboto_mono.variable}`}>
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
