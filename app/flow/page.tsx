import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarCheck, Smartphone, CreditCard, Package, CheckCircle2 } from "lucide-react"

export default function FlowPage() {
  const steps = [
    {
      number: "01",
      title: "クリニックを探す・予約",
      description: "当サイトから条件に合うクリニックを探し、公式サイトからWeb予約を行います。24時間いつでも予約可能です。",
      icon: CalendarCheck
    },
    {
      number: "02",
      title: "問診・オンライン診察",
      description: "予約時間になったらスマホでビデオ通話を開始。医師が体調や目的に合わせて最適なピルを提案します。",
      icon: Smartphone
    },
    {
      number: "03",
      title: "お支払い",
      description: "クレジットカードや後払いなどで決済。診察終了後、すぐに手続きが完了します。",
      icon: CreditCard
    },
    {
      number: "04",
      title: "お薬の受け取り",
      description: "最短翌日にご自宅のポストへお届け。中身が分からない梱包でプライバシーも安心です。",
      icon: Package
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-secondary/30 py-16 md:py-24">
          <div className="container text-center">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-6">
              処方の流れ
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              スマホひとつで完結するオンライン診療のステップをご紹介します。<br />
              通院不要で、忙しい方でもスムーズに始められます。
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 items-start relative">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 bottom-[-48px] w-0.5 bg-border z-0"></div>
                  )}

                  <div className="flex-shrink-0 relative z-10">
                    <div className="h-16 w-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 bg-white p-8 rounded-3xl border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl text-primary">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-t border-border">
          <div className="container max-w-3xl text-center">
            <h2 className="text-2xl font-bold mb-8">よくある質問</h2>
            <div className="space-y-6 text-left">
              <div className="bg-secondary/20 p-6 rounded-2xl">
                <h3 className="font-bold mb-2 flex items-start gap-2">
                  <span className="text-primary">Q.</span> 保険証は必要ですか？
                </h3>
                <p className="text-muted-foreground pl-6">
                  A. 自由診療（避妊目的など）の場合は保険証は不要です。月経困難症などの治療目的で保険適用となる場合は必要になります。
                </p>
              </div>
              <div className="bg-secondary/20 p-6 rounded-2xl">
                <h3 className="font-bold mb-2 flex items-start gap-2">
                  <span className="text-primary">Q.</span> 未成年でも受診できますか？
                </h3>
                <p className="text-muted-foreground pl-6">
                  A. クリニックによって異なりますが、保護者の同意書があれば受診可能な場合が多いです。詳細は各クリニックのページをご確認ください。
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container">
            <h2 className="text-3xl font-bold mb-6">さっそくクリニックを探す</h2>
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full" asChild>
              <Link href="/search">
                検索ページへ
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
