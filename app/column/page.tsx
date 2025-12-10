import Link from "next/link"
import Image from "next/image"

export default function ColumnPage() {
  const columns = [
    {
      id: 1,
      title: "妊活中の食事について：積極的に摂りたい栄養素",
      desc: "妊娠しやすい体づくりのために、日々の食事で意識したいポイントを管理栄養士が解説します。",
      date: "2024.04.20",
      cat: "食事・栄養",
      image: "https://placehold.co/600x400/e0f4ff/1e3a8a?text=Nutrition", // Placeholder for now
    },
    {
      id: 2,
      title: "基礎体温の正しい測り方とグラフの見方",
      desc: "毎日の基礎体温計測は妊活の第一歩。正しい測り方と、グラフから分かる排卵のサインについて。",
      date: "2024.04.10",
      cat: "基礎知識",
      image: "https://placehold.co/600x400/ffd9d9/1e3a8a?text=Temperature",
    },
    {
      id: 3,
      title: "不妊治療のステップアップ：タイミング法から体外受精まで",
      desc: "不妊治療にはどのような段階があるのか、それぞれの治療法の特徴とステップアップの目安を解説。",
      date: "2024.03.25",
      cat: "治療について",
      image: "https://placehold.co/600x400/f3f4f6/1e3a8a?text=Treatment",
    },
    {
      id: 4,
      title: "男性不妊について：パートナーと一緒に知っておきたいこと",
      desc: "不妊の原因の約半数は男性側にあると言われています。男性不妊の検査や治療について。",
      date: "2024.03.15",
      cat: "男性不妊",
      image: "https://placehold.co/600x400/e0f4ff/1e3a8a?text=Male+Infertility",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">コラム</h1>
        <p className="text-muted-foreground">妊活・不妊治療に役立つ情報を専門家が発信します。</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {columns.map((col) => (
          <Link key={col.id} href={`/column/${col.id}`} className="group block bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
            <div className="relative h-48 w-full bg-gray-100">
              {/* In a real app, use next/image with local assets */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-secondary/30">
                Image: {col.title}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">
                  {col.cat}
                </span>
                <time className="text-xs text-muted-foreground">{col.date}</time>
              </div>
              <h2 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {col.title}
              </h2>
              <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                {col.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
