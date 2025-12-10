import Link from "next/link"

export default function DoctorsPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">医師紹介</h1>
          <p className="text-muted-foreground">当院の医師をご紹介します</p>
        </div>
      </div>

      {/*
        ============================================
        【画像】院長写真
        - 推奨サイズ: 400x500px
        - ファイル名: doctor-director.jpg
        - 内容: 院長の顔写真（白衣姿推奨）
        ============================================
      */}
      {/* Director Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="bg-gray-200 aspect-[4/5] md:aspect-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-muted-foreground font-medium">【画像】</span>
                  <span className="text-muted-foreground text-sm">doctor-director.jpg</span>
                  <span className="text-xs text-gray-400 mt-1">推奨: 400x500px</span>
                </div>
                <div className="p-8 md:p-10">
                  <div className="mb-6">
                    <span className="inline-block bg-primary text-white text-xs px-3 py-1 rounded-full mb-3">院長</span>
                    <h2 className="text-2xl font-bold text-primary mb-1">叶谷 愛弓</h2>
                    <p className="text-sm text-muted-foreground">かなたに あゆみ</p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">日本産科婦人科学会専門医</span>
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">医学博士</span>
                  </div>

                  <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                    <p>
                      レディースクリニック ぷかぷかのホームページをご覧いただき、ありがとうございます。
                    </p>
                    <p>
                      私はこれまで、こども病院や総合周産期センター、大学病院などで、ハイリスク妊娠・分娩管理、不妊治療、がん治療を担当してまいりました。
                    </p>
                    <p>
                      女性のからだは、女性ホルモンの影響を大きく受けながら、思春期から更年期まで様々な変化を経験します。そのような女性特有の「なみ」に寄り添い、皆様のかかりつけ医として、どんなことでもご相談いただける存在でありたいと考えています。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-primary text-center mb-8">経歴・資格</h2>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="font-bold text-primary mb-4">経歴</h3>
              <div className="space-y-3 text-sm mb-8">
                {[
                  { year: "○○年", content: "○○大学医学部 卒業" },
                  { year: "○○年", content: "○○大学病院 産婦人科 入局" },
                  { year: "○○年", content: "○○こども病院 産婦人科" },
                  { year: "○○年", content: "○○総合周産期センター" },
                  { year: "○○年", content: "○○大学病院 産婦人科 助教" },
                  { year: "2024年", content: "レディースクリニック ぷかぷか 開院" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 text-muted-foreground">
                    <span className="font-medium w-16 shrink-0">{item.year}</span>
                    <span>{item.content}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-bold text-primary mb-4">資格・所属学会</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>・日本産科婦人科学会 専門医</li>
                <li>・医学博士</li>
                <li>・日本産科婦人科学会</li>
                <li>・日本生殖医学会</li>
                <li>・日本女性医学学会</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-primary mb-8">患者様へのメッセージ</h2>

            <div className="bg-gradient-to-r from-primary/5 to-secondary/20 p-8 rounded-2xl">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                「女性のなみを理解して」
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                女性のからだは、月経のリズム、妊娠・出産、更年期など、一生を通じて様々な「なみ」を経験します。<br />
                時にその波は穏やかに、時に激しく。
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当院は、そんな女性特有の波に寄り添い、皆様が安心して相談できる場所でありたいと考えています。<br />
                小さな不安も、気軽にお話しください。一緒に解決策を見つけていきましょう。
              </p>
              <p className="text-primary font-bold">
                スタッフ一同、皆様のご来院をお待ちしております。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <p className="text-muted-foreground mb-6">
            お気軽にご相談ください
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <Link
              href="/visitor"
              className="flex-1 bg-white border-2 border-primary text-primary py-4 px-6 rounded-xl text-center font-bold hover:bg-primary hover:text-white transition-colors"
            >
              はじめての方へ
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

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
