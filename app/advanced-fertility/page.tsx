import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "高度不妊治療｜体外受精・顕微授精・卵子凍結｜レディースクリニック ぷかぷか",
  description: "高度不妊治療（体外受精・顕微授精・卵子凍結・胚凍結・着床前診断）のご案内。目黒駅徒歩3分のレディースクリニック ぷかぷかでは、最新の生殖医療技術で妊娠をサポートします。",
  keywords: "高度不妊治療, 体外受精, IVF, 顕微授精, ICSI, 卵子凍結, 胚凍結, 着床前診断, PGT, 目黒, レディースクリニック",
}

export default function AdvancedFertilityPage() {
  const treatments = [
    {
      id: "ivf",
      title: "体外受精（IVF）",
      subtitle: "In Vitro Fertilization",
      description: "卵子を体外に取り出し、培養液の中で精子と受精させ、できた受精卵（胚）を子宮に戻す治療法です。1978年に世界初の体外受精児が誕生して以来、世界中で800万人以上が体外受精で生まれています。",
      features: [
        "排卵誘発剤で複数の卵子を育てる",
        "採卵手術で卵子を採取（15〜20分程度）",
        "培養液の中で精子と受精させる",
        "胚を培養し、最適なタイミングで子宮に移植",
      ],
      suitable: ["卵管閉塞・卵管切除後の方", "人工授精で妊娠しなかった方", "原因不明不妊の方", "男性不妊の方"],
      link: "/treatment/advanced-fertility/ivf",
    },
    {
      id: "icsi",
      title: "顕微授精（ICSI）",
      subtitle: "Intracytoplasmic Sperm Injection",
      description: "顕微鏡下で1つの精子を細いガラス針で直接卵子に注入して受精させる方法です。精子の数が極めて少ない場合や、運動性が低い場合でも受精が可能です。",
      features: [
        "1つの精子を顕微鏡下で選別",
        "細いガラス針で卵子に直接注入",
        "重度の男性不妊でも受精可能",
        "体外受精で受精しなかった場合の選択肢",
      ],
      suitable: ["重度の男性不妊（乏精子症・精子無力症）の方", "体外受精で受精しなかった方", "抗精子抗体がある方", "精巣内精子を使用する方"],
      link: "/treatment/advanced-fertility/icsi",
    },
    {
      id: "egg-freezing",
      title: "卵子凍結",
      subtitle: "Egg Freezing / Oocyte Cryopreservation",
      description: "将来の妊娠に備えて、若いうちに卵子を凍結保存する方法です。年齢とともに卵子の質は低下するため、妊娠を先延ばしにしたい方にとって有効な選択肢です。",
      features: [
        "ガラス化凍結法で卵子を保存",
        "解凍後の生存率は90%以上",
        "保存期間は1年ごとに更新",
        "将来の体外受精・顕微授精に使用",
      ],
      suitable: ["キャリアを優先したい方", "パートナーがまだいない方", "がん治療前の方（医学的適応）", "卵巣機能低下が心配な方"],
      link: "/treatment/advanced-fertility/egg-freezing",
    },
    {
      id: "sperm-freezing",
      title: "精子凍結",
      subtitle: "Sperm Freezing / Sperm Cryopreservation",
      description: "精子を凍結保存することで、将来の不妊治療や、採卵日に精子を採取できない場合に備えることができます。",
      features: [
        "液体窒素で凍結保存",
        "保存期間は1年ごとに更新",
        "人工授精・体外受精に使用可能",
        "採卵日に来院できない場合のバックアップ",
      ],
      suitable: ["採卵日に来院できない方", "精子の状態に変動がある方", "がん治療前の方", "無精子症で精巣内精子を凍結する方"],
      link: "/treatment/advanced-fertility/sperm-freezing",
    },
    {
      id: "embryo-freezing",
      title: "胚凍結",
      subtitle: "Embryo Freezing",
      description: "体外受精で得られた余剰胚を凍結保存し、次回以降の移植に使用します。凍結融解胚移植は、新鮮胚移植と同等以上の妊娠率が期待できます。",
      features: [
        "ガラス化凍結法で胚を保存",
        "解凍後の生存率は95%以上",
        "採卵なしで次の移植が可能",
        "子宮内膜の状態を整えてから移植",
      ],
      suitable: ["余剰胚がある方", "卵巣過剰刺激症候群（OHSS）のリスクがある方", "2人目以降の妊娠を希望する方"],
      link: "/treatment/advanced-fertility/embryo-freezing",
    },
    {
      id: "embryo-transfer",
      title: "胚移植",
      subtitle: "Embryo Transfer",
      description: "培養した胚を子宮内に戻す処置です。新鮮胚移植と凍結融解胚移植があり、患者様の状態に合わせて最適な方法を選択します。",
      features: [
        "処置時間は5〜10分程度",
        "痛みはほとんどない",
        "超音波で確認しながら移植",
        "移植後は通常の生活が可能",
      ],
      suitable: ["体外受精を受けられる方"],
      link: "/treatment/advanced-fertility/embryo-transfer",
    },
    {
      id: "pgt",
      title: "着床前診断（PGT）",
      subtitle: "Preimplantation Genetic Testing",
      description: "胚移植前に胚の染色体異常を検査し、正常な胚を選んで移植する方法です。流産率の低下や妊娠率の向上が期待できます。",
      features: [
        "胚盤胞から細胞を採取して検査",
        "染色体の数的異常を検出（PGT-A）",
        "構造異常を検出（PGT-SR）",
        "結果が出るまで約2〜3週間",
      ],
      suitable: ["反復着床不全の方", "反復流産の方", "高齢の方（38歳以上）", "染色体構造異常がある方"],
      link: "/treatment/advanced-fertility/pgt",
    },
    {
      id: "advanced-medicine",
      title: "先進医療",
      subtitle: "Advanced Medical Treatment",
      description: "保険診療と併用可能な先進医療として承認された治療法です。PICSI、タイムラプス培養、ERA検査など、妊娠率向上のための最新技術を提供しています。",
      features: [
        "PICSI（成熟精子選別）",
        "タイムラプス培養",
        "ERA/EMMA/ALICE検査",
        "保険診療との併用が可能",
      ],
      suitable: ["より高い妊娠率を目指す方", "反復着床不全の方", "胚の質を高めたい方"],
      link: "/treatment/advanced-fertility/advanced-medicine",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header with SEO content */}
      <div className="bg-purple-50 py-12">
        <div className="container text-center">
          <p className="text-purple-600 text-sm font-medium mb-2">Advanced Fertility Treatment</p>
          <h1 className="text-3xl font-bold text-primary mb-4">高度不妊治療</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            体外受精・顕微授精・卵子凍結など、<br className="hidden md:block" />
            最新の生殖医療技術で妊娠をサポートします
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
            <span className="text-primary">高度不妊治療</span>
          </nav>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "体外受精", href: "#ivf" },
              { label: "顕微授精", href: "#icsi" },
              { label: "卵子凍結", href: "#egg-freezing" },
              { label: "胚凍結", href: "#embryo-freezing" },
              { label: "着床前診断", href: "#pgt" },
              { label: "先進医療", href: "#advanced-medicine" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs rounded-full border border-purple-200 text-purple-700 hover:bg-purple-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-4">高度不妊治療（ART）とは</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              高度不妊治療は、<strong>体外受精（IVF）</strong>や<strong>顕微授精（ICSI）</strong>など、
              体外で受精を行う生殖補助医療（ART: Assisted Reproductive Technology）の総称です。
              一般不妊治療で妊娠に至らなかった方や、卵管・精子に問題がある方に適応されます。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              当院では、最新の培養設備と熟練した培養士により、高い妊娠率を実現しています。
              2022年4月より保険適用が拡大され、より多くの方が治療を受けやすくなりました。
            </p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">治療内容</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-32"
              >
                <div className="border-l-4 border-purple-500 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-primary">{treatment.title}</h3>
                    <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
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
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="text-sm font-bold text-purple-700 mb-3">こんな方におすすめ</h4>
                      <ul className="space-y-2">
                        {treatment.suitable.map((item, i) => (
                          <li key={i} className="text-sm text-purple-800 flex items-start gap-2">
                            <span className="text-purple-500">✓</span>
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

      {/* Price Info */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-primary mb-4">料金について</h3>
            <p className="text-sm text-muted-foreground mb-6">
              2022年4月より、体外受精・顕微授精などの高度不妊治療が保険適用となりました。<br />
              詳しい料金については料金ページをご覧ください。
            </p>
            <Link
              href="/price"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              料金表を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-purple-50">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary mb-4">高度不妊治療のご相談</h2>
          <p className="text-muted-foreground mb-8">
            一般不妊治療から高度不妊治療へのステップアップをお考えの方、<br className="hidden md:block" />
            まずはお気軽にご相談ください。
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
