"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: "お知らせ", href: "/news" },
    { label: "コラム", href: "/column" },
    { label: "当院の不妊治療", href: "/treatment" },
    { label: "治療成績", href: "/result" },
    { label: "はじめての方", href: "/visitor" },
    { label: "アクセス", href: "/access" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">なみなみレディースクリニック</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-6">
            WEB予約
          </Button>
        </nav>

        {/* Mobile Nav Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-lg font-medium text-foreground hover:text-primary py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full mt-2">
              WEB予約
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
