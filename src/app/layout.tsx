import type { Metadata } from "next";
import { Playfair_Display, Prompt } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const prompt = Prompt({
  variable: "--font-prompt",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Andaman Wedding Studio Buriram",
  description: "Luxury wedding dress rental and studio services in Buriram",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${playfair.variable} ${prompt.variable} antialiased bg-white text-midnight-blue`}
      >
        {children}
      </body>
    </html>
  );
}
