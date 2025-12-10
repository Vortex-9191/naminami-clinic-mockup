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
        { label: "産科", href: "/treatment/obstetrics", items: ["妊婦健診", "NIPT", "出生前診断", "つわり外来", "妊娠相談"] },
        { label: "婦人科", href: "/treatment/gynecology", items: ["月経トラブル", "ピル", "アフターピル", "更年期症候群", "不妊症", "子宮筋腫"] },
        { label: "女性泌尿器科", href: "/treatment/urology", items: ["膀胱炎", "尿失禁", "インティマレーザー"] },
        { label: "内科", href: "/treatment/internal", items: ["片頭痛", "生活習慣病", "糖尿病"] },
        { label: "健康診断・相談", href: "/treatment/checkup", items: ["子宮がん検診", "HPVワクチン", "レディースドック"] },
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
          <span className="text-xl font-bold text-primary tracking-tight">レディースクリニック なみなみ</span>
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
                  className="absolute top-full left-0 bg-white shadow-lg rounded-lg border p-4 min-w-[600px] grid grid-cols-5 gap-4"
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
                          <li key={subItem}>
                            <Link href={sub.href} className="text-xs text-muted-foreground hover:text-primary">
                              {subItem}
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
