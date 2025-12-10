"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const navItems = [
    { label: "当院の特徴", href: "/about" },
    { label: "はじめての方へ", href: "/visitor" },
    {
      label: "診療内容",
      href: "/treatment",
      submenu: [
        {
          label: "一般産婦人科",
          href: "/treatment/general",
          items: [
            { name: "月経関連トラブル", href: "/treatment/general/menstrual" },
            { name: "避妊治療", href: "/treatment/general/contraception" },
            { name: "頸がん検診", href: "/treatment/general/cervical-cancer" },
            { name: "妊娠判定・採卵", href: "/treatment/general/pregnancy-test" },
          ]
        },
        {
          label: "高度不妊治療",
          href: "/treatment/advanced-fertility",
          items: [
            { name: "卵子凍結", href: "/treatment/advanced-fertility/egg-freezing" },
            { name: "精子凍結", href: "/treatment/advanced-fertility/sperm-freezing" },
            { name: "培養", href: "/treatment/advanced-fertility/culture" },
            { name: "胚凍結", href: "/treatment/advanced-fertility/embryo-freezing" },
            { name: "胚移植", href: "/treatment/advanced-fertility/embryo-transfer" },
            { name: "体外受精", href: "/treatment/advanced-fertility/ivf" },
            { name: "顕微授精", href: "/treatment/advanced-fertility/icsi" },
            { name: "着床前診断", href: "/treatment/advanced-fertility/pgt" },
            { name: "先進医療について", href: "/treatment/advanced-fertility/advanced-medicine" },
          ]
        },
        {
          label: "一般不妊治療",
          href: "/treatment/fertility",
          items: [
            { name: "タイミング療法", href: "/treatment/fertility/timing" },
            { name: "人工授精", href: "/treatment/fertility/iui" },
            { name: "原因不明不妊症", href: "/treatment/fertility/unexplained" },
          ]
        },
      ]
    },
    { label: "医師紹介", href: "/doctors" },
    { label: "料金について", href: "/price" },
    { label: "アクセス・診療時間", href: "/access" },
    { label: "コラム", href: "/column" },
    { label: "よくある質問", href: "/faq" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-primary tracking-tight">レディースクリニック ぷかぷか</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors px-3 py-2 flex items-center gap-1"
                onMouseEnter={() => item.submenu && setOpenSubmenu(item.label)}
                onMouseLeave={() => setOpenSubmenu(null)}
              >
                {item.label}
                {item.submenu && <ChevronDown className="w-3 h-3" />}
              </Link>
              {item.submenu && openSubmenu === item.label && (
                <div
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg border p-4 min-w-[500px] grid grid-cols-3 gap-4"
                  onMouseEnter={() => setOpenSubmenu(item.label)}
                  onMouseLeave={() => setOpenSubmenu(null)}
                >
                  {item.submenu.map((sub) => (
                    <div key={sub.href}>
                      <Link href={sub.href} className="font-bold text-primary text-sm mb-2 block hover:underline">
                        {sub.label}
                      </Link>
                      <ul className="space-y-1">
                        {sub.items.map((subItem) => (
                          <li key={subItem.name}>
                            <Link href={subItem.href} className="text-xs text-muted-foreground hover:text-primary">
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Nav Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-white border-b shadow-lg p-4 lg:hidden flex flex-col gap-2 animate-in slide-in-from-top-5 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-primary py-2 border-b border-gray-100 block"
                  onClick={() => !item.submenu && setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
                {item.submenu && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="text-sm text-muted-foreground hover:text-primary block py-1"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
