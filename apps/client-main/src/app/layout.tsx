import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "../lib/utils";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const helvetica = localFont({
  display: "swap",
  src: [
    {
      path: "../../public/fonts/HelveticaNeueLight.otf",
    },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "Brixline",
  description: "Transform your business with Brixline",
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={cn(
          "min-h-screen antialiased font-helvetica",
        )}
      >
        {children}
      </body>
    </html>
  );
}
