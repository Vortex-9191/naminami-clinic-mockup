import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"

export default function TreatmentPage() {
  const departments = [
    {
      id: "general",
      name: "一般産婦人科",
      href: "/general-gynecology",
      icon: "icon-general.svg",
      color: "bg-pink-50",
      items: [
        { name: "月経関連トラブル", href: "/treatment/general/menstrual" },
        { name: "避妊治療", href: "/treatment/general/contraception" },
        { name: "頸がん検診", href: "/treatment/general/cervical-cancer" },
        { name: "妊娠判定・採卵", href: "/treatment/general/pregnancy-test" },
      ],
    },
    {
      id: "advanced-fertility",
      name: "高度不妊治療",
      href: "/advanced-fertility",
      icon: "icon-advanced-fertility.svg",
      color: "bg-purple-50",
      items: [
        { name: "卵子凍結", href: "/treatment/advanced-fertility/egg-freezing" },
        { name: "精子凍結", href: "/treatment/advanced-fertility/sperm-freezing" },
        { name: "培養", href: "/treatment/advanced-fertility/culture" },
        { name: "胚凍結", href: "/treatment/advanced-fertility/embryo-freezing" },
        { name: "胚移植", href: "/treatment/advanced-fertility/embryo-transfer" },
        { name: "体外受精", href: "/treatment/advanced-fertility/ivf" },
        { name: "顕微授精", href: "/treatment/advanced-fertility/icsi" },
        { name: "着床前診断", href: "/treatment/advanced-fertility/pgt" },
        { name: "先進医療について", href: "/treatment/advanced-fertility/advanced-medicine" },
      ],
    },
    {
      id: "fertility",
      name: "一般不妊治療",
      href: "/general-fertility",
      icon: "icon-fertility.svg",
      color: "bg-blue-50",
      items: [
        { name: "タイミング療法", href: "/treatment/fertility/timing" },
        { name: "人工授精", href: "/treatment/fertility/iui" },
        { name: "原因不明不妊症", href: "/treatment/fertility/unexplained" },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">診療内容</h1>
          <p className="text-muted-foreground">当院で対応している診療内容をご紹介します</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "診療科目から探す", href: "#departments" },
              { label: "オンライン診療", href: "#online" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Link
              href="/knowledge"
              className="px-4 py-2 text-sm rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
            >
              不妊治療のステップ →
            </Link>
          </div>
        </div>
      </div>

      {/*
        ============================================
        【イラスト】診療科目アイコン（3個）
        - 推奨サイズ: 80x80px / SVG
        - ファイル名: icon-general.svg, icon-advanced-fertility.svg, icon-fertility.svg
        - 内容: 各診療科目を表す独自イラスト
        ============================================
      */}
      {/* Departments Section */}
      <section id="departments" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">診療科目から探す</h2>
          <p className="text-center text-muted-foreground mb-12">診療科目を選択してください</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departments.map((dept) => (
              <div key={dept.id} className={`${dept.color} rounded-2xl p-6`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-white rounded-full flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-[8px] text-gray-500">【イラスト】</span>
                    <span className="text-[7px] text-gray-400">{dept.icon}</span>
                  </div>
                  <Link href={dept.href} className="text-lg font-bold text-primary hover:underline">
                    {dept.name}
                  </Link>
                </div>
                <ul className="space-y-2">
                  {dept.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        href={item.href}
                        className="block text-sm text-muted-foreground hover:text-primary hover:underline transition-colors py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 不妊治療のステップ */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">不妊治療のステップ</h2>
          <p className="text-center text-muted-foreground mb-10">
            患者様の状態に応じて段階的に治療を進めていきます
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-4 mb-8">
              {[
                { step: 1, title: "タイミング療法", category: "一般不妊治療", color: "bg-blue-100 border-blue-300", href: "/treatment/fertility/timing" },
                { step: 2, title: "人工授精", category: "一般不妊治療", color: "bg-blue-100 border-blue-300", href: "/treatment/fertility/iui" },
                { step: 3, title: "体外受精", category: "高度不妊治療", color: "bg-purple-100 border-purple-300", href: "/treatment/advanced-fertility/ivf" },
                { step: 4, title: "顕微授精", category: "高度不妊治療", color: "bg-purple-100 border-purple-300", href: "/treatment/advanced-fertility/icsi" },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={`${item.color} border-2 rounded-xl p-4 text-center hover:shadow-md transition-shadow group`}
                >
                  <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm mx-auto mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-primary group-hover:underline">{item.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{item.category}</p>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/knowledge"
                className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
              >
                不妊治療のステップを詳しく見る
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Online Section */}
      <section id="online" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">オンライン診療</h2>

          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/30 p-8 rounded-2xl">
              <p className="text-center text-lg font-medium mb-6">
                ご自宅からスマートフォンで受診いただけます
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-primary mb-3">オンライン対応可能な診療</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>・低用量ピル・アフターピルの処方</li>
                    <li>・月経移動のご相談</li>
                    <li>・月経に関するご相談</li>
                    <li>・更年期症状のご相談</li>
                    <li>・その他婦人科全般のご相談</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-primary mb-3">オンライン診療の流れ</h3>
                  <ol className="space-y-2 text-sm text-muted-foreground">
                    <li>1. WEB予約でオンライン診療を選択</li>
                    <li>2. 予約時間にビデオ通話で診察</li>
                    <li>3. お薬は郵送でお届け</li>
                    <li>4. お支払いはクレジットカード</li>
                  </ol>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/online"
                  className="inline-block bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
                >
                  オンライン診療の詳細を見る
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">料金について</h2>
          <p className="text-muted-foreground mb-8">
            当院の診療料金についてはこちらをご確認ください
          </p>
          <Link
            href="/price"
            className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors"
          >
            料金表を見る
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
