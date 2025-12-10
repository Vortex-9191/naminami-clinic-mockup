import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "一般不妊治療｜タイミング療法・人工授精｜レディースクリニック ぷかぷか",
  description: "一般不妊治療（タイミング療法・人工授精）のご案内。目黒駅徒歩3分のレディースクリニック ぷかぷかでは、患者様に寄り添った不妊治療を提供しています。原因不明不妊症にも対応。",
  keywords: "一般不妊治療, タイミング療法, 人工授精, AIH, IUI, 不妊治療, 目黒, レディースクリニック",
}

export default function GeneralFertilityPage() {
  const treatments = [
    {
      id: "timing",
      title: "タイミング療法",
      subtitle: "自然妊娠に近い形での治療",
      description: "排卵日を正確に予測し、最も妊娠しやすいタイミングで性交渉を持つ方法です。不妊治療の第一歩として、身体的・経済的負担が比較的少ない治療法です。",
      features: [
        "基礎体温・超音波検査で排卵日を予測",
        "必要に応じて排卵誘発剤を使用",
        "3〜6周期を目安に実施",
        "保険適用可能",
      ],
      suitable: ["不妊期間が短い方", "年齢が若い方（35歳未満）", "卵管・精子に大きな問題がない方"],
      link: "/treatment/fertility/timing",
    },
    {
      id: "iui",
      title: "人工授精（AIH/IUI）",
      subtitle: "精子を子宮内に直接注入",
      description: "採取した精子を洗浄・濃縮し、排卵のタイミングに合わせて子宮内に直接注入する方法です。タイミング療法より妊娠率が高く、体外受精より負担が少ない治療法です。",
      features: [
        "精子を洗浄・濃縮して良好な精子を選別",
        "排卵日に合わせて子宮内に注入",
        "処置時間は5〜10分程度",
        "保険適用可能",
      ],
      suitable: ["精子の運動性に軽度の問題がある方", "頸管粘液に問題がある方", "タイミング療法で妊娠しなかった方", "性交障害がある方"],
      link: "/treatment/fertility/iui",
    },
    {
      id: "unexplained",
      title: "原因不明不妊症",
      subtitle: "検査で異常が見つからない不妊",
      description: "各種検査を行っても明らかな原因が特定できない不妊症です。全不妊症の約10〜20%を占めます。段階的な治療で多くの方が妊娠に至っています。",
      features: [
        "タイミング療法から段階的にステップアップ",
        "排卵誘発による複数卵胞発育",
        "状況に応じて人工授精・体外受精へ",
        "カウンセリングによる精神的サポート",
      ],
      suitable: ["検査で異常が見つからなかった方", "不妊期間が1年以上の方"],
      link: "/treatment/fertility/unexplained",
    },
  ]

  const flow = [
    { step: 1, title: "初診・検査", desc: "基本的な検査で不妊の原因を調べます" },
    { step: 2, title: "治療計画", desc: "検査結果をもとに最適な治療法をご提案" },
    { step: 3, title: "タイミング療法", desc: "排卵日を予測し、適切なタイミングを指導" },
    { step: 4, title: "人工授精", desc: "タイミング療法で効果がない場合にステップアップ" },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header with SEO content */}
      <div className="bg-blue-50 py-12">
        <div className="container text-center">
          <p className="text-blue-600 text-sm font-medium mb-2">General Fertility Treatment</p>
          <h1 className="text-3xl font-bold text-primary mb-4">一般不妊治療</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            タイミング療法・人工授精など、身体への負担が比較的少ない治療法で<br className="hidden md:block" />
            自然妊娠に近い形での妊娠を目指します
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-3">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/treatment" className="hover:text-primary">診療内容</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">一般不妊治療</span>
          </nav>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-4">一般不妊治療とは</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              一般不妊治療は、<strong>タイミング療法</strong>や<strong>人工授精（AIH/IUI）</strong>など、
              体外受精を行わない不妊治療の総称です。身体への負担が比較的少なく、
              自然妊娠に近い形での妊娠を目指します。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              当院では、患者様の年齢や不妊期間、検査結果などを総合的に判断し、
              最適な治療法をご提案いたします。一般不妊治療で妊娠される方も多くいらっしゃいます。
            </p>
          </div>
        </div>
      </section>

      {/* Treatment Flow */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="text-xl font-bold text-primary text-center mb-8">一般不妊治療の流れ</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {flow.map((item, i) => (
              <div key={i} className="flex items-center">
                <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 w-48">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-sm text-primary mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
                {i < flow.length - 1 && (
                  <ArrowRight className="w-5 h-5 text-blue-300 mx-2 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">治療内容</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-32"
              >
                <div className="border-l-4 border-blue-500 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-primary">{treatment.title}</h3>
                    <span className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {treatment.subtitle}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6">{treatment.description}</p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-3">治療の特徴</h4>
                      <ul className="space-y-2">
                        {treatment.features.map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-sm font-bold text-blue-700 mb-3">こんな方におすすめ</h4>
                      <ul className="space-y-2">
                        {treatment.suitable.map((item, i) => (
                          <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                            <span className="text-blue-500">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link
                    href={treatment.link}
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                  >
                    詳しく見る <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Up Info */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-bold text-primary mb-4">高度不妊治療へのステップアップ</h3>
            <p className="text-sm text-muted-foreground mb-4">
              一般不妊治療を数周期行っても妊娠に至らない場合は、体外受精・顕微授精などの
              高度不妊治療へのステップアップをご提案することがあります。
              年齢や不妊期間によっては、早めのステップアップをお勧めする場合もあります。
            </p>
            <Link
              href="/advanced-fertility"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              高度不妊治療について <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-blue-50">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary mb-4">一般不妊治療のご相談</h2>
          <p className="text-muted-foreground mb-8">
            まずは検査から始めてみませんか？<br />
            お一人で悩まず、お気軽にご相談ください。
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Link
              href="/knowledge"
              className="flex-1 bg-white border-2 border-primary text-primary py-4 px-6 rounded-xl text-center font-bold hover:bg-primary hover:text-white transition-colors"
            >
              不妊治療のステップを見る
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
