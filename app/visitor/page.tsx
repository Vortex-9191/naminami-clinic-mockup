import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, MapPin, CreditCard, Phone } from "lucide-react"

export default function VisitorPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">はじめての方へ</h1>
          <p className="text-muted-foreground">初めてご来院される方へのご案内です</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "なみなみの特徴", href: "#features" },
              { label: "院長メッセージ", href: "#message" },
              { label: "診療時間", href: "#hours" },
              { label: "アクセス", href: "#access" },
              { label: "道のり案内", href: "#directions" },
              { label: "お支払い方法", href: "#payment" },
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
        【画像】なみなみの特徴セクション（3枚）
        - 推奨サイズ: 400x300px
        - ファイル名: concept-img01.jpg, concept-img02.jpg, concept-img03.jpg
        - 内容: クリニックの特徴を表す写真
        ============================================
      */}
      {/* Features Section */}
      <section id="features" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">なみなみの特徴</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "全ての世代の女性のかかりつけ医に",
                desc: "思春期から更年期まで、女性のライフステージに合わせた診療を提供します。産婦人科・婦人科・女性泌尿器科・内科と幅広く対応しています。",
                file: "concept-img01.jpg",
              },
              {
                title: "効率的に、利便性を追求して",
                desc: "目黒駅から徒歩4分の好立地。平日は17:30まで診療しており、お仕事帰りにも通いやすい環境です。オンライン診療にも対応しています。",
                file: "concept-img02.jpg",
              },
              {
                title: "新たな居場所として",
                desc: "清潔感のある院内で、リラックスしてお過ごしいただけます。プライバシーに配慮した空間で、安心してご相談ください。",
                file: "concept-img03.jpg",
              },
            ].map((feature, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="bg-gray-200 aspect-[4/3] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                  <span className="text-muted-foreground text-xs">【画像】</span>
                  <span className="text-muted-foreground text-xs">{feature.file}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
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
        - ファイル名: message-img.jpg
        - 内容: 院長の顔写真（白衣姿推奨）
        ============================================
      */}
      {/* Director Message Section */}
      <section id="message" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">院長メッセージ</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
            <div className="bg-gray-200 rounded-2xl aspect-[4/5] flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
              <span className="text-muted-foreground font-medium">【画像】</span>
              <span className="text-muted-foreground text-sm">message-img.jpg</span>
              <span className="text-xs text-gray-400 mt-1">推奨: 400x500px</span>
            </div>
            <div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary">叶谷 愛弓</p>
                <p className="text-sm text-muted-foreground">産婦人科専門医 / 医学博士</p>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  レディースクリニック なみなみのホームページをご覧いただき、ありがとうございます。
                </p>
                <p>
                  当院は「女性のなみを理解して」をコンセプトに、女性特有の心身の波（なみ）に寄り添った医療を提供したいという想いから開院いたしました。
                </p>
                <p>
                  月経のリズム、妊娠・出産、更年期など、女性の体は一生を通じて様々な変化を経験します。そんな女性の皆様のかかりつけ医として、どんなことでもご相談いただける存在でありたいと考えています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】診療時間表
        - 推奨サイズ: 800x400px
        - ファイル名: time.png
        - 内容: 診療時間の表画像
        ============================================
      */}
      {/* Hours Section */}
      <section id="hours" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">診療時間</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
              <div className="bg-gray-200 rounded-xl h-[200px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                <span className="text-muted-foreground font-medium">【画像】</span>
                <span className="text-muted-foreground text-sm">time.png（診療時間表）</span>
              </div>

              <table className="w-full text-center text-sm mb-4">
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
              <p className="text-xs text-muted-foreground">※ 休診日：土曜午後・日曜・祝日</p>
            </div>

            <div className="bg-primary/5 p-6 rounded-xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                ご予約は、LINE・WEB・お電話にて承っております。<br />
                初診の方は、ご予約時間の10分前にお越しください。
              </p>
            </div>
          </div>
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

      {/* Access Section */}
      <section id="access" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">アクセス</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
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
                <p className="font-bold text-xl text-primary">03-5747-9330</p>
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
                title="レディースクリニック なみなみ"
              />
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】道のり案内（各6枚×2ルート = 12枚）
        - 推奨サイズ: 300x200px
        - ファイル名:
          - JR山手線: direction-jr-01.jpg ~ direction-jr-06.jpg
          - 東京メトロ: direction-metro-01.jpg ~ direction-metro-06.jpg
        - 内容: 各ステップの写真
        ============================================
      */}
      {/* Directions Section */}
      <section id="directions" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">道のり案内</h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {/* JR Route */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">JR</span>
                山手線 目黒駅からお越しの方
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div key={step} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-200 aspect-[3/2] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                      <span className="text-[10px] text-gray-500">【画像】</span>
                      <span className="text-[9px] text-gray-400">direction-jr-0{step}.jpg</span>
                    </div>
                    <div className="p-2 text-center">
                      <span className="text-xs font-bold text-primary">STEP {step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metro Route */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Metro</span>
                東京メトロ南北線からお越しの方
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <div key={step} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-200 aspect-[3/2] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                      <span className="text-[10px] text-gray-500">【画像】</span>
                      <span className="text-[9px] text-gray-400">direction-metro-0{step}.jpg</span>
                    </div>
                    <div className="p-2 text-center">
                      <span className="text-xs font-bold text-primary">STEP {step}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">お支払い方法</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="w-8 h-8 text-primary" />
                <p className="font-bold text-lg">以下のお支払い方法に対応しています</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-bold mb-2">現金</p>
                  <p className="text-sm text-muted-foreground">日本円のみ</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-bold mb-2">クレジットカード</p>
                  <p className="text-sm text-muted-foreground">VISA / Master / JCB / AMEX</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <p className="font-bold mb-2">電子マネー</p>
                  <p className="text-sm text-muted-foreground">交通系IC / iD / QUICPay</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
