import { CreditCard, Banknote, Smartphone } from "lucide-react"
import Link from "next/link"

export default function PricePage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">料金について</h1>
          <p className="text-muted-foreground">当院の診療料金のご案内</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "お支払い方法", href: "#payment" },
              { label: "診療費用", href: "#consultation" },
              { label: "妊婦健診", href: "#prenatal" },
              { label: "出生前検査", href: "#prenatal-test" },
              { label: "避妊・ピル", href: "#contraception" },
              { label: "レーザー治療", href: "#laser" },
              { label: "ワクチン", href: "#vaccine" },
              { label: "健診・検査", href: "#checkup" },
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

      {/* Payment Methods */}
      <section id="payment" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">お支払い方法</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Banknote className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">現金</h3>
              <p className="text-sm text-muted-foreground">自動精算機対応</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <CreditCard className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">クレジットカード</h3>
              <p className="text-sm text-muted-foreground">VISA / Master / JCB / AMEX</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
              <Smartphone className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">電子マネー</h3>
              <p className="text-sm text-muted-foreground">交通系IC / iD / QUICPay</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Fee */}
      <section id="consultation" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">診療費用</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="text-left p-4 font-bold">項目</th>
                    <th className="text-right p-4 font-bold">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">保険初診料</td>
                    <td className="p-4 text-right">約¥3,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">保険再診料</td>
                    <td className="p-4 text-right">¥800</td>
                  </tr>
                  <tr>
                    <td className="p-4">自費初診料</td>
                    <td className="p-4 text-right">¥3,300</td>
                  </tr>
                  <tr>
                    <td className="p-4">自費再診料</td>
                    <td className="p-4 text-right">¥2,200</td>
                  </tr>
                  <tr>
                    <td className="p-4">オンライン診療</td>
                    <td className="p-4 text-right">約¥2,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Prenatal Care */}
      <section id="prenatal" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">妊婦健診</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-pink-700">項目</th>
                    <th className="text-right p-4 font-bold text-pink-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">妊婦健診（初回）</td>
                    <td className="p-4 text-right">¥10,000〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">妊婦健診（2回目以降）</td>
                    <td className="p-4 text-right">¥5,000〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">妊娠判定</td>
                    <td className="p-4 text-right">¥3,000〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">3D/4D超音波</td>
                    <td className="p-4 text-right">¥5,500</td>
                  </tr>
                  <tr>
                    <td className="p-4">助産師指導</td>
                    <td className="p-4 text-right">¥3,300</td>
                  </tr>
                  <tr>
                    <td className="p-4">栄養指導</td>
                    <td className="p-4 text-right">¥3,300</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              ※東京都の妊婦健康診査受診票（クーポン券）をご利用いただけます
            </p>
          </div>
        </div>
      </section>

      {/* Prenatal Testing */}
      <section id="prenatal-test" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">出生前検査</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-pink-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-pink-700">項目</th>
                    <th className="text-right p-4 font-bold text-pink-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">遺伝カウンセリング</td>
                    <td className="p-4 text-right">¥10,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">FMFコンバインド検査</td>
                    <td className="p-4 text-right">¥35,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">NIPT（基本検査）</td>
                    <td className="p-4 text-right">¥99,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">NIPT（全染色体検査）</td>
                    <td className="p-4 text-right">¥119,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">初期胎児精密超音波</td>
                    <td className="p-4 text-right">¥22,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Contraception */}
      <section id="contraception" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">避妊・ピル</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-purple-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-purple-700">項目</th>
                    <th className="text-right p-4 font-bold text-purple-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">緊急避妊薬（アフターピル）</td>
                    <td className="p-4 text-right">¥9,900〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">月経移動</td>
                    <td className="p-4 text-right">¥3,300</td>
                  </tr>
                  <tr>
                    <td className="p-4">低用量ピル（1シート）</td>
                    <td className="p-4 text-right">¥2,500〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">低用量ピル（3シート）</td>
                    <td className="p-4 text-right">¥7,000〜</td>
                  </tr>
                  <tr>
                    <td className="p-4">ミレーナ挿入</td>
                    <td className="p-4 text-right">¥55,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">ミレーナ抜去</td>
                    <td className="p-4 text-right">¥11,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Laser Treatment */}
      <section id="laser" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">インティマレーザー</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-blue-700">項目</th>
                    <th className="text-right p-4 font-bold text-blue-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">尿失禁治療（1回）</td>
                    <td className="p-4 text-right">¥88,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">GSM治療（1回）</td>
                    <td className="p-4 text-right">¥88,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">性交痛治療（1回）</td>
                    <td className="p-4 text-right">¥88,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">腟引き締め（1回）</td>
                    <td className="p-4 text-right">¥88,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">外陰部ホワイトニング</td>
                    <td className="p-4 text-right">¥33,000〜</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine */}
      <section id="vaccine" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">ワクチン・予防接種</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-orange-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-orange-700">項目</th>
                    <th className="text-right p-4 font-bold text-orange-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">子宮頸がんワクチン（シルガード9）</td>
                    <td className="p-4 text-right">¥33,000/回</td>
                  </tr>
                  <tr>
                    <td className="p-4">MRワクチン</td>
                    <td className="p-4 text-right">¥11,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">風疹ワクチン</td>
                    <td className="p-4 text-right">¥6,600</td>
                  </tr>
                  <tr>
                    <td className="p-4">インフルエンザワクチン</td>
                    <td className="p-4 text-right">¥4,400</td>
                  </tr>
                  <tr>
                    <td className="p-4">帯状疱疹ワクチン</td>
                    <td className="p-4 text-right">¥22,000/回</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Checkup */}
      <section id="checkup" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">健診・検査</h2>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-green-50">
                  <tr>
                    <th className="text-left p-4 font-bold text-green-700">項目</th>
                    <th className="text-right p-4 font-bold text-green-700">料金（税込）</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4">プレコンセプションチェック</td>
                    <td className="p-4 text-right">¥22,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">レディースドック</td>
                    <td className="p-4 text-right">¥33,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">更年期ドック</td>
                    <td className="p-4 text-right">¥22,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">性病チェック（基本）</td>
                    <td className="p-4 text-right">¥11,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">性病チェック（フル）</td>
                    <td className="p-4 text-right">¥22,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">子宮頸がん検診</td>
                    <td className="p-4 text-right">¥5,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-xl">
            <h3 className="font-bold text-primary mb-4">ご注意事項</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>・上記料金は目安です。診察内容により変動する場合があります。</li>
              <li>・保険診療の場合は、別途保険負担分がかかります。</li>
              <li>・詳しい料金についてはお気軽にお問い合わせください。</li>
            </ul>
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

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
