import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Phone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="Clinic Reception"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/20 flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-6 p-6">
              <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tight leading-tight">
                あなたに寄り添う、<br />
                優しい不妊治療を。
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                なみなみレディースクリニックは、<br />
                患者様一人ひとりの心と体に寄り添い、<br />
                最適な治療をご提案します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg px-8 h-14">
                  WEB予約はこちら
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 rounded-full text-lg px-8 h-14" asChild>
                  <Link href="/visitor">はじめての方へ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              お知らせ
            </h2>
            <Link href="/news" className="text-primary hover:underline flex items-center gap-1">
              一覧を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            {[
              { date: "2024.05.01", title: "ゴールデンウィークの診療について", cat: "お知らせ" },
              { date: "2024.04.15", title: "新しい培養士が着任しました", cat: "スタッフ" },
              { date: "2024.04.01", title: "4月の不妊治療説明会の日程が決まりました", cat: "イベント" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                <time className="text-muted-foreground font-medium">{item.date}</time>
                <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold w-fit">{item.cat}</span>
                <Link href="#" className="hover:text-primary transition-colors flex-1 truncate">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Treatment Highlights */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">当院の特徴</h2>
            <p className="text-muted-foreground">
              最新の設備と経験豊富なスタッフが、<br className="md:hidden" />
              あなたの妊活をサポートします。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "オーダーメイド治療",
                desc: "患者様の年齢や体の状態、ライフスタイルに合わせた最適な治療計画をご提案します。",
                icon: "📋",
              },
              {
                title: "痛みの少ない採卵",
                desc: "最新の麻酔技術と細い針を使用し、体への負担を最小限に抑えた採卵を行います。",
                icon: "💉",
              },
              {
                title: "高い培養技術",
                desc: "経験豊富な胚培養士が、徹底した品質管理のもとで大切な卵をお預かりします。",
                icon: "🔬",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/treatment">当院の不妊治療について詳しく見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Access & Hours */}
      <section className="py-20 bg-primary/5">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-primary">アクセス・診療時間</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">なみなみレディースクリニック</p>
                    <p className="text-muted-foreground">
                      〒141-0022<br />
                      東京都品川区東五反田1-1-1<br />
                      五反田駅 東口より徒歩1分
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-2xl text-primary">03-1234-5678</p>
                    <p className="text-sm text-muted-foreground">お気軽にお問い合わせください</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <table className="w-full text-center text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 font-medium text-muted-foreground">診療時間</th>
                      <th className="py-2 font-medium text-muted-foreground">月</th>
                      <th className="py-2 font-medium text-muted-foreground">火</th>
                      <th className="py-2 font-medium text-muted-foreground">水</th>
                      <th className="py-2 font-medium text-muted-foreground">木</th>
                      <th className="py-2 font-medium text-muted-foreground">金</th>
                      <th className="py-2 font-medium text-muted-foreground">土</th>
                      <th className="py-2 font-medium text-muted-foreground text-red-400">日</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 font-medium">9:00 - 12:30</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td>●</td>
                      <td className="text-red-400">/</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">15:00 - 18:00</td>
                      <td>●</td>
                      <td>●</td>
                      <td>/</td>
                      <td>●</td>
                      <td>●</td>
                      <td>▲</td>
                      <td className="text-red-400">/</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-4 text-right">
                  ▲：土曜午後は14:00 - 17:00<br />
                  休診日：水曜午後・日曜・祝日
                </p>
              </div>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
              {/* Map Placeholder - In a real app, embed Google Maps iframe here */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-muted-foreground">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 opacity-20" />
                  <p>Google Map Area</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
