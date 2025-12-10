import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ConsultationPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">不妊治療相談外来</h1>
        <p className="text-muted-foreground">「もしかして不妊？」と迷ったら、まずはご相談ください。</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-primary mb-6">このようなお悩みはありませんか？</h2>
          <ul className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "結婚して1年経つが妊娠しない",
              "生理不順で妊娠できるか不安",
              "自分たちに合った治療法を知りたい",
              "治療の費用や期間について知りたい",
              "二人目不妊で悩んでいる",
              "卵子凍結について話を聞きたい",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 bg-secondary/20 p-3 rounded-lg">
                <div className="w-2 h-2 bg-primary rounded-full shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            不妊治療相談外来では、生殖医療専門医や不妊カウンセラーが、患者様のお悩みやご希望を丁寧にお伺いします。<br />
            検査や治療を始める前に、まずは現状を把握し、今後の選択肢について一緒に考えましょう。
          </p>
        </div>

        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 text-center">
          <h2 className="text-xl font-bold text-primary mb-4">不妊カウンセリング</h2>
          <p className="text-muted-foreground mb-6">
            治療に関する不安やストレス、パートナーとの関係など、心のケアも大切にしています。<br />
            認定不妊カウンセラーによる個別カウンセリングも実施しています。
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8">
            カウンセリングについて詳しく
          </Button>
        </div>

        <div className="text-center">
          <p className="text-lg font-medium mb-6">まずは初診予約をお取りください</p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full text-lg px-12 h-14" asChild>
            <Link href="/visitor">はじめての方へ（初診の流れ）</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
