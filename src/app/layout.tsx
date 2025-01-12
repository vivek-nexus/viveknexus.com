import type { Metadata } from "next"
import { SUSE } from "next/font/google"
import "./globals.css"
import Script from "next/script"

const suse = SUSE({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Vivek G",
  description: "Opinionated designer + action biased engineer. Currently Senior Product Designer at BrowserStack.",
  icons: "/favicon.ico"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <Script>{`
        window._mfq = window._mfq || [];
        (function() {
          var mf = document.createElement("script");
          mf.type = "text/javascript"; mf.defer = true;
          mf.src = "//cdn.mouseflow.com/projects/d650c614-2064-44cc-804a-54644c37dd52.js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        })();
      `}</Script>
      <body
        className={`${suse.className} antialiased bg-black text-[#C0C0C0]`}
      >
        {children}
      </body>
    </html>
  )
}
