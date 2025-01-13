import type { Metadata } from "next"
import { SUSE } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import Head from "next/head"

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
      <Head>
        <meta property="og:title" content="Vivek G" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://viveknexus.com" />
        <meta property="og:description" content="Opinionated designer + action biased engineer. Currently Senior Product Designer at BrowserStack." />
        <meta property="og:image" content="https://viveknexus.com/images/link-preview-1.png" />
        <meta property="og:image:secure_url" content="https://viveknexus.com/images/link-preview-1.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://viveknexus.com/images/link-preview-2.png" />
        <meta property="og:image:secure_url" content="https://viveknexus.com/images/link-preview-2.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="1200" />
        <meta property="og:image" content="https://viveknexus.com/images/link-preview-3.png" />
        <meta property="og:image:secure_url" content="https://viveknexus.com/images/link-preview-3.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:alt" content="A graphic indicating fusion of designer half and engineer half of author's brain" />
      </Head>
      <Script id="mouseflow-script">{`
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
