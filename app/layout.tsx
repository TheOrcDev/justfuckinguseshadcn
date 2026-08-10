import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Just Fucking Use shadcn",
  description:
    "Stop overthinking your UI components. shadcn gives you beautifully designed, accessible components you actually own. Copy, paste, customize. It just works.",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Just Fucking Use shadcn",
    description:
      "Stop overthinking your UI components. Copy, paste, customize. It just works.",
    type: "website",
    locale: "en_US",
    url: "/",
    images: [
      {
        url: "/og.png",
        alt: "Just Fucking Use shadcn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Fucking Use shadcn",
    description:
      "Stop overthinking your UI components. Copy, paste, customize. It just works.",
    images: ["/og.png"],
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
          {children}
          <Footer />
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
