import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ColumnPage() {
  const articles = [
    {
      id: 1,
      title: "低用量ピルの種類と選び方ガイド",
      category: "基礎知識",
      date: "2024.05.01",
      image: "bg-pink-100"
    },
    {
      id: 2,
      title: "飲み忘れた時の対処法まとめ",
      category: "服用方法",
      date: "2024.04.28",
      image: "bg-blue-100"
    },
    {
      id: 3,
      title: "ピルとニキビの関係性とは？",
      category: "美容・肌",
      date: "2024.04.25",
      image: "bg-green-100"
    },
    {
      id: 4,
      title: "生理痛がひどい...ピルで改善できる？",
      category: "お悩み",
      date: "2024.04.20",
      image: "bg-yellow-100"
    },
    {
      id: 5,
      title: "オンライン診療のメリット・デメリット",
      category: "クリニック選び",
      date: "2024.04.15",
      image: "bg-purple-100"
    },
    {
      id: 6,
      title: "ピルの副作用、いつまで続く？",
      category: "副作用",
      date: "2024.04.10",
      image: "bg-orange-100"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
              コラム
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ピルに関する正しい知識や、女性の健康に役立つ情報を発信しています。
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {articles.map((article) => (
                <Link key={article.id} href={`/column/${article.id}`} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50">
                    <div className={`aspect-video w-full ${article.image} group-hover:scale-105 transition-transform duration-500`} />
                    <CardHeader className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="font-normal">
                          {article.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{article.date}</span>
                      </div>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        この記事では、{article.title}について詳しく解説します。初めての方でも分かりやすい内容になっています。
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
