"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypingAnimationProps {
  texts: string[]
  className?: string
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export default function TypingAnimation({
  texts,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const currentFullText = texts[currentTextIndex]

    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false)
        setIsDeleting(true)
      }, pauseDuration)
      return () => clearTimeout(pauseTimer)
    }

    if (!isDeleting && currentText === currentFullText) {
      setIsPaused(true)
      return
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false)
      setCurrentTextIndex((prev) => (prev + 1) % texts.length)
      return
    }

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setCurrentText(currentFullText.substring(0, currentText.length - 1))
        } else {
          setCurrentText(currentFullText.substring(0, currentText.length + 1))
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [currentText, currentTextIndex, isDeleting, isPaused, texts, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <div className={`${className} min-h-[1.2em] flex items-center justify-center`}>
      <span className="font-sans">
        {currentText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
          className="inline-block w-0.5 h-[1em] bg-primary ml-1"
        />
      </span>
    </div>
  )
}
