import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = [
    {
      title: "クリニックについて",
      titleHref: null,
      links: [
        { label: "当院の特徴", href: "/feature" },
        { label: "医師紹介", href: "/doctors" },
        { label: "治療実績", href: "/result" },
        { label: "はじめての方へ", href: "/visitor" },
        { label: "通院中の方へ", href: "/patient" },
        { label: "アクセス・診療時間", href: "/access" },
        { label: "料金について", href: "/price" },
        { label: "よくある質問", href: "/faq" },
      ],
    },
    {
      title: "一般産婦人科",
      titleHref: "/general-gynecology",
      links: [
        { label: "月経関連トラブル", href: "/treatment/general/menstrual" },
        { label: "避妊相談・ピル処方", href: "/treatment/general/contraception" },
        { label: "子宮頸がん検診", href: "/treatment/general/cervical-cancer" },
        { label: "妊娠判定", href: "/treatment/general/pregnancy-test" },
      ],
    },
    {
      title: "一般不妊治療",
      titleHref: "/general-fertility",
      links: [
        { label: "タイミング療法", href: "/treatment/fertility/timing" },
        { label: "人工授精", href: "/treatment/fertility/iui" },
        { label: "原因不明不妊症", href: "/treatment/fertility/unexplained" },
        { label: "不妊治療のステップ", href: "/knowledge" },
      ],
    },
    {
      title: "高度不妊治療",
      titleHref: "/advanced-fertility",
      links: [
        { label: "体外受精", href: "/treatment/advanced-fertility/ivf" },
        { label: "顕微授精", href: "/treatment/advanced-fertility/icsi" },
        { label: "卵子凍結", href: "/treatment/advanced-fertility/egg-freezing" },
        { label: "胚凍結", href: "/treatment/advanced-fertility/embryo-freezing" },
        { label: "着床前診断", href: "/treatment/advanced-fertility/pgt" },
      ],
    },
    {
      title: "各種検査",
      titleHref: "/test",
      links: [
        { label: "女性プレコンセプションチェック", href: "/test/preconception-female" },
        { label: "男性プレコンセプションチェック", href: "/test/preconception-male" },
        { label: "AMH検査", href: "/test/amh" },
        { label: "精液検査", href: "/test/semen" },
        { label: "子宮卵管造影検査", href: "/test/hsg" },
        { label: "ホルモン検査", href: "/test/hormone" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-800 text-white pb-24 md:pb-28">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold tracking-tight">レディースクリニック ぷかぷか</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              〒153-0063<br />
              東京都目黒区目黒1-1-1<br />
              目黒駅 西口より徒歩4分
            </p>
            <div className="text-sm text-gray-400 mb-4">
              <p className="font-bold text-white text-lg">TEL: 03-5747-9330</p>
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://line.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#06C755] flex items-center justify-center hover:opacity-80 transition-opacity">
                <span className="text-xs font-bold">LINE</span>
              </a>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              {group.titleHref ? (
                <Link href={group.titleHref} className="font-semibold mb-4 block hover:text-gray-300 transition-colors">
                  {group.title}
                </Link>
              ) : (
                <h3 className="font-semibold mb-4">{group.title}</h3>
              )}
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <Link href="/recruit" className="hover:text-white transition-colors">求人情報</Link>
            <Link href="/privacy_policy" className="hover:text-white transition-colors">プライバシーポリシー</Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">サイトマップ</Link>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} レディースクリニック ぷかぷか All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
