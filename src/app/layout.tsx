import type { Metadata } from "next"
import { SUSE } from "next/font/google"
import "./globals.css"

const suse = SUSE({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vivek G",
  description: "Opinionated designer + action biased engineer. Currently Senior Product Designer at BrowserStack.",
  icons: "/face-white-bg.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${suse.className} antialiased bg-black text-[#C0C0C0] max-w-[1280px] mx-auto`}
      >
        {children}
      </body>
    </html>
  )
}
