import Link from "next/link"
import { Instagram } from "lucide-react"

export function Footer() {
  const footerLinks = [
    {
      title: "クリニックについて",
      links: [
        { label: "当院の特徴", href: "/about" },
        { label: "医師紹介", href: "/doctors" },
        { label: "はじめての方へ", href: "/visitor" },
        { label: "アクセス・診療時間", href: "/access" },
      ],
    },
    {
      title: "診療内容",
      links: [
        { label: "産科", href: "/treatment/obstetrics" },
        { label: "婦人科", href: "/treatment/gynecology" },
        { label: "女性泌尿器科", href: "/treatment/urology" },
        { label: "内科", href: "/treatment/internal" },
        { label: "健康診断・相談", href: "/treatment/checkup" },
      ],
    },
    {
      title: "コラム",
      links: [
        { label: "妊娠・出産", href: "/column?cat=pregnancy" },
        { label: "ピル", href: "/column?cat=pill" },
        { label: "更年期", href: "/column?cat=menopause" },
        { label: "婦人科疾患", href: "/column?cat=gynecology" },
      ],
    },
    {
      title: "その他",
      links: [
        { label: "お知らせ", href: "/news" },
        { label: "料金について", href: "/price" },
        { label: "よくある質問", href: "/faq" },
        { label: "お問い合わせ", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-800 text-white pb-24 md:pb-28">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-lg font-bold tracking-tight">レディースクリニック なみなみ</span>
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
              <h3 className="font-semibold mb-4">{group.title}</h3>
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
          <div className="flex flex-wrap gap-4 text-xs text-gray-400">
            <Link href="/privacy" className="hover:text-white">個人情報保護方針</Link>
            <Link href="/guidelines" className="hover:text-white">医療広告ガイドライン</Link>
            <Link href="/sitemap-page" className="hover:text-white">サイトマップ</Link>
          </div>
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} レディースクリニック なみなみ All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
