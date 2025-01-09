"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Greeting } from "@/components/Greeting"
import { Hero } from "@/components/hero"

export default function Home() {
  const [showGreeting, setShowGreeting] = useState(false)
  const [showHero, setShowHero] = useState(false)
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

    return (() => {
      clearTimeout(hideGreetingTimeout)
      clearTimeout(showHeroTimeout)
    })
  }, [])

  return (
    <>
      <AnimatePresence>
        {showGreeting && <Greeting userIp={userIp} />}
      </AnimatePresence>
      <AnimatePresence>
        {showHero && <Hero />}
      </AnimatePresence>
    </>
  )
}
