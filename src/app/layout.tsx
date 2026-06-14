import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import Script from "next/script";
import { Syne } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gaurav Suthar",
  description: "Gaurav Suthar's Portfolio site.",
  icons: {
    icon: "/official/logo.png",
  },
  keywords: [
    "Frontend Developer",
    "UI/UX Designer",
    "Next.js Portfolio",
    "React Developer",
    "Tailwind CSS",
    "Gaurav Suthar",
  ],
  openGraph: {
    title: "Gaurav's Portfolio",
    description: "Gaurav Suthar's Portfolio site.",
    url: "https://gaurav.me",
    siteName: "Gaurav Suthar's Portfolio site",
    images: [
      {
        url: "https://gaurav.me/official/opengraphh.jpg",
        width: 1200,
        height: 630,
        alt: "My OG Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gaurav's Portfolio",
    description: "This is my portfolio.",
    images: ["https://gaurav.me/official/opengraphh.jpg"],
    creator: "@suthargaurav95",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          data-website-id="dfid_wVN5yIAv7uo506eTbSUQ5"
          data-domain="gaurav.me"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
        <link rel="canonical" href="https://gaurav.me" />
        <link rel="icon" href="/logo.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Gaurav Suthar",
              url: "https://gaurav.me",
              sameAs: [
                "https://github.com/Gaurav00780",
                "https://linkedin.com/in/gauravsuthar7",
                "https://x.com/suthargaurav95",
              ],
              jobTitle: "Frontend Developer & UI/UX Designer",
              image: "https://gaurav.me/opengraphh.jpg",
            }),
          }}
        />
      </head>

      <body suppressHydrationWarning className={` ${geistSans.variable} ${geistMono.variable} ${GeistPixelSquare.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased`}>
        <TooltipProvider>
          {children}
        </TooltipProvider>
        <Analytics />
        {/* <CustomCursor /> */}
      </body>
    </html>
  );
}
