'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
      setDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold"><Link href="/">Adam Makhyoun</Link></h1>
      <nav className="space-x-4">
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <button onClick={toggleDarkMode} className="ml-4 border px-2 py-1 rounded">
          {darkMode ? 'Light' : 'Dark'}
        </button>
      </nav>
    </header>
  )
}
