import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function NewsPage() {
  const news = [
    { date: "2024.05.01", title: "ゴールデンウィークの診療について", cat: "お知らせ", id: 1 },
    { date: "2024.04.15", title: "新しい培養士が着任しました", cat: "スタッフ", id: 2 },
    { date: "2024.04.01", title: "4月の不妊治療説明会の日程が決まりました", cat: "イベント", id: 3 },
    { date: "2024.03.20", title: "システムメンテナンスのお知らせ", cat: "お知らせ", id: 4 },
    { date: "2024.03.10", title: "花粉症のお薬について", cat: "医療情報", id: 5 },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">お知らせ</h1>
        <p className="text-muted-foreground">クリニックからの最新情報をお届けします。</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {news.map((item) => (
          <div key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
            <Link href={`/news/${item.id}`} className="block p-6">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                <div className="flex items-center gap-4 min-w-[200px]">
                  <time className="text-muted-foreground font-medium">{item.date}</time>
                  <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    {item.cat}
                  </span>
                </div>
                <h2 className="text-lg font-medium text-foreground flex-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
                <ChevronRight className="w-5 h-5 text-gray-300" />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
