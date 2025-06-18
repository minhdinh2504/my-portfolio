'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import ThemeToggle from '../theme/ThemeToggle'
import { navItems } from '../data/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-blue-100 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center relative">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          MyPortfolio
        </Link>

        {/* Desktop Nav + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label }) => (
            <a key={href} href={href} className="hover:text-blue-600 transition font-medium">
              {label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden relative">
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              ref={buttonRef}
              onClick={() => setOpen(prev => !prev)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>
          </div>

          {/* Dropdown menu */}
          {open && (
            <div
              ref={menuRef}
              className="absolute right-0 top-full mt-3 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
            >
              <ul className="flex flex-col">
                {navItems.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
