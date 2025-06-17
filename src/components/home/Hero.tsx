'use client'

import { useEffect, useState } from 'react'
import { typewriterTexts } from '../data/data'

export default function Hero() {
  const [index, setIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = typewriterTexts[index % typewriterTexts.length]

    const type = () => {
      setDisplayedText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      )

      if (!isDeleting && displayedText === current) {
        setTimeout(() => setIsDeleting(true), 1000)
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false)
        setIndex((prev) => prev + 1)
      }
    }

    const timer = setTimeout(type, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, index])

  return (
    <section
      id="hero"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-4
                 bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-600
                 dark:from-slate-800 dark:via-gray-900 dark:to-black
                 animate-gradient bg-[length:300%_300%] text-white"
    >
      <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-md">
        Hi, I&apos;m <span className="text-yellow-300">Quang Minh</span>
      </h1>
      <p className="mt-4 text-lg max-w-xl drop-shadow-sm h-6">
        {displayedText}
        <span className="animate-pulse">|</span>
      </p>
    </section>
  )
}
