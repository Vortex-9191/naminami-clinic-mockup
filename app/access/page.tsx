import { MapPin, Phone, Clock, Train, AlertCircle } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">アクセス・診療時間</h1>
          <p className="text-muted-foreground">当院へのアクセス方法をご案内します</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "診療時間", href: "#hours" },
              { label: "アクセス", href: "#access" },
              { label: "道のり案内", href: "#directions" },
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
        【画像】診療時間表
        - 推奨サイズ: 800x400px（PC用）、400x600px（SP用）
        - ファイル名: time.png, time-sp.png
        - 内容: 診療時間の表画像
        ============================================
      */}
      {/* Hours Section */}
      <section id="hours" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">診療時間</h2>

          <div className="max-w-3xl mx-auto">
            {/* Time Table Image */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-8">
              {/* Desktop version */}
              <div className="hidden md:block">
                <div className="bg-gray-200 rounded-xl h-[200px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                  <span className="text-muted-foreground font-medium">【画像】</span>
                  <span className="text-muted-foreground text-sm">time.png（PC用診療時間表）</span>
                  <span className="text-xs text-gray-400 mt-1">推奨: 800x400px</span>
                </div>
              </div>
              {/* Mobile version */}
              <div className="md:hidden">
                <div className="bg-gray-200 rounded-xl h-[300px] flex flex-col items-center justify-center border-2 border-dashed border-gray-300 mb-6">
                  <span className="text-muted-foreground font-medium">【画像】</span>
                  <span className="text-muted-foreground text-sm">time-sp.png（SP用診療時間表）</span>
                  <span className="text-xs text-gray-400 mt-1">推奨: 400x600px</span>
                </div>
              </div>

              {/* Text table as backup/accessibility */}
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
              <p className="text-xs text-muted-foreground text-center">※ 休診日：土曜午後・日曜・祝日</p>
            </div>

            {/* Important Notes */}
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-xl">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-sm space-y-2">
                  <p className="font-bold text-amber-800">ご予約について</p>
                  <ul className="text-amber-700 space-y-1">
                    <li>・当院は原則予約制です</li>
                    <li>・ご予約は2週間前までにお取りいただくことをおすすめします</li>
                    <li>・予約なしでのご来院は対応が困難な場合がございます</li>
                    <li>・緊急の場合（アフターピル等）はLINEでご相談ください</li>
                  </ul>
                </div>
              </div>
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

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                クリニック情報
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-2">レディースクリニック ぷかぷか</p>
                  <p className="text-muted-foreground">
                    〒153-0063<br />
                    東京都目黒区目黒1丁目6−17<br />
                    Daiwa目黒スクエア 1階
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="font-bold text-xl text-primary">03-5747-9330</span>
                </div>

                <div className="border-t pt-4">
                  <p className="font-bold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    診療時間
                  </p>
                  <p className="text-sm text-muted-foreground">
                    午前 9:00〜12:30<br />
                    午後 14:20〜17:30<br />
                    <span className="text-xs">※土曜は午前のみ / 日祝休診</span>
                  </p>
                </div>

                <div className="border-t pt-4">
                  <p className="font-bold mb-2 flex items-center gap-2">
                    <Train className="w-5 h-5 text-primary" />
                    最寄駅
                  </p>
                  <p className="text-sm text-muted-foreground">
                    JR山手線・東京メトロ南北線・三田線・東急目黒線<br />
                    「目黒」駅 徒歩4分
                  </p>
                </div>
              </div>
            </div>

            <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-inner">
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

          {/* Nearby Areas */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-lg font-bold text-primary mb-4 text-center">周辺地域からのアクセス</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { area: "五反田", distance: "1.7km" },
                { area: "中目黒", distance: "1.8km" },
                { area: "恵比寿", distance: "1.6km" },
              ].map((item) => (
                <div key={item.area} className="bg-white p-4 rounded-lg shadow-sm text-center">
                  <p className="font-bold">{item.area}</p>
                  <p className="text-sm text-muted-foreground">約{item.distance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】道のり案内（各6枚×2ルート = 12枚）
        - 推奨サイズ: 400x300px
        - ファイル名:
          - JR山手線: access01-1.jpg ~ access01-6.jpg
          - 東京メトロ: access02-1.jpg ~ access02-6.jpg
        - 内容: 各ステップの道案内写真
        ============================================
      */}
      {/* Directions Section */}
      <section id="directions" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">道のり案内</h2>

          <div className="space-y-16 max-w-5xl mx-auto">
            {/* JR Route */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <span className="bg-green-500 text-white px-3 py-1 rounded text-sm">JR</span>
                山手線 目黒駅からお越しの方
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: 1, desc: "西口を出て右へ" },
                  { step: 2, desc: "目黒通りを直進" },
                  { step: 3, desc: "信号を渡る" },
                  { step: 4, desc: "左手にビルが見える" },
                  { step: 5, desc: "ビル入口へ" },
                  { step: 6, desc: "1階がクリニック" },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-200 aspect-[4/3] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                      <span className="text-[10px] text-gray-500">【画像】</span>
                      <span className="text-[9px] text-gray-400">access01-{item.step}.jpg</span>
                    </div>
                    <div className="p-3">
                      <span className="text-xs font-bold text-primary block mb-1">STEP {item.step}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metro Route */}
            <div>
              <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded text-sm">Metro</span>
                東京メトロ南北線 目黒駅からお越しの方
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                  { step: 1, desc: "正面改札を出る" },
                  { step: 2, desc: "地上出口へ" },
                  { step: 3, desc: "右手に進む" },
                  { step: 4, desc: "交差点を渡る" },
                  { step: 5, desc: "直進" },
                  { step: 6, desc: "到着" },
                ].map((item) => (
                  <div key={item.step} className="bg-white rounded-lg overflow-hidden shadow-sm">
                    <div className="bg-gray-200 aspect-[4/3] flex flex-col items-center justify-center border-b-2 border-dashed border-gray-300">
                      <span className="text-[10px] text-gray-500">【画像】</span>
                      <span className="text-[9px] text-gray-400">access02-{item.step}.jpg</span>
                    </div>
                    <div className="p-3">
                      <span className="text-xs font-bold text-primary block mb-1">STEP {item.step}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                  </div>
                ))}
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
