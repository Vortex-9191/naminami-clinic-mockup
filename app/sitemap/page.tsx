import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "サイトマップ｜レディースクリニック ぷかぷか",
  description: "レディースクリニック ぷかぷかのサイトマップ。各ページへのリンク一覧です。",
}

export default function SitemapPage() {
  const siteStructure = [
    {
      title: "クリニックについて",
      links: [
        { label: "トップページ", href: "/" },
        { label: "当院の特徴", href: "/feature" },
        { label: "医師紹介", href: "/doctors" },
        { label: "治療実績", href: "/result" },
        { label: "アクセス・診療時間", href: "/access" },
        { label: "料金について", href: "/price" },
        { label: "よくある質問・お問合せ", href: "/faq" },
        { label: "お知らせ", href: "/news" },
        { label: "コラム", href: "/column" },
      ],
    },
    {
      title: "はじめての方へ",
      links: [
        { label: "はじめての方へ", href: "/visitor" },
        { label: "通院中の方へ", href: "/patient" },
        { label: "不妊治療のステップ", href: "/knowledge" },
      ],
    },
    {
      title: "一般産婦人科",
      links: [
        { label: "一般産婦人科", href: "/general-gynecology" },
        { label: "月経関連トラブル", href: "/treatment/general/menstrual" },
        { label: "避妊相談・ピル処方", href: "/treatment/general/contraception" },
        { label: "子宮頸がん検診", href: "/treatment/general/cervical-cancer" },
        { label: "妊娠判定", href: "/treatment/general/pregnancy-test" },
      ],
    },
    {
      title: "一般不妊治療",
      links: [
        { label: "一般不妊治療", href: "/general-fertility" },
        { label: "タイミング療法", href: "/treatment/fertility/timing" },
        { label: "人工授精", href: "/treatment/fertility/iui" },
        { label: "原因不明不妊症", href: "/treatment/fertility/unexplained" },
      ],
    },
    {
      title: "高度不妊治療",
      links: [
        { label: "高度不妊治療", href: "/advanced-fertility" },
        { label: "体外受精", href: "/treatment/advanced-fertility/ivf" },
        { label: "顕微授精", href: "/treatment/advanced-fertility/icsi" },
        { label: "卵子凍結", href: "/treatment/advanced-fertility/egg-freezing" },
        { label: "精子凍結", href: "/treatment/advanced-fertility/sperm-freezing" },
        { label: "培養", href: "/treatment/advanced-fertility/culture" },
        { label: "胚凍結", href: "/treatment/advanced-fertility/embryo-freezing" },
        { label: "胚移植", href: "/treatment/advanced-fertility/embryo-transfer" },
        { label: "着床前診断", href: "/treatment/advanced-fertility/pgt" },
        { label: "先進医療について", href: "/treatment/advanced-fertility/advanced-medicine" },
      ],
    },
    {
      title: "各種検査",
      links: [
        { label: "各種検査", href: "/test" },
        { label: "女性プレコンセプションチェック", href: "/test/preconception-female" },
        { label: "男性プレコンセプションチェック", href: "/test/preconception-male" },
        { label: "AMH検査", href: "/test/amh" },
        { label: "精液検査", href: "/test/semen" },
        { label: "子宮卵管造影検査", href: "/test/hsg" },
        { label: "子宮内膜検査", href: "/test/endometrium" },
        { label: "超音波検査", href: "/test/ultrasound" },
        { label: "顕微鏡検査", href: "/test/microscopy" },
        { label: "ホルモン検査", href: "/test/hormone" },
        { label: "淋菌・クラミジア検査", href: "/test/infection" },
        { label: "ビタミン・ミネラル検査", href: "/test/vitamin" },
        { label: "不育症の検査", href: "/test/recurrent" },
      ],
    },
    {
      title: "その他",
      links: [
        { label: "求人情報", href: "/recruit" },
        { label: "プライバシーポリシー", href: "/privacy_policy" },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">サイトマップ</span>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-4">サイトマップ</h1>
          <p className="text-muted-foreground">当サイトのページ一覧です</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {siteStructure.map((section) => (
                <div key={section.title} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="font-bold text-primary text-lg mb-4 pb-2 border-b border-gray-100">
                    {section.title}
                  </h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-primary hover:underline transition-colors flex items-center gap-1"
                        >
                          <ChevronRight className="w-3 h-3" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
