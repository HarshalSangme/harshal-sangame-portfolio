"use client"

import { useEffect } from "react"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Experience from "@/components/Experience"
import Contact from "@/components/Contact"
import ParticleBackground from "@/components/ParticleBackground"
import ScrollProgress from "@/components/ScrollProgress"

export default function Home() {
  useEffect(() => {
    // Smooth scrolling polyfill
    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const href = link.getAttribute("href")
        if (href) {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: "smooth" })
          }
        }
      })
    })
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
