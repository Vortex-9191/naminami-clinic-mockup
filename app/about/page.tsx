import { MapPin, Phone, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">当院の特徴</h1>
          <p className="text-muted-foreground">レディースクリニック ぷかぷかについて</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "ぷかぷかの特徴", href: "#features" },
              { label: "設備紹介", href: "#facility" },
              { label: "院長メッセージ", href: "#message" },
              { label: "当院の取り組み", href: "#initiatives" },
              { label: "オンライン診療", href: "#online" },
              { label: "アクセス", href: "#access" },
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
        【画像】ぷかぷかの特徴セクション（3枚）
        - 推奨サイズ: 600x400px
        - ファイル名: concept-img01.jpg, concept-img02.jpg, concept-img03.jpg
        - 内容: クリニックのコンセプトを表す写真
        ============================================
      */}
      {/* Features Section */}
      <section id="features" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">ぷかぷかの特徴</h2>

          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                title: "全ての世代の女性のかかりつけ医に",
                desc: "思春期から更年期、そしてその先まで。女性のライフステージは常に変化し、それぞれの段階で異なる悩みがあります。当院では、産婦人科・婦人科・女性泌尿器科・内科と幅広い診療科目を設け、あらゆる世代の女性の健康をサポートします。\n\n「ちょっとした体の変化が気になる」「どこに相談すればいいかわからない」そんな時、まず相談できるかかりつけ医として、皆様のそばに寄り添います。",
                file: "concept-img01.jpg",
                reverse: false,
              },
              {
                title: "効率的に、利便性を追求して",
                desc: "目黒駅から徒歩4分の好立地で、平日は17:30まで診療。仕事や学校帰りにも通いやすい環境を整えています。\n\nWEB予約システム、オンライン診療にも対応し、お忙しい方でも無理なく受診いただけます。待ち時間の軽減にも取り組み、効率的でスムーズな診療を心がけています。",
                file: "concept-img02.jpg",
                reverse: true,
              },
              {
                title: "家でも学校でも会社でもない、新たな居場所として",
                desc: "清潔感のある落ち着いた院内で、リラックスしてお過ごしいただけます。プライバシーに配慮した空間設計で、デリケートなご相談も安心してお話しください。\n\n女性特有の悩みは、なかなか人に相談しづらいもの。当院が、そんな悩みを気軽に相談できる「第三の居場所」となれれば幸いです。",
                file: "concept-img03.jpg",
                reverse: false,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className={`flex flex-col ${feature.reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="bg-gray-200 aspect-[3/2] rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-muted-foreground font-medium">【画像】</span>
                    <span className="text-muted-foreground text-sm">{feature.file}</span>
                    <span className="text-xs text-gray-400 mt-1">推奨: 600x400px</span>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】設備紹介セクション（10枚）
        - 推奨サイズ: 400x300px
        - ファイル名: facility-01.jpg ~ facility-10.jpg
        - 内容: 受付、待合室、診察室、内診室、レーザー機器、トイレ等
        ============================================
      */}
      {/* Facility Section */}
      <section id="facility" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">設備紹介</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {[
              { name: "受付・待合", file: "facility-01.jpg" },
              { name: "診察室", file: "facility-02.jpg" },
              { name: "内診室", file: "facility-03.jpg" },
              { name: "超音波検査室", file: "facility-04.jpg" },
              { name: "レーザー治療室", file: "facility-05.jpg" },
              { name: "処置室", file: "facility-06.jpg" },
              { name: "パウダールーム", file: "facility-07.jpg" },
              { name: "トイレ", file: "facility-08.jpg" },
              { name: "キッズスペース", file: "facility-09.jpg" },
              { name: "院内風景", file: "facility-10.jpg" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                <div className="bg-gray-200 aspect-[4/3] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                  <span className="text-[10px] text-gray-500">【画像】</span>
                  <span className="text-[9px] text-gray-400">{item.file}</span>
                </div>
                <div className="p-2 text-center">
                  <span className="text-xs font-medium">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】院長写真
        - 推奨サイズ: 400x500px
        - ファイル名: doctor-director.jpg
        - 内容: 院長の顔写真（白衣姿推奨）
        ============================================
      */}
      {/* Director Message Section */}
      <section id="message" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">院長メッセージ</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl aspect-[4/5] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-muted-foreground font-medium">【画像】</span>
              <span className="text-muted-foreground text-sm">doctor-director.jpg</span>
              <span className="text-xs text-gray-400 mt-1">推奨: 400x500px</span>
            </div>
            <div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary">叶谷 愛弓</p>
                <p className="text-sm text-muted-foreground mb-4">院長</p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">日本産科婦人科学会専門医</span>
                  <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">医学博士</span>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  レディースクリニック ぷかぷかのホームページをご覧いただき、ありがとうございます。
                </p>
                <p>
                  当院は「女性のなみを理解して」をコンセプトに、女性特有の心身の波（なみ）に寄り添った医療を提供したいという想いから開院いたしました。
                </p>
                <p>
                  月経のリズム、妊娠・出産、更年期など、女性の体は一生を通じて様々な変化を経験します。そんな女性の皆様のかかりつけ医として、どんなことでもご相談いただける存在でありたいと考えています。
                </p>
                <p>
                  小さな不安も、気軽にお話しください。一緒に解決策を見つけていきましょう。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】当院の取り組みセクション（4枚）
        - 推奨サイズ: 300x200px
        - ファイル名: initiative-01.jpg ~ initiative-04.jpg
        - 内容: 各取り組みを表す写真やイラスト
        ============================================
      */}
      {/* Initiatives Section */}
      <section id="initiatives" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">当院の取り組み</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "プライバシー配慮", desc: "完全予約制でお待たせしない診療。個室対応で安心。", file: "initiative-01.jpg" },
              { title: "丁寧な説明", desc: "わかりやすい言葉で、納得いただけるまでご説明します。", file: "initiative-02.jpg" },
              { title: "最新の医療機器", desc: "精度の高い検査と、負担の少ない治療を提供します。", file: "initiative-03.jpg" },
              { title: "清潔な院内環境", desc: "感染対策を徹底し、安心してご来院いただけます。", file: "initiative-04.jpg" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="bg-gray-200 aspect-[3/2] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                  <span className="text-[10px] text-gray-500">【画像】</span>
                  <span className="text-[9px] text-gray-400">{item.file}</span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Online Consultation Section */}
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
                  <h3 className="font-bold text-primary mb-3">こんな方におすすめ</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>・忙しくて来院が難しい方</li>
                    <li>・定期的な処方の継続が必要な方</li>
                    <li>・ピルの処方をご希望の方</li>
                    <li>・まずは相談だけしたい方</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h3 className="font-bold text-primary mb-3">対応可能な診療</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>・低用量ピル・アフターピルの処方</li>
                    <li>・月経に関するご相談</li>
                    <li>・更年期症状のご相談</li>
                    <li>・その他婦人科全般のご相談</li>
                  </ul>
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

      {/* Access Section */}
      <section id="access" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">アクセス</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold text-lg mb-2">レディースクリニック ぷかぷか</p>
                  <p className="text-muted-foreground text-sm">
                    〒153-0063<br />
                    東京都目黒区目黒1丁目6−17<br />
                    Daiwa目黒スクエア 1階
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-6">
                <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <p className="font-bold mb-2">診療時間</p>
                  <p className="text-sm text-muted-foreground">
                    午前 9:00〜12:30<br />
                    午後 14:20〜17:30<br />
                    <span className="text-xs">※土曜は午前のみ / 日祝休診</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0" />
                <div>
                  <p className="font-bold text-xl text-primary">03-5747-9330</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-200 rounded-2xl h-[300px] overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3242.0!2d139.7!3d35.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDM4JzAwLjAiTiAxMznCsDQyJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1600000000000!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="レディースクリニック ぷかぷか"
              />
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/access"
              className="inline-block border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors"
            >
              詳しいアクセス・道のり案内
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
