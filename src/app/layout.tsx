import type { Metadata } from "next"
import { Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "../components/navbar"

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.akasewang.me"),
  title: {
    default: "akash dewangan",
    template: "%s | akash dewangan",
  },
  description: "your everyday developer.",
  openGraph: {
    title: "akash dewangan",
    description: "your everyday developer.",
    url: "https://www.akasewang.me",
    siteName: "akash dewangan",
    locale: "en_US",
    type: "website",
    images: ["https://www.akasewang.me/og/home"],
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  twitter: {
    title: "akash dewangan",
    card: "summary_large_image",
    creator: "@akaswang",
  },
  icons: {
    icon: "/favicon.ico",
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${geistMono.variable} antialiased min-h-screen font-mono`}
      >
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
