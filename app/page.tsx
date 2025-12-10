import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/*
        ============================================
        【画像】ファーストビュー（メインビジュアル）
        - 推奨サイズ: 1920x1080px以上
        - 形式: JPG/PNG/WebP
        - ファイル: /public/images/hero.jpg
        - 内容: クリニック提供の院内写真（スライド対応可）
        - 本番サイトではカルーセル形式（複数枚）
        ============================================
      */}
      {/* Hero Section - ファーストビュー */}
      <section className="relative h-[500px] md:h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gray-300 flex flex-col items-center justify-center border-4 border-dashed border-gray-400">
          <span className="text-gray-600 font-bold text-lg">【提供画像】</span>
          <span className="text-gray-600">ファーストビュー / メインビジュアル</span>
          <span className="text-gray-500 text-sm mt-2">hero.jpg（1920x1080px以上）</span>
          <span className="text-gray-400 text-xs mt-1">※本番はカルーセル形式で複数枚対応</span>
        </div>
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
      <section className="py-12 bg-white">
        <div className="container">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              お知らせ
            </h2>
            <Link href="/news" className="text-primary hover:underline flex items-center gap-1">
              一覧を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="bg-gray-50 rounded-xl p-6 space-y-3">
            {[
              { date: "2024.12.10", title: "年末年始の診療について", cat: "お知らせ" },
              { date: "2024.12.01", title: "インフルエンザワクチン接種のお知らせ", cat: "お知らせ" },
              { date: "2024.11.15", title: "オンライン診療の予約枠を拡大しました", cat: "お知らせ" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 border-b border-gray-200 last:border-0 pb-3 last:pb-0">
                <time className="text-muted-foreground font-medium text-sm">{item.date}</time>
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold w-fit">{item.cat}</span>
                <Link href="#" className="hover:text-primary transition-colors flex-1 truncate">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Naminami Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-primary mb-4">なみなみについて</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              レディースクリニック なみなみは、女性の一生に寄り添うクリニックです。<br />
              思春期から更年期まで、すべてのライフステージにおける女性特有のお悩みに対応いたします。
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/*
              ============================================
              【画像】クリニック外観・内観写真
              - 推奨サイズ: 800x600px
              - 形式: JPG/PNG/WebP
              - 内容: 院内の雰囲気が伝わる写真
              ============================================
            */}
            <div className="bg-gray-200 rounded-2xl h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-muted-foreground font-medium">【画像】</span>
              <span className="text-muted-foreground text-sm">クリニック外観・内観写真</span>
              <span className="text-xs text-gray-400 mt-1">推奨: 800x600px</span>
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                当院は目黒駅から徒歩4分という好立地にあり、お仕事帰りや学校帰りにも通いやすい環境です。
              </p>
              <p className="text-muted-foreground leading-relaxed">
                産婦人科・婦人科・女性泌尿器科・内科と幅広い診療科目を設け、
                女性のあらゆる健康上のお悩みにワンストップで対応できる体制を整えています。
              </p>
              <Button variant="outline" className="rounded-full border-primary text-primary" asChild>
                <Link href="/about">当院についてもっと見る</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================
        【イラスト】診療科目アイコン（5種類）
        - 推奨サイズ: 120x120px（または SVG）
        - 形式: PNG/SVG（透過推奨）
        - ファイル名:
          - icon-obstetrics.svg（産科）
          - icon-gynecology.svg（婦人科）
          - icon-urology.svg（女性泌尿器科）
          - icon-internal.svg（内科）
          - icon-checkup.svg（健康診断・相談）
        - 内容: 各診療科目を表す独自イラスト
        ============================================
      */}
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
                href: "/treatment/obstetrics",
                color: "bg-pink-50",
                iconFile: "icon-obstetrics.svg",
              },
              {
                title: "婦人科",
                desc: "月経トラブル・ピル・更年期",
                href: "/treatment/gynecology",
                color: "bg-purple-50",
                iconFile: "icon-gynecology.svg",
              },
              {
                title: "女性泌尿器科",
                desc: "膀胱炎・尿失禁・レーザー治療",
                href: "/treatment/urology",
                color: "bg-blue-50",
                iconFile: "icon-urology.svg",
              },
              {
                title: "内科",
                desc: "片頭痛・生活習慣病・糖尿病",
                href: "/treatment/internal",
                color: "bg-green-50",
                iconFile: "icon-internal.svg",
              },
              {
                title: "健康診断・相談",
                desc: "がん検診・ワクチン・ドック",
                href: "/treatment/checkup",
                color: "bg-orange-50",
                iconFile: "icon-checkup.svg",
              },
            ].map((dept, i) => (
              <Link key={i} href={dept.href} className="block">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all hover:-translate-y-1 text-center h-full">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${dept.color} flex flex-col items-center justify-center border-2 border-dashed border-gray-300`}>
                    <span className="text-[8px] text-gray-500">【イラスト】</span>
                    <span className="text-[7px] text-gray-400">{dept.iconFile}</span>
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

      {/*
        ============================================
        【画像】当院の特徴セクション（横スクロールカルーセル）
        - 推奨サイズ: 800x500px（PC用）、400x300px（SP用）
        - ファイル名:
          - PC用: concept-img01.jpg, concept-img02.jpg, concept-img03.jpg
          - SP用: concept-img01-sp.jpg, concept-img02-sp.jpg, concept-img03-sp.jpg
        - 内容: 各コンセプトを表す写真
        ============================================
      */}
      {/* Features Section - 当院の特徴（横スクロールカルーセル） */}
      <section className="py-16 bg-secondary/30 overflow-hidden">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">当院の特徴</h2>
            <p className="text-muted-foreground">
              患者様に安心して通っていただくための3つのこだわり
            </p>
          </div>
        </div>

        {/* 横スクロールカルーセル */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 md:px-8 pb-4">
            {[
              {
                title: "全ての世代の女性のかかりつけ医に",
                desc: "思春期から更年期まで、女性のライフステージに合わせた診療を提供。産婦人科・婦人科・女性泌尿器科・内科の幅広い診療科目で、あらゆるお悩みに対応します。",
                file: "concept-img01.jpg",
                fileSp: "concept-img01-sp.jpg",
              },
              {
                title: "効率的に、利便性を追求して",
                desc: "目黒駅から徒歩4分の好立地。平日は17:30まで診療しており、お仕事や学校帰りにも通いやすい環境を整えています。オンライン診療にも対応。",
                file: "concept-img02.jpg",
                fileSp: "concept-img02-sp.jpg",
              },
              {
                title: "新たな居場所として",
                desc: "清潔感のある院内で、リラックスしてお待ちいただけます。プライバシーに配慮した診察室で、安心してご相談いただける環境を大切にしています。",
                file: "concept-img03.jpg",
                fileSp: "concept-img03-sp.jpg",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[85vw] md:w-[600px] snap-center"
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden h-full">
                  {/* 画像エリア */}
                  <div className="bg-gray-200 aspect-[16/10] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300 relative">
                    <span className="text-muted-foreground font-medium">【画像】</span>
                    <span className="text-muted-foreground text-sm">{feature.file}</span>
                    <span className="text-xs text-gray-400 mt-1">推奨: 800x500px</span>
                    <span className="absolute bottom-2 right-2 text-[10px] text-gray-400">SP用: {feature.fileSp}</span>
                  </div>
                  {/* テキストエリア */}
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* スクロールインジケーター */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-primary/30"></div>
            ))}
          </div>

          {/* スクロールヒント */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            ← 横にスクロールできます →
          </p>
        </div>
      </section>

      {/* Facility Section - 設備紹介 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">設備紹介</h2>
            <p className="text-muted-foreground">
              清潔で快適な空間をご用意しています
            </p>
          </div>

          {/*
            ============================================
            【画像】設備紹介ギャラリー（8枚）
            - 推奨サイズ: 400x300px（4:3比率）
            - 形式: JPG/PNG/WebP
            - ファイル名例: facility-reception.jpg, facility-waiting.jpg など
            ============================================
          */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "受付", file: "facility-reception.jpg" },
              { name: "待合室", file: "facility-waiting.jpg" },
              { name: "診察室", file: "facility-consultation.jpg" },
              { name: "内診室", file: "facility-examination.jpg" },
              { name: "処置室", file: "facility-treatment.jpg" },
              { name: "レーザー治療室", file: "facility-laser.jpg" },
              { name: "パウダールーム", file: "facility-powder.jpg" },
              { name: "キッズスペース", file: "facility-kids.jpg" },
            ].map((facility, i) => (
              <div key={i} className="group">
                <div className="bg-gray-200 rounded-xl aspect-[4/3] flex flex-col items-center justify-center mb-2 group-hover:opacity-80 transition-opacity border-2 border-dashed border-gray-300">
                  <span className="text-muted-foreground text-xs">【画像】</span>
                  <span className="text-muted-foreground text-xs">{facility.file}</span>
                </div>
                <p className="text-sm font-medium text-center">{facility.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Message Section - 院長メッセージ */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-primary mb-6">院長メッセージ</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  レディースクリニック なみなみのホームページをご覧いただき、ありがとうございます。
                </p>
                <p>
                  当院は「女性のなみを理解して」をコンセプトに、女性特有の心身の波（なみ）に寄り添った医療を提供したいという想いから開院いたしました。
                </p>
                <p>
                  月経のリズム、妊娠・出産、更年期など、女性の体は一生を通じて様々な変化を経験します。そんな女性の皆様が、気軽に相談でき、安心して通えるクリニックでありたいと考えています。
                </p>
                <p className="font-medium text-foreground">
                  院長 叶谷 愛弓
                </p>
              </div>
              <Button variant="outline" className="rounded-full border-primary text-primary mt-6" asChild>
                <Link href="/doctors">医師紹介を見る</Link>
              </Button>
            </div>
            {/*
              ============================================
              【画像】院長プロフィール写真
              - 推奨サイズ: 400x533px（3:4比率）
              - 形式: JPG/PNG/WebP
              - ファイル名: doctor-profile.jpg
              - 内容: 院長の顔写真（白衣姿推奨）
              ============================================
            */}
            <div className="order-1 md:order-2">
              <div className="bg-gray-200 rounded-2xl aspect-[3/4] max-w-[300px] mx-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-muted-foreground font-medium">【画像】</span>
                <span className="text-muted-foreground text-sm">doctor-profile.jpg</span>
                <span className="text-xs text-gray-400 mt-1">推奨: 400x533px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation Section - オンライン診療 */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">オンライン診療</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  ご自宅や職場から、スマートフォンやパソコンで診察を受けることができます。
                  お忙しい方や、来院が難しい方もお気軽にご利用ください。
                </p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    ピルの処方・継続処方
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    再診・経過観察
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    健康相談
                  </li>
                </ul>
                <Button className="bg-primary text-white rounded-full" asChild>
                  <Link href="/online">オンライン診療について詳しく見る</Link>
                </Button>
              </div>
              {/*
                ============================================
                【画像/イラスト】オンライン診療イメージ
                - 推奨サイズ: 500x250px
                - 形式: JPG/PNG/WebP/SVG
                - ファイル名: online-consultation.png
                - 内容: スマホやPCで診察を受けるイラスト
                ============================================
              */}
              <div className="bg-gray-200 rounded-xl h-[250px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                <span className="text-muted-foreground font-medium">【画像/イラスト】</span>
                <span className="text-muted-foreground text-sm">online-consultation.png</span>
                <span className="text-xs text-gray-400 mt-1">推奨: 500x250px</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Column Section - コラム */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
              <span className="w-2 h-8 bg-primary rounded-full"></span>
              コラム
            </h2>
            <Link href="/column" className="text-primary hover:underline flex items-center gap-1">
              一覧を見る <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/*
            ============================================
            【画像】コラム記事サムネイル（3枚）
            - 推奨サイズ: 640x360px（16:9比率）
            - 形式: JPG/PNG/WebP
            - ファイル名: column-pill.jpg, column-menopause.jpg, column-pregnancy.jpg
            ============================================
          */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "低用量ピルの種類と選び方", cat: "ピル", date: "2024.12.05", file: "column-pill.jpg" },
              { title: "更年期症状のセルフチェック", cat: "更年期", date: "2024.11.28", file: "column-menopause.jpg" },
              { title: "妊娠初期に気をつけたいこと", cat: "妊娠・出産", date: "2024.11.20", file: "column-pregnancy.jpg" },
            ].map((article, i) => (
              <Link key={i} href="/column" className="block group">
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-gray-200 aspect-[16/9] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                    <span className="text-muted-foreground text-xs">【画像】</span>
                    <span className="text-muted-foreground text-xs">{article.file}</span>
                  </div>
                  <div className="p-4">
                    <span className="text-xs text-primary font-medium">{article.cat}</span>
                    <h3 className="font-bold mt-1 group-hover:text-primary transition-colors">{article.title}</h3>
                    <time className="text-xs text-muted-foreground mt-2 block">{article.date}</time>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Access & Hours */}
      <section className="py-16 bg-white">
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

      {/* Fixed Floating Buttons - 常時表示 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-40">
        <div className="container py-3">
          <div className="flex gap-2 md:gap-4 md:justify-center">
            <a href="https://line.me/" className="flex-1 md:flex-none md:min-w-[200px] bg-[#06C755] text-white py-3 px-4 rounded-lg text-center font-bold hover:opacity-90 transition-opacity">
              <span className="hidden md:block text-xs mb-1">24時間ご予約受付</span>
              <span className="text-sm md:text-base">LINE予約</span>
            </a>
            <a href="#" className="flex-1 md:flex-none md:min-w-[200px] bg-primary text-white py-3 px-4 rounded-lg text-center font-bold hover:opacity-90 transition-opacity">
              <span className="hidden md:block text-xs mb-1">このまま予約を</span>
              <span className="text-sm md:text-base">Web予約</span>
            </a>
            <a href="tel:03-5747-9330" className="flex-1 md:flex-none md:min-w-[200px] bg-gray-700 text-white py-3 px-4 rounded-lg text-center font-bold hover:opacity-90 transition-opacity">
              <span className="hidden md:block text-xs mb-1">電話での問い合わせ</span>
              <span className="text-sm md:text-base">03-5747-9330</span>
            </a>
          </div>
        </div>
      </div>

      {/* フッターとの余白確保 */}
      <div className="h-20 md:h-24"></div>
    </div>
  )
}
