import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"
import { ArrowRight } from "lucide-react"

export default function KnowledgePage() {
  // 不妊の原因
  const causes = [
    {
      category: "女性側の原因",
      percentage: "約40%",
      items: [
        { name: "排卵障害", desc: "排卵が起こらない、または不規則" },
        { name: "卵管因子", desc: "卵管の閉塞や癒着" },
        { name: "子宮因子", desc: "子宮筋腫、子宮内膜症など" },
        { name: "頸管因子", desc: "頸管粘液の分泌異常" },
        { name: "年齢因子", desc: "卵子の質・数の低下" },
      ],
    },
    {
      category: "男性側の原因",
      percentage: "約40%",
      items: [
        { name: "造精機能障害", desc: "精子の数や運動率の低下" },
        { name: "精路通過障害", desc: "精子の通り道の閉塞" },
        { name: "性機能障害", desc: "勃起障害、射精障害" },
      ],
    },
    {
      category: "原因不明",
      percentage: "約20%",
      items: [
        { name: "機能性不妊", desc: "検査では異常が見つからない" },
      ],
    },
  ]

  // 検査項目
  const examinations = {
    female: [
      { name: "基礎体温測定", desc: "排卵の有無や時期を確認", timing: "毎日" },
      { name: "ホルモン検査", desc: "FSH、LH、E2、プロラクチンなど", timing: "月経中" },
      { name: "超音波検査", desc: "卵胞発育、子宮・卵巣の状態確認", timing: "随時" },
      { name: "子宮卵管造影検査", desc: "卵管の通過性を確認", timing: "月経終了後" },
      { name: "AMH検査", desc: "卵巣予備能（残りの卵子数）を推測", timing: "随時" },
      { name: "子宮鏡検査", desc: "子宮内腔の異常を確認", timing: "月経終了後" },
    ],
    male: [
      { name: "精液検査", desc: "精子の数、運動率、形態を評価", timing: "2〜7日禁欲後" },
      { name: "ホルモン検査", desc: "FSH、LH、テストステロンなど", timing: "随時" },
    ],
  }

  const steps = [
    {
      step: 1,
      title: "タイミング療法",
      category: "一般不妊治療",
      duration: "3〜6周期程度",
      description: "排卵日を正確に予測し、最も妊娠しやすいタイミングで性交渉を持つ方法です。",
      details: [
        "基礎体温や超音波検査で排卵日を予測",
        "必要に応じて排卵誘発剤を使用",
        "自然に近い形での妊娠を目指す",
        "身体的・経済的負担が比較的少ない",
      ],
      suitable: "不妊原因が軽度の方、若い方",
      link: "/treatment/fertility/timing",
    },
    {
      step: 2,
      title: "人工授精（AIH/IUI）",
      category: "一般不妊治療",
      duration: "3〜6周期程度",
      description: "精子を直接子宮内に注入し、卵子と精子が出会う確率を高める方法です。",
      details: [
        "採取した精子を洗浄・濃縮して良好な精子を選別",
        "排卵のタイミングに合わせて子宮内に注入",
        "精子の運動性や数に問題がある場合に有効",
        "タイミング療法より妊娠率が高い",
      ],
      suitable: "精子の運動性に問題がある方、頸管粘液に問題がある方",
      link: "/treatment/fertility/iui",
    },
    {
      step: 3,
      title: "体外受精（IVF）",
      category: "高度不妊治療",
      duration: "1周期につき約1ヶ月",
      description: "卵子を体外に取り出し、精子と受精させてから子宮に戻す方法です。",
      details: [
        "排卵誘発剤で複数の卵子を育てる",
        "採卵手術で卵子を採取",
        "培養液の中で精子と卵子を受精させる",
        "受精卵（胚）を培養し、子宮に移植",
      ],
      suitable: "卵管に問題がある方、人工授精で妊娠しなかった方",
      link: "/treatment/advanced-fertility/ivf",
    },
    {
      step: 4,
      title: "顕微授精（ICSI）",
      category: "高度不妊治療",
      duration: "1周期につき約1ヶ月",
      description: "1つの精子を直接卵子に注入して受精させる、最も高度な生殖補助技術です。",
      details: [
        "顕微鏡下で1つの精子を選別",
        "細いガラス針で卵子に直接注入",
        "精子の数や運動性が極めて少ない場合でも受精可能",
        "体外受精で受精しなかった場合の次のステップ",
      ],
      suitable: "重度の男性不妊、体外受精で受精しなかった方",
      link: "/treatment/advanced-fertility/icsi",
    },
  ]

  const additionalOptions = [
    {
      title: "卵子凍結",
      description: "将来の妊娠に備えて、若いうちに卵子を凍結保存します。",
      link: "/treatment/advanced-fertility/egg-freezing",
    },
    {
      title: "胚凍結",
      description: "余剰胚を凍結保存し、次回の移植に使用します。",
      link: "/treatment/advanced-fertility/embryo-freezing",
    },
    {
      title: "着床前診断（PGT）",
      description: "移植前に胚の染色体異常を検査します。",
      link: "/treatment/advanced-fertility/pgt",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">不妊治療のステップ</h1>
          <p className="text-muted-foreground">治療の流れと各ステップの特徴をご説明します</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "不妊の原因", href: "#causes" },
              { label: "検査について", href: "#examinations" },
              { label: "治療のステップ", href: "#steps" },
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

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              不妊治療を始める前に、まず原因を特定するための検査を行います。<br />
              検査結果に基づいて、患者様に最適な治療法をご提案いたします。
            </p>
          </div>
        </div>
      </section>

      {/* 不妊の原因 */}
      <section id="causes" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">不妊の原因</h2>
          <p className="text-center text-muted-foreground mb-12">
            不妊の原因は女性・男性ともにあり、原因不明の場合もあります
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {causes.map((cause, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className={`p-4 text-center ${i === 0 ? "bg-pink-50" : i === 1 ? "bg-blue-50" : "bg-gray-50"}`}>
                  <h3 className="font-bold text-primary">{cause.category}</h3>
                  <p className="text-2xl font-bold text-primary">{cause.percentage}</p>
                </div>
                <div className="p-4">
                  <ul className="space-y-3">
                    {cause.items.map((item, ii) => (
                      <li key={ii} className="text-sm">
                        <span className="font-bold text-foreground">{item.name}</span>
                        <p className="text-muted-foreground text-xs mt-0.5">{item.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 検査について */}
      <section id="examinations" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">検査について</h2>
          <p className="text-center text-muted-foreground mb-12">
            不妊の原因を特定するため、ご夫婦で検査を受けていただきます
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* 女性の検査 */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 text-sm">♀</span>
                女性の検査
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-pink-50">
                    <tr>
                      <th className="p-3 text-left font-bold text-pink-700">検査名</th>
                      <th className="p-3 text-left font-bold text-pink-700">内容</th>
                      <th className="p-3 text-left font-bold text-pink-700 hidden md:table-cell">時期</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {examinations.female.map((exam, i) => (
                      <tr key={i}>
                        <td className="p-3 font-medium">{exam.name}</td>
                        <td className="p-3 text-muted-foreground">{exam.desc}</td>
                        <td className="p-3 text-muted-foreground hidden md:table-cell">{exam.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 男性の検査 */}
            <div>
              <h3 className="text-lg font-bold text-blue-600 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm">♂</span>
                男性の検査
              </h3>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-blue-50">
                    <tr>
                      <th className="p-3 text-left font-bold text-blue-700">検査名</th>
                      <th className="p-3 text-left font-bold text-blue-700">内容</th>
                      <th className="p-3 text-left font-bold text-blue-700 hidden md:table-cell">時期</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {examinations.male.map((exam, i) => (
                      <tr key={i}>
                        <td className="p-3 font-medium">{exam.name}</td>
                        <td className="p-3 text-muted-foreground">{exam.desc}</td>
                        <td className="p-3 text-muted-foreground hidden md:table-cell">{exam.timing}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                ※男性の検査も当院で受けていただけます。<br />
                ご自宅での採精も可能です（採精容器をお渡しします）。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Step Flow */}
      <section id="steps" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">治療のステップ</h2>
          <p className="text-center text-muted-foreground mb-12">
            一般的には段階的に治療をステップアップしていきます
          </p>
        </div>
        <div className="container">
          <div className="max-w-4xl mx-auto">
            {/* Step Cards */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block"></div>

              <div className="space-y-8">
                {steps.map((step, i) => (
                  <div key={i} className="relative">
                    {/* Step Number */}
                    <div className="absolute left-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl z-10 hidden md:flex">
                      {step.step}
                    </div>

                    {/* Card */}
                    <div className="md:ml-24 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                      <div className={`p-6 md:p-8 ${step.category === "高度不妊治療" ? "border-l-4 border-purple-500" : "border-l-4 border-blue-500"}`}>
                        {/* Mobile Step Number */}
                        <div className="flex items-center gap-3 mb-4 md:hidden">
                          <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                            {step.step}
                          </div>
                          <span className={`text-xs px-2 py-1 rounded ${step.category === "高度不妊治療" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                            {step.category}
                          </span>
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                          <span className={`text-xs px-2 py-1 rounded hidden md:inline-block ${step.category === "高度不妊治療" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700"}`}>
                            {step.category}
                          </span>
                          <span className="text-xs text-muted-foreground">目安期間: {step.duration}</span>
                        </div>

                        <p className="text-muted-foreground mb-4">{step.description}</p>

                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <h4 className="text-sm font-bold text-primary mb-2">特徴</h4>
                            <ul className="space-y-1">
                              {step.details.map((detail, di) => (
                                <li key={di} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="text-sm font-bold text-primary mb-2">適している方</h4>
                            <p className="text-sm text-muted-foreground">{step.suitable}</p>
                          </div>
                        </div>

                        <Link
                          href={step.link}
                          className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                        >
                          詳しく見る <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>

                    {/* Arrow */}
                    {i < steps.length - 1 && (
                      <div className="flex justify-center my-4 md:ml-24">
                        <div className="text-primary/50 text-2xl">↓</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Options */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">その他の治療オプション</h2>
          <p className="text-center text-muted-foreground mb-12">
            患者様の状況に応じて、以下の治療も組み合わせて行います
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalOptions.map((option, i) => (
              <Link
                key={i}
                href={option.link}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:underline">{option.title}</h3>
                <p className="text-sm text-muted-foreground">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Important Note */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-3">治療のステップアップについて</h3>
            <div className="text-sm text-amber-900 space-y-2">
              <p>
                不妊治療は必ずしもステップ1から順番に行う必要はありません。
                患者様の年齢、不妊期間、検査結果などを総合的に判断し、
                最適な治療法をご提案いたします。
              </p>
              <p>
                例えば、年齢が高い方や不妊期間が長い方は、
                早い段階で体外受精をお勧めする場合もあります。
              </p>
              <p className="font-bold">
                まずはお気軽にご相談ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary mb-4">治療についてのご相談</h2>
          <p className="text-muted-foreground mb-8">
            当院では、患者様お一人おひとりに合った治療プランをご提案いたします
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Link
              href="/treatment"
              className="flex-1 bg-white border-2 border-primary text-primary py-4 px-6 rounded-xl text-center font-bold hover:bg-primary hover:text-white transition-colors"
            >
              診療内容を見る
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
