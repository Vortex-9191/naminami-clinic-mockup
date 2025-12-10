import Link from "next/link"

export function MapSection() {
  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-primary text-center mb-8">アクセス</h2>

        <div className="max-w-4xl mx-auto">
          {/* Map Embed */}
          <div className="bg-gray-200 aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden mb-6 border-2 border-dashed border-gray-300 flex items-center justify-center">
            {/*
              Google Maps埋め込み
              実際の実装では以下のようなiframeを使用:
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            */}
            <div className="text-center text-gray-500">
              <p className="text-sm mb-2">【Google Maps埋め込み】</p>
              <p className="text-xs">東京都目黒区目黒1丁目6-17 Daiwa目黒スクエア 1階</p>
            </div>
          </div>

          {/* Clinic Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-primary mb-3">レディースクリニック ぷかぷか</h3>
                <dl className="space-y-2 text-sm">
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground w-16 flex-shrink-0">住所</dt>
                    <dd>東京都目黒区目黒1丁目6-17<br />Daiwa目黒スクエア 1階</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground w-16 flex-shrink-0">最寄駅</dt>
                    <dd>JR山手線・東京メトロ南北線<br />目黒駅 徒歩3分</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted-foreground w-16 flex-shrink-0">電話</dt>
                    <dd>
                      <a href="tel:03-5747-9330" className="text-primary hover:underline">03-5747-9330</a>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-3">診療時間</h4>
                <table className="text-sm w-full">
                  <tbody>
                    <tr>
                      <td className="text-muted-foreground py-1">月〜金</td>
                      <td className="py-1">9:00-13:00 / 14:20-19:20</td>
                    </tr>
                    <tr>
                      <td className="text-muted-foreground py-1">土・日</td>
                      <td className="py-1">9:00-13:00 / 14:20-17:00</td>
                    </tr>
                    <tr>
                      <td className="text-muted-foreground py-1">休診日</td>
                      <td className="py-1">祝日</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                href="/access"
                className="inline-block border-2 border-primary text-primary px-6 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-colors"
              >
                アクセス詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
