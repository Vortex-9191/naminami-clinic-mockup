import Link from "next/link"

export default function TreatmentPage() {
  const departments = [
    {
      id: "obstetrics",
      name: "産科",
      icon: "icon-obstetrics.svg",
      color: "bg-pink-50",
      items: [
        { name: "妊婦健診", href: "/treatment/obstetrics/prenatal" },
        { name: "NIPT（新型出生前診断）", href: "/treatment/obstetrics/nipt" },
        { name: "出生前診断", href: "/treatment/obstetrics/prenatal-diagnosis" },
        { name: "つわり外来", href: "/treatment/obstetrics/morning-sickness" },
        { name: "妊娠相談", href: "/treatment/obstetrics/pregnancy-consultation" },
      ],
    },
    {
      id: "gynecology",
      name: "婦人科",
      icon: "icon-gynecology.svg",
      color: "bg-purple-50",
      items: [
        { name: "月経トラブル", href: "/treatment/gynecology/menstrual" },
        { name: "低用量ピル", href: "/treatment/gynecology/pill" },
        { name: "アフターピル", href: "/treatment/gynecology/emergency-pill" },
        { name: "月経移動", href: "/treatment/gynecology/period-delay" },
        { name: "PMS・PMDD", href: "/treatment/gynecology/pms" },
        { name: "更年期症候群", href: "/treatment/gynecology/menopause" },
        { name: "不妊症相談", href: "/treatment/gynecology/infertility" },
        { name: "ブライダルチェック", href: "/treatment/gynecology/bridal" },
        { name: "性感染症検査", href: "/treatment/gynecology/std" },
        { name: "子宮頸がん検診", href: "/treatment/gynecology/cervical-cancer" },
        { name: "おりもの・かゆみ", href: "/treatment/gynecology/discharge" },
        { name: "性交痛", href: "/treatment/gynecology/dyspareunia" },
      ],
    },
    {
      id: "urology",
      name: "女性泌尿器科",
      icon: "icon-urology.svg",
      color: "bg-blue-50",
      items: [
        { name: "膀胱炎", href: "/treatment/urology/cystitis" },
        { name: "尿失禁", href: "/treatment/urology/incontinence" },
        { name: "過活動膀胱", href: "/treatment/urology/overactive-bladder" },
        { name: "インティマレーザー", href: "/treatment/urology/intima-laser" },
      ],
    },
    {
      id: "internal",
      name: "内科",
      icon: "icon-internal.svg",
      color: "bg-green-50",
      items: [
        { name: "片頭痛", href: "/treatment/internal/migraine" },
        { name: "生活習慣病", href: "/treatment/internal/lifestyle" },
        { name: "糖尿病", href: "/treatment/internal/diabetes" },
        { name: "風邪・発熱", href: "/treatment/internal/cold" },
      ],
    },
    {
      id: "checkup",
      name: "健康診断・相談",
      icon: "icon-checkup.svg",
      color: "bg-orange-50",
      items: [
        { name: "子宮がん検診", href: "/treatment/checkup/cervical" },
        { name: "HPVワクチン", href: "/treatment/checkup/hpv" },
        { name: "インフルエンザワクチン", href: "/treatment/checkup/flu" },
        { name: "プレコンセプションチェック", href: "/treatment/checkup/preconception" },
        { name: "各種健康診断", href: "/treatment/checkup/general" },
      ],
    },
  ]

  const popularTreatments = [
    { name: "低用量ピル処方", desc: "PMSや月経痛の改善、避妊目的など", href: "/treatment/gynecology/pill" },
    { name: "子宮頸がん検診", desc: "定期的な検診で早期発見・早期治療", href: "/treatment/checkup/cervical" },
    { name: "性感染症検査", desc: "匿名での検査も可能です", href: "/treatment/gynecology/std" },
    { name: "更年期症候群", desc: "ホルモン補充療法など", href: "/treatment/gynecology/menopause" },
    { name: "妊婦健診", desc: "妊娠中の定期検診", href: "/treatment/obstetrics/prenatal" },
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
        【イラスト】診療科目アイコン（5個）
        - 推奨サイズ: 80x80px / SVG
        - ファイル名: icon-obstetrics.svg, icon-gynecology.svg, icon-urology.svg, icon-internal.svg, icon-checkup.svg
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
