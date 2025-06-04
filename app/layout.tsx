import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "Harshal Sangame - Full Stack AI Engineer",
  description:
    "Innovative AI Engineer specializing in Generative AI, RAG pipelines, and cutting-edge AI solutions. Building the future with advanced AI technologies.",
  keywords:
    "AI Engineer, Full Stack Developer, Generative AI, RAG, LangChain, OpenAI, Machine Learning, React, Next.js",
  authors: [{ name: "Harshal Sangame" }],
  creator: "Harshal Sangame",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Harshal Sangame - Full Stack AI Engineer",
    description: "Innovative AI Engineer specializing in Generative AI, RAG pipelines, and cutting-edge AI solutions.",
    siteName: "Harshal Sangame Portfolio",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
