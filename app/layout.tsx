import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ShaktiSetu — by Valeno",
    template: "%s | ShaktiSetu by Valeno",
  },
  description:
    "Official privacy, terms and account deletion information for ShaktiSetu by Valeno.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}