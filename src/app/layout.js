import { Geist, Geist_Mono } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const studioZen = localFont({
  src: "./fonts/Winkle-Regular.ttf",
  weight: "400",
  style: "normal",
  variable: "--font-studio-zen",
})

export const metadata = {
  title: "Studio Zen",
  description: "Photo print design menu",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`
          ${studioZen.className}
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}
