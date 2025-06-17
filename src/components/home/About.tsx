'use client'

import SectionTitle from "../common/SectionTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Image from "next/image"
import { socials } from "../data/data"

export default function About() {
  return (
    <section id="about" className="py-16 px-4 max-w-5xl mx-auto">
      <SectionTitle title="About Me" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Avatar */}
        <div>
          <Image
            src="/Avatar.png"
            alt="Avatar"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-gray-500 h-40 w-40 md:h-48 md:w-48"
          />
        </div>

        {/* Nội dung giới thiệu */}
        <div className="flex-1 space-y-4">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Hello! I&apos;m <span className="font-semibold text-blue-600">Đinh Quang Minh</span>, a passionate web developer who recently graduated and is currently seeking full-time opportunities.
            I aspire to become a full-stack web developer, with a strong focus on building modern, accessible, and performance-oriented web applications.
            I specialize in <span className="font-medium text-purple-600">ReactJs Vite</span>, <span className="font-medium text-purple-600">ExpressJs</span>, and crafting intuitive, elegant UI/UX experiences.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            With a background in both frontend and backend development, I love creating clean, scalable code and collaborating with teams to turn ideas into reality.
          </p>

          {/* Kỹ năng chính (nếu muốn) */}
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">React.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Next.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Javascript & TypeScript</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Express.js</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">Tailwind CSS</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">MongoDB</span>
          </div>

          {/* Mạng xã hội */}
          <div className="flex gap-4 mt-4">
            {socials.map(({ label, href, icon }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition text-sm"
              >
                <FontAwesomeIcon icon={icon} className="w-5 h-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
