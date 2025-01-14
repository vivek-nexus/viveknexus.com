"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Greeting } from "@/components/Greeting"
import { Hero } from "@/components/hero"
import { Design } from "@/components/design"
import { Contact } from "@/components/Contact"
import { Engineering } from "@/components/engineering"
import { About } from "@/components/about"
import { Testimonials } from "@/components/testimonails"
import { Nav } from "@/components/nav"
import { EasterEggProvider } from "@/context/EasterEggContext"
import { TooltipInvokedProvider } from "@/context/TooltipInvokedContext"

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [showHero, setShowHero] = useState(false)
  const [showPage, setShowPage] = useState(false)
  const [userIp, setUserIp] = useState("<getting your ip address>")

  useEffect(() => {
    try {
      fetch("https://render-express-server-q222.onrender.com/ip").then((response) => {
        response.text().then((text) => {
          setUserIp(text)
          setShowGreeting(true)
        })
      })
      setShowGreeting(true)
    } catch (error) {
      console.error(error)
      setShowGreeting(true)
    }

    const hideGreetingTimeout = setTimeout(() => {
      setShowGreeting(false)
    }, 3500)

    const showHeroTimeout = setTimeout(() => {
      setShowHero(true)
    }, 4550)

    const showPageTimeout = setTimeout(() => {
      setShowPage(true)
    }, 7500)

    const scrollToAnchorTimeout = setTimeout(() => {
      const hash = window.location.hash
      if (hash) {
        document.querySelector(hash)?.scrollIntoView()
      }
    }, 7700)

    return (() => {
      clearTimeout(hideGreetingTimeout)
      clearTimeout(showHeroTimeout)
      clearTimeout(showPageTimeout)
      clearTimeout(scrollToAnchorTimeout)
    })
  }, [])

  return (
    <EasterEggProvider>
      <TooltipInvokedProvider>
        <div className="p-2 -translate-x-[1000px] focus-within:translate-x-0">
          <button
            className="mr-2 p-2 rounded-md border border-[#c0c0c0]/50"
            onClick={() => {
              document.querySelector<HTMLElement>(".design-value-card")?.focus()
            }}
          >
            Skip to main content {!showPage && `(Page is still playing opening animations)`}
          </button>
          <button
            className="mr-2 p-2 rounded-md border border-[#c0c0c0]/50"
            onClick={() => {
              document.querySelector<HTMLElement>("nav a")?.focus()
            }}
          >
            Skip to nav {!showPage && `(Page is still playing opening animations)`}
          </button>
        </div>
        <Nav />
        <main>
          <AnimatePresence>
            {showGreeting && <Greeting userIp={userIp} />}
          </AnimatePresence>
          {showHero && <Hero />}
          {showPage &&
            <>
              <Design />
              <Engineering />
              <About />
              <Testimonials />
              <Contact />
            </>
          }
        </main>
      </TooltipInvokedProvider>
    </EasterEggProvider>
  )
}
