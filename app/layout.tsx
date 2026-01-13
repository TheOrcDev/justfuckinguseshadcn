import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModeSwitcher } from "@/components/mode-switcher";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Fucking Use shadcn/ui",
  description:
    "Stop overthinking your UI components. shadcn/ui gives you beautifully designed, accessible components you actually own. Copy, paste, customize. It just works.",
  keywords: [
    "shadcn",
    "shadcn/ui",
    "React components",
    "UI library",
    "Tailwind CSS",
    "Radix UI",
    "Base UI",
    "accessible components",
    "design system",
  ],
  authors: [{ name: "OrcDev", url: "https://orcdev.com" }],
  creator: "OrcDev",
  openGraph: {
    title: "Just Fucking Use Shadcn",
    description:
      "Stop overthinking your UI components. Copy, paste, customize. It just works.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Fucking Use Shadcn",
    description:
      "Stop overthinking your UI components. Copy, paste, customize. It just works.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <header className="flex justify-end p-4">
            <ModeSwitcher />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
