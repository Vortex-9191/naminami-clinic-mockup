import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Clock, Baby, Heart, Stethoscope, Activity, ClipboardCheck } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <Image
          src="/images/hero.png"
          alt="レディースクリニック なみなみ"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center">
          <div className="container">
            <div className="max-w-2xl space-y-4 p-6 text-white">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                女性のなみを理解して
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                目黒駅から徒歩4分
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Congestion Status Section */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="font-bold">本日の混雑状況</span>
              <span className="text-sm text-muted-foreground">
                {new Date().toLocaleDateString('ja-JP', { month: 'long', day: 'numeric', weekday: 'short' })}
              </span>
            </div>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                <span className="text-sm">午前 9:00〜11:00</span>
                <span className="text-xs text-red-600 font-medium">混雑しています</span>
              </div>
              <div className="flex items-center gap-2 bg-red-50 px-3 py-1 rounded-full">
                <span className="text-sm">午後 14:20〜17:00</span>
                <span className="text-xs text-red-600 font-medium">混雑しています</span>
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

      {/* Medical Departments Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">診療内容</h2>
            <p className="text-muted-foreground">
              女性のライフステージに合わせた幅広い診療を行っています
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              {
                title: "産科",
                desc: "妊婦健診・NIPT・出生前診断",
                icon: Baby,
                href: "/treatment/obstetrics",
                color: "bg-pink-50 text-pink-600",
              },
              {
                title: "婦人科",
                desc: "月経トラブル・ピル・更年期",
                icon: Heart,
                href: "/treatment/gynecology",
                color: "bg-purple-50 text-purple-600",
              },
              {
                title: "女性泌尿器科",
                desc: "膀胱炎・尿失禁・レーザー治療",
                icon: Stethoscope,
                href: "/treatment/urology",
                color: "bg-blue-50 text-blue-600",
              },
              {
                title: "内科",
                desc: "片頭痛・生活習慣病・糖尿病",
                icon: Activity,
                href: "/treatment/internal",
                color: "bg-green-50 text-green-600",
              },
              {
                title: "健康診断・相談",
                desc: "がん検診・ワクチン・ドック",
                icon: ClipboardCheck,
                href: "/treatment/checkup",
                color: "bg-orange-50 text-orange-600",
              },
            ].map((dept, i) => (
              <Link key={i} href={dept.href} className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${dept.color} flex items-center justify-center`}>
                    <dept.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{dept.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dept.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5" asChild>
              <Link href="/treatment">診療内容の詳細を見る</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Access & Hours */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">アクセス・診療時間</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-lg">レディースクリニック なみなみ</p>
                    <p className="text-muted-foreground">
                      〒153-0063<br />
                      東京都目黒区目黒1-1-1<br />
                      目黒駅 西口より徒歩4分
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-2xl text-primary">03-5747-9330</p>
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
                      <th className="py-2 font-medium text-muted-foreground text-red-400">日祝</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 font-medium">9:00 - 12:30</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-gray-300">−</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">14:20 - 17:30</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-primary">●</td>
                      <td className="text-gray-300">−</td>
                      <td className="text-gray-300">−</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-xs text-muted-foreground mt-4">
                  ※ 休診日：土曜午後・日曜・祝日
                </p>
              </div>
            </div>

            <div className="h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0!2d139.7!3d35.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM4JzAwLjAiTiAxMznCsDQyJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="レディースクリニック なみなみ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Floating Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-3 z-40 md:hidden">
        <div className="flex gap-2">
          <a href="https://line.me/" className="flex-1 bg-[#06C755] text-white py-3 px-4 rounded-lg text-center text-sm font-bold">
            LINE予約
          </a>
          <a href="#" className="flex-1 bg-primary text-white py-3 px-4 rounded-lg text-center text-sm font-bold">
            Web予約
          </a>
          <a href="tel:03-5747-9330" className="flex-1 bg-gray-700 text-white py-3 px-4 rounded-lg text-center text-sm font-bold">
            電話
          </a>
        </div>
      </div>
    </div>
  )
}
