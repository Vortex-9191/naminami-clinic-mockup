import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "一般産婦人科｜月経トラブル・避妊相談・子宮がん検診｜レディースクリニック ぷかぷか",
  description: "一般産婦人科診療（月経関連トラブル・避妊相談・子宮頸がん検診・妊娠判定）のご案内。目黒駅徒歩3分のレディースクリニック ぷかぷかでは、女性のあらゆる健康上のお悩みに対応しています。",
  keywords: "一般産婦人科, 婦人科, 月経不順, 生理痛, 避妊, ピル, 子宮がん検診, 妊娠検査, 目黒, レディースクリニック",
}

export default function GeneralGynecologyPage() {
  const treatments = [
    {
      id: "menstrual",
      title: "月経関連トラブル",
      subtitle: "生理痛・月経不順・PMS",
      description: "月経痛（生理痛）、月経不順、月経過多、PMS（月経前症候群）など、月経に関するさまざまなお悩みに対応しています。低用量ピルやホルモン療法など、症状に合わせた治療をご提案します。",
      items: [
        { name: "月経困難症", desc: "強い生理痛、吐き気、頭痛など" },
        { name: "月経不順", desc: "周期の乱れ、無月経" },
        { name: "月経過多", desc: "出血量が多い、貧血" },
        { name: "PMS/PMDD", desc: "月経前のイライラ、落ち込み" },
      ],
      link: "/treatment/general/menstrual",
    },
    {
      id: "contraception",
      title: "避妊相談・ピル処方",
      subtitle: "低用量ピル・アフターピル・IUD",
      description: "低用量ピル（OC/LEP）、アフターピル（緊急避妊）、子宮内避妊具（IUD/IUS）など、ライフスタイルに合わせた避妊法をご提案します。オンライン診療でのピル処方も可能です。",
      items: [
        { name: "低用量ピル", desc: "毎日服用する経口避妊薬" },
        { name: "アフターピル", desc: "緊急避妊薬（72時間以内）" },
        { name: "ミレーナ", desc: "子宮内に装着する避妊具" },
        { name: "月経移動", desc: "旅行や大切な日に生理をずらす" },
      ],
      link: "/treatment/general/contraception",
    },
    {
      id: "cervical-cancer",
      title: "子宮頸がん検診",
      subtitle: "定期検診・HPV検査",
      description: "子宮頸がんは早期発見・早期治療で治癒が期待できるがんです。定期的な検診とHPV検査で、子宮頸がんの予防・早期発見に努めましょう。目黒区の検診も受け付けています。",
      items: [
        { name: "子宮頸部細胞診", desc: "子宮頸部の細胞を採取して検査" },
        { name: "HPV検査", desc: "ヒトパピローマウイルスの感染を調べる" },
        { name: "コルポスコピー", desc: "拡大鏡で子宮頸部を詳しく観察" },
        { name: "HPVワクチン", desc: "子宮頸がんの予防接種" },
      ],
      link: "/treatment/general/cervical-cancer",
    },
    {
      id: "pregnancy-test",
      title: "妊娠判定・妊婦健診",
      subtitle: "妊娠検査・初期健診",
      description: "妊娠の可能性がある方の妊娠判定、妊娠初期の健診を行っています。妊娠が確認できた場合は、分娩施設への紹介状を作成いたします。",
      items: [
        { name: "妊娠判定", desc: "尿検査・超音波検査で妊娠を確認" },
        { name: "妊娠初期健診", desc: "心拍確認、週数の確定" },
        { name: "分娩施設紹介", desc: "ご希望の病院への紹介状作成" },
        { name: "妊娠相談", desc: "予期せぬ妊娠のご相談" },
      ],
      link: "/treatment/general/pregnancy-test",
    },
  ]

  const otherServices = [
    { name: "更年期障害", desc: "ホットフラッシュ、不眠、イライラなど", link: "/treatment/general/menopause" },
    { name: "性感染症検査", desc: "クラミジア、淋菌、梅毒など", link: "/treatment/general/std" },
    { name: "ブライダルチェック", desc: "結婚・妊娠前の健康診断", link: "/treatment/general/bridal-check" },
    { name: "おりもの異常", desc: "かゆみ、においが気になる", link: "/treatment/general/discharge" },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header with SEO content */}
      <div className="bg-pink-50 py-12">
        <div className="container text-center">
          <p className="text-pink-600 text-sm font-medium mb-2">General Gynecology</p>
          <h1 className="text-3xl font-bold text-primary mb-4">一般産婦人科</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            月経トラブル・避妊相談・子宮がん検診など、<br className="hidden md:block" />
            女性のあらゆる健康上のお悩みに対応しています
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container py-3">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/treatment" className="hover:text-primary">診療内容</Link>
            <span className="mx-2">/</span>
            <span className="text-primary">一般産婦人科</span>
          </nav>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { label: "月経トラブル", href: "#menstrual" },
              { label: "避妊相談", href: "#contraception" },
              { label: "子宮がん検診", href: "#cervical-cancer" },
              { label: "妊娠判定", href: "#pregnancy-test" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 text-xs rounded-full border border-pink-200 text-pink-700 hover:bg-pink-50 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-primary mb-4">一般産婦人科について</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              一般産婦人科では、<strong>月経に関するトラブル</strong>、<strong>避妊相談</strong>、
              <strong>子宮頸がん検診</strong>、<strong>妊娠判定</strong>など、
              女性特有の健康上のお悩みに幅広く対応しています。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              「こんなことで受診していいのかな？」と思うような小さなお悩みでも、
              お気軽にご相談ください。女性医師による診察も可能です。
            </p>
          </div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-16 bg-secondary/30">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">診療内容</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {treatments.map((treatment) => (
              <div
                key={treatment.id}
                id={treatment.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden scroll-mt-32"
              >
                <div className="border-l-4 border-pink-500 p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-primary">{treatment.title}</h3>
                    <span className="text-xs text-pink-600 bg-pink-50 px-3 py-1 rounded-full">
                      {treatment.subtitle}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-6">{treatment.description}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {treatment.items.map((item, i) => (
                      <div key={i} className="bg-pink-50/50 p-3 rounded-lg">
                        <h4 className="font-bold text-sm text-pink-700">{item.name}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={treatment.link}
                    className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                  >
                    詳しく見る <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 bg-white">
        <div className="container">
          <h2 className="text-xl font-bold text-primary text-center mb-8">その他の診療</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {otherServices.map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="bg-gray-50 p-4 rounded-xl hover:bg-pink-50 transition-colors group"
              >
                <h3 className="font-bold text-sm text-primary group-hover:text-pink-600">{service.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Online Info */}
      <section className="py-12 bg-pink-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bold text-primary mb-4">オンライン診療について</h3>
            <p className="text-sm text-muted-foreground mb-6">
              低用量ピルの処方、月経移動のご相談など、一部の診療はオンラインでも対応可能です。<br />
              ご自宅から受診いただけます。
            </p>
            <Link
              href="/online"
              className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
            >
              オンライン診療について <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Fertility Link */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-secondary/30 rounded-xl p-6">
            <h3 className="font-bold text-primary mb-4">妊娠をお考えの方へ</h3>
            <p className="text-sm text-muted-foreground mb-4">
              「なかなか妊娠しない」「妊活を始めたい」という方は、不妊治療の相談も承っています。
              まずは検査から始めてみませんか？
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/general-fertility"
                className="inline-flex items-center gap-1 text-sm text-blue-600 font-medium hover:underline"
              >
                一般不妊治療 <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/advanced-fertility"
                className="inline-flex items-center gap-1 text-sm text-purple-600 font-medium hover:underline"
              >
                高度不妊治療 <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <h2 className="text-xl font-bold text-primary mb-4">診療のご予約</h2>
          <p className="text-muted-foreground mb-8">
            お一人で悩まず、お気軽にご相談ください。<br />
            女性スタッフが丁寧に対応いたします。
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

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
