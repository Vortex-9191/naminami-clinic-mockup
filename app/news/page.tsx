import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"

export default function NewsPage() {
  const news = [
    { date: "2024.12.01", title: "年末年始の診療について", cat: "お知らせ", important: true, id: 1 },
    { date: "2024.11.20", title: "12月の不妊治療説明会の日程が決まりました", cat: "イベント", important: false, id: 2 },
    { date: "2024.11.15", title: "採卵当日の持ち物が変更になりました", cat: "お知らせ", important: false, id: 3 },
    { date: "2024.11.01", title: "外来担当医の変更について", cat: "お知らせ", important: false, id: 4 },
    { date: "2024.10.25", title: "新しい培養士が着任しました", cat: "スタッフ", important: false, id: 5 },
    { date: "2024.10.20", title: "待合室のWi-Fiパスワード変更のお知らせ", cat: "お知らせ", important: false, id: 6 },
    { date: "2024.10.15", title: "11月の休診日について", cat: "お知らせ", important: false, id: 7 },
    { date: "2024.10.01", title: "保険適用範囲拡大のお知らせ", cat: "医療情報", important: true, id: 8 },
    { date: "2024.09.20", title: "システムメンテナンスのお知らせ", cat: "お知らせ", important: false, id: 9 },
    { date: "2024.09.10", title: "不妊治療助成金の申請について", cat: "医療情報", important: false, id: 10 },
  ]

  const categories = ["すべて", "お知らせ", "イベント", "スタッフ", "医療情報"]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">お知らせ</h1>
          <p className="text-muted-foreground">クリニックからの最新情報をお届けします</p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white border-b">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 text-sm rounded-full transition-colors ${
                  cat === "すべて"
                    ? "bg-primary text-white"
                    : "border border-gray-200 text-muted-foreground hover:border-primary hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* News List */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {news.map((item) => (
              <div key={item.id} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                <Link href={`/news/${item.id}`} className="block p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                    <div className="flex items-center gap-3 min-w-[220px]">
                      <time className="text-muted-foreground font-medium text-sm">{item.date}</time>
                      {item.important && (
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">
                          重要
                        </span>
                      )}
                      <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                        {item.cat}
                      </span>
                    </div>
                    <h2 className="text-base font-medium text-foreground flex-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h2>
                    <ChevronRight className="w-5 h-5 text-gray-300 hidden md:block" />
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white font-bold">
              1
            </span>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              2
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
              3
            </button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
