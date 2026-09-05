import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varun Madka — Cybersecurity Graduate Student",
  description:
    "Varun Madka — Cybersecurity graduate student at the University of Central Oklahoma with experience in SOC operations, SIEM/IDS integration, OAuth 2.0 authentication, Linux administration, and secure application deployment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}