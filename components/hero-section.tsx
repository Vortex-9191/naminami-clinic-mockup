"use client"

import { Button } from "@/components/ui/button"
import { Search, MapPin, Building2, Users, Award, User, Star, Stethoscope, Check, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, FormEvent } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
    }
  }

  return (
    <section className="relative bg-white border-b border-border pt-20 pb-12 md:pt-24 md:pb-16">
      <div className="container">
        <div className="max-w-4xl">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl mb-4">
              全国の低用量ピル処方クリニックを検索・比較
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              オンライン診療対応、即日発送、料金プランなど、<br className="hidden sm:inline" />
              あなたに合ったクリニックが見つかります。
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="エリア、駅名、クリニック名で検索"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-12 pl-12 text-base"
                />
              </div>
              <Button type="submit" size="lg" className="h-12 px-6">
                検索
              </Button>
            </div>
          </form>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs text-muted-foreground">掲載クリニック</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">47</div>
              <div className="text-xs text-muted-foreground">都道府県対応</div>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-primary mb-1">100+</div>
              <div className="text-xs text-muted-foreground">駅から検索可能</div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" asChild>
              <Link href="/areas">
                <MapPin className="h-4 w-4 mr-1" />
                エリアから探す
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/stations">
                <Building2 className="h-4 w-4 mr-1" />
                駅から探す
              </Link>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <Link href="/about-pill">
                ピルについて知る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
