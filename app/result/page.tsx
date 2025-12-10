import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "治療実績｜体外受精・顕微授精の妊娠率｜レディースクリニック ぷかぷか",
  description: "当院の不妊治療実績（体外受精・顕微授精の妊娠率、年齢別成績、年間治療件数）を公開しています。目黒駅徒歩3分のレディースクリニック ぷかぷか。",
}

export default function ResultPage() {
  // 年齢別妊娠率データ
  const pregnancyRateByAge = [
    { age: "〜29歳", ivf: 52, icsi: 50, color: "bg-pink-400" },
    { age: "30〜34歳", ivf: 45, icsi: 43, color: "bg-pink-500" },
    { age: "35〜37歳", ivf: 38, icsi: 36, color: "bg-purple-400" },
    { age: "38〜39歳", ivf: 28, icsi: 26, color: "bg-purple-500" },
    { age: "40〜42歳", ivf: 18, icsi: 16, color: "bg-purple-600" },
    { age: "43歳〜", ivf: 8, icsi: 7, color: "bg-purple-700" },
  ]

  // 治療別実績
  const treatmentResults = [
    { treatment: "採卵件数", count: 1250, unit: "件" },
    { treatment: "新鮮胚移植", count: 320, unit: "件" },
    { treatment: "凍結融解胚移植", count: 980, unit: "件" },
    { treatment: "人工授精", count: 850, unit: "件" },
  ]

  // 年度別推移
  const annualData = [
    { year: "2021年", ivfCycles: 680, pregnancies: 245, birthRate: 36.0 },
    { year: "2022年", ivfCycles: 920, pregnancies: 340, birthRate: 37.0 },
    { year: "2023年", ivfCycles: 1150, pregnancies: 438, birthRate: 38.1 },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">治療実績</h1>
          <p className="text-muted-foreground">当院における不妊治療の実績を公開しています</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "年齢別妊娠率", href: "#pregnancy-rate" },
              { label: "治療件数", href: "#treatment-count" },
              { label: "年度別推移", href: "#annual" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Stats */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: "累計妊娠数", value: "1,023", unit: "名", sub: "2021-2023年" },
              { label: "体外受精妊娠率", value: "38.1", unit: "%", sub: "2023年実績" },
              { label: "年間採卵件数", value: "1,250", unit: "件", sub: "2023年実績" },
              { label: "凍結胚生存率", value: "98.5", unit: "%", sub: "ガラス化法" },
            ].map((stat, i) => (
              <div key={i} className="bg-gradient-to-br from-primary/5 to-purple-50 p-6 rounded-xl text-center">
                <p className="text-xs text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold text-primary">
                  {stat.value}<span className="text-lg">{stat.unit}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pregnancy Rate by Age */}
      <section id="pregnancy-rate" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">年齢別妊娠率</h2>
          <p className="text-center text-muted-foreground mb-12">
            2023年1月〜12月の当院実績（移植あたりの臨床妊娠率）
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              {/* Chart */}
              <div className="mb-8">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm">体外受精（IVF）</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-400 rounded"></div>
                    <span className="text-sm">顕微授精（ICSI）</span>
                  </div>
                </div>

                <div className="h-64 flex items-end justify-around gap-2 md:gap-4 pb-4 border-b border-gray-200">
                  {pregnancyRateByAge.map((data, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div className="flex gap-1 items-end h-48 w-full justify-center">
                        {/* IVF bar */}
                        <div className="relative w-6 md:w-8 flex items-end h-full">
                          <div
                            className="w-full rounded-t bg-primary transition-all duration-1000"
                            style={{ height: `${data.ivf * 1.8}%` }}
                          >
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">
                              {data.ivf}%
                            </span>
                          </div>
                        </div>
                        {/* ICSI bar */}
                        <div className="relative w-6 md:w-8 flex items-end h-full">
                          <div
                            className="w-full rounded-t bg-purple-400 transition-all duration-1000"
                            style={{ height: `${data.icsi * 1.8}%` }}
                          >
                            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-xs font-bold text-purple-600">
                              {data.icsi}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground text-center">{data.age}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="p-3 text-left font-bold text-primary">年齢</th>
                      {pregnancyRateByAge.map((data, i) => (
                        <th key={i} className="p-3 text-center font-medium">{data.age}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-medium">体外受精</td>
                      {pregnancyRateByAge.map((data, i) => (
                        <td key={i} className="p-3 text-center">{data.ivf}%</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">顕微授精</td>
                      {pregnancyRateByAge.map((data, i) => (
                        <td key={i} className="p-3 text-center">{data.icsi}%</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Count */}
      <section id="treatment-count" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">2023年 治療件数</h2>
          <p className="text-center text-muted-foreground mb-12">
            各治療の年間実施件数
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="space-y-6">
                {treatmentResults.map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{item.treatment}</span>
                      <span className="font-bold text-primary">{item.count.toLocaleString()}{item.unit}</span>
                    </div>
                    <div className="bg-gray-100 rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary to-purple-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${(item.count / 1250) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t grid md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">98.5%</p>
                  <p className="text-xs text-muted-foreground">凍結胚生存率</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">95.2%</p>
                  <p className="text-xs text-muted-foreground">受精率（ICSI）</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">62.3%</p>
                  <p className="text-xs text-muted-foreground">胚盤胞到達率</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Annual Trend */}
      <section id="annual" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">年度別推移</h2>
          <p className="text-center text-muted-foreground mb-12">
            治療件数・妊娠率の推移
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-bold text-primary">年度</th>
                    <th className="p-4 text-center font-bold text-primary">採卵周期数</th>
                    <th className="p-4 text-center font-bold text-primary">妊娠数</th>
                    <th className="p-4 text-center font-bold text-primary">妊娠率</th>
                  </tr>
                </thead>
                <tbody>
                  {annualData.map((data, i) => (
                    <tr key={i} className="border-b last:border-0">
                      <td className="p-4 font-medium">{data.year}</td>
                      <td className="p-4 text-center">{data.ivfCycles.toLocaleString()}件</td>
                      <td className="p-4 text-center">{data.pregnancies.toLocaleString()}名</td>
                      <td className="p-4 text-center font-bold text-primary">{data.birthRate}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
                開院以来、治療件数・妊娠率ともに向上しています。<br />
                経験豊富な医師・培養士がチーム医療でサポートいたします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-3">治療成績について</h3>
            <ul className="text-sm text-amber-900 space-y-2">
              <li>・妊娠率は臨床妊娠（胎嚢確認）を基準としています。</li>
              <li>・年齢や不妊原因により、個人差があります。</li>
              <li>・詳しい成績についてはお気軽にお問い合わせください。</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary mb-4">治療のご相談</h2>
          <p className="text-muted-foreground mb-8">
            お一人おひとりに合った治療プランをご提案いたします
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Link
              href="/knowledge"
              className="flex-1 bg-white border-2 border-primary text-primary py-4 px-6 rounded-xl text-center font-bold hover:bg-primary hover:text-white transition-colors"
            >
              不妊治療のステップ
            </Link>
            <a
              href="#"
              className="flex-1 bg-primary text-white py-4 px-6 rounded-xl text-center font-bold hover:opacity-90 transition-opacity"
            >
              ご予約はこちら
            </a>
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
