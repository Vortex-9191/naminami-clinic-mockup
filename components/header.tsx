import Link from "next/link"
import { Menu, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/98 backdrop-blur supports-[backdrop-filter]:bg-background/95 shadow-sm">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-md group-hover:shadow-lg transition-all">
              <Stethoscope className="h-6 w-6 text-white" />
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                低用量ピル.com
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/search" className="transition-colors hover:text-primary">
              クリニック検索
            </Link>
            <Link href="/about-pill" className="transition-colors hover:text-primary">
              ピルについて
            </Link>
            <Link href="/flow" className="transition-colors hover:text-primary">
              処方の流れ
            </Link>
            <Link href="/faq" className="transition-colors hover:text-primary">
              よくある質問
            </Link>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}
