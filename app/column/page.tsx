import Link from "next/link"
import { Search } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"

export default function ColumnPage() {
  // 新着コラム
  const latestColumns = [
    { id: 1, title: "体外受精の流れと成功率について", date: "2024.12.01", cat: "体外受精", image: "column-ivf.jpg" },
    { id: 2, title: "卵子凍結のベストタイミングとは", date: "2024.11.25", cat: "卵子凍結", image: "column-egg-freezing.jpg" },
    { id: 3, title: "着床前診断（PGT）のメリット・デメリット", date: "2024.11.20", cat: "着床前診断", image: "column-pgt.jpg" },
    { id: 4, title: "人工授精と体外受精の違いを解説", date: "2024.11.15", cat: "人工授精", image: "column-iui.jpg" },
    { id: 5, title: "不妊治療の保険適用について", date: "2024.11.10", cat: "費用・保険", image: "column-insurance.jpg" },
  ]

  // おすすめコラム
  const recommendedColumns = [
    { id: 6, title: "妊活を始める前に知っておきたいこと", date: "2024.10.01", cat: "妊活基礎", image: "column-fertility-basics.jpg" },
    { id: 7, title: "顕微授精（ICSI）とは？適応と流れ", date: "2024.09.20", cat: "顕微授精", image: "column-icsi.jpg" },
    { id: 8, title: "胚盤胞培養のメリットと成功率", date: "2024.09.15", cat: "培養", image: "column-blastocyst.jpg" },
    { id: 9, title: "男性不妊の原因と検査方法", date: "2024.09.10", cat: "男性不妊", image: "column-male-infertility.jpg" },
    { id: 10, title: "タイミング法の正しいやり方", date: "2024.09.05", cat: "タイミング法", image: "column-timing.jpg" },
  ]

  // 人気コラム
  const popularColumns = [
    { id: 11, title: "体外受精の費用と助成金について", date: "2024.08.01", cat: "費用・保険", image: "column-cost.jpg" },
    { id: 12, title: "AMH検査でわかること", date: "2024.07.20", cat: "検査", image: "column-amh.jpg" },
    { id: 13, title: "不妊治療中のストレス対処法", date: "2024.07.15", cat: "メンタルケア", image: "column-stress.jpg" },
    { id: 14, title: "採卵後の過ごし方と注意点", date: "2024.07.10", cat: "体外受精", image: "column-after-retrieval.jpg" },
    { id: 15, title: "胚移植後の症状と妊娠判定まで", date: "2024.07.05", cat: "体外受精", image: "column-after-transfer.jpg" },
  ]

  // カテゴリー一覧
  const categories = [
    { name: "体外受精", count: 15 },
    { name: "顕微授精", count: 8 },
    { name: "人工授精", count: 10 },
    { name: "タイミング法", count: 6 },
    { name: "卵子凍結", count: 5 },
    { name: "着床前診断", count: 4 },
    { name: "男性不妊", count: 7 },
    { name: "検査", count: 12 },
    { name: "費用・保険", count: 9 },
    { name: "妊活基礎", count: 11 },
    { name: "メンタルケア", count: 6 },
    { name: "培養", count: 4 },
  ]

  // 記事カードコンポーネント
  const ArticleCard = ({ article }: { article: { id: number; title: string; date: string; cat: string; image: string } }) => (
    <Link href={`/column/${article.id}`} className="group block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all">
        {/*
          【画像】コラムサムネイル
          - 推奨サイズ: 400x250px
          - ファイル名: {article.image}
        */}
        <div className="bg-gray-100 aspect-[16/10] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
          <span className="text-[10px] text-gray-500">【画像】</span>
          <span className="text-[8px] text-gray-400">{article.image}</span>
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium">
              {article.cat}
            </span>
            <time className="text-xs text-muted-foreground">{article.date}</time>
          </div>
          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>
        </div>
      </div>
    </Link>
  )

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">コラム</h1>
          <p className="text-muted-foreground">不妊治療・妊活に役立つ情報を専門医が監修してお届けします</p>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* 監修者情報 */}
            <div className="bg-primary/5 rounded-xl p-6 mb-12">
              <div className="flex items-center gap-4">
                {/*
                  【画像】院長写真
                  - 推奨サイズ: 80x80px
                  - ファイル名: doctor-thumb.jpg
                */}
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center border-2 border-dashed border-gray-300 flex-shrink-0">
                  <span className="text-[8px] text-gray-500">【写真】</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">医学監修</p>
                  <p className="font-bold text-primary">院長 山田 花子</p>
                  <p className="text-xs text-muted-foreground">日本産科婦人科学会専門医 / 日本生殖医学会生殖医療専門医</p>
                </div>
              </div>
            </div>

            {/* 新着コラム */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  新着コラム
                </h2>
                <Link href="/column/latest" className="text-sm text-primary hover:underline">
                  一覧を見る →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {latestColumns.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* おすすめコラム */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  おすすめコラム
                </h2>
                <Link href="/column/recommended" className="text-sm text-primary hover:underline">
                  一覧を見る →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {recommendedColumns.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* 人気コラム */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                  <span className="w-1 h-6 bg-primary rounded-full"></span>
                  人気コラム
                </h2>
                <Link href="/column/popular" className="text-sm text-primary hover:underline">
                  一覧を見る →
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {popularColumns.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>

            {/* 全てのコラムを見るボタン */}
            <div className="text-center">
              <Link
                href="/column/all"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                全てのコラムをみる
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-72 flex-shrink-0">
            {/* 検索 */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-bold text-primary mb-3">コラム検索</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="キーワードで検索..."
                  className="w-full px-4 py-2 pr-10 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary"
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>

            {/* カテゴリー */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <h3 className="font-bold text-primary mb-3">カテゴリー</h3>
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat.name}>
                    <Link
                      href={`/column/category/${cat.name}`}
                      className="flex items-center justify-between text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                    >
                      <span>{cat.name}</span>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">{cat.count}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
