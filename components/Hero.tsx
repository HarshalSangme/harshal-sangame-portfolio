"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Download, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import TypingAnimation from "@/components/TypingAnimation"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Profile Image with Glow Effect */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mb-8 inline-block"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-xl opacity-75"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <div className="relative w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full p-1">
                <div className="w-full h-full bg-background rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold font-orbitron bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    HS
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold font-orbitron mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Harshal Sangame
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6"
          >
            <TypingAnimation
              texts={[
                "Full Stack AI Engineer",
                "Generative AI Specialist",
                "RAG Pipeline Expert",
                "LangChain Developer",
                "AI Solution Architect",
              ]}
              className="text-2xl md:text-4xl font-semibold text-muted-foreground"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Crafting the future with cutting-edge AI technologies. Specializing in Generative AI, agentic frameworks,
            and end-to-end AI solution development. Transforming complex problems into intelligent solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex justify-center space-x-6 mb-12"
          >
            {[
              { icon: Github, href: "https://github.com/HarshalSangme", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/harshal-sangame-6817751b9", label: "LinkedIn" },
              { icon: Mail, href: "mailto:harshalsangme10@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.a
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
