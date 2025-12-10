import Link from "next/link"

export default function TreatmentPage() {
  const departments = [
    {
      id: "general",
      name: "一般産婦人科",
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
      icon: "icon-fertility.svg",
      color: "bg-blue-50",
      items: [
        { name: "タイミング療法", href: "/treatment/fertility/timing" },
        { name: "人工授精", href: "/treatment/fertility/iui" },
        { name: "原因不明不妊症", href: "/treatment/fertility/unexplained" },
      ],
    },
  ]

  const popularTreatments = [
    { name: "体外受精", desc: "高度不妊治療の中心的な治療法", href: "/treatment/advanced-fertility/ivf" },
    { name: "顕微授精", desc: "精子を直接卵子に注入する高度な治療", href: "/treatment/advanced-fertility/icsi" },
    { name: "人工授精", desc: "タイミング法の次のステップ", href: "/treatment/fertility/iui" },
    { name: "卵子凍結", desc: "将来の妊娠に備えて", href: "/treatment/advanced-fertility/egg-freezing" },
    { name: "着床前診断", desc: "染色体異常の検査", href: "/treatment/advanced-fertility/pgt" },
    { name: "オンライン診療", desc: "ご自宅から受診可能", href: "/online" },
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
              { label: "人気の診療", href: "#popular" },
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
                  <h3 className="text-lg font-bold text-primary">{dept.name}</h3>
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

      {/* Popular Treatments Section */}
      <section id="popular" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">人気の診療</h2>
          <p className="text-center text-muted-foreground mb-12">多くの患者様にご利用いただいている診療内容です</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularTreatments.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-bold text-primary mb-2 group-hover:underline">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Link>
            ))}
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

      {/* Reservation CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container">
          <h2 className="text-xl font-bold text-primary text-center mb-8">ご予約・お問い合わせ</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a href="https://line.me/" className="flex-1 bg-[#06C755] text-white py-4 px-6 rounded-xl text-center font-bold hover:opacity-90 transition-opacity">
              <span className="block text-xs mb-1">24時間ご予約受付</span>
              <span>LINE予約</span>
            </a>
            <a href="#" className="flex-1 bg-primary text-white py-4 px-6 rounded-xl text-center font-bold hover:opacity-90 transition-opacity">
              <span className="block text-xs mb-1">このまま予約を</span>
              <span>Web予約</span>
            </a>
            <a href="tel:03-5747-9330" className="flex-1 bg-gray-700 text-white py-4 px-6 rounded-xl text-center font-bold hover:opacity-90 transition-opacity">
              <span className="block text-xs mb-1">電話での問い合わせ</span>
              <span>03-5747-9330</span>
            </a>
          </div>
        </div>
      </section>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
