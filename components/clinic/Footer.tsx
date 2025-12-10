import Link from "next/link"

export function Footer() {
  const footerLinks = [
    {
      title: "クリニックについて",
      links: [
        { label: "当院の不妊治療", href: "/treatment" },
        { label: "治療成績", href: "/result" },
        { label: "院長挨拶", href: "/about" },
        { label: "アクセス", href: "/access" },
      ],
    },
    {
      title: "診療案内",
      links: [
        { label: "はじめての方へ", href: "/visitor" },
        { label: "通院中の方へ", href: "/patient" },
        { label: "不妊治療相談外来", href: "/consultation" },
      ],
    },
    {
      title: "費用について",
      links: [
        { label: "保険診療", href: "/insurance-covered-price" },
        { label: "自費診療", href: "/self-paid-price" },
        { label: "先進医療", href: "/advanced-medical-price" },
      ],
    },
    {
      title: "その他",
      links: [
        { label: "お知らせ", href: "/news" },
        { label: "コラム", href: "/column" },
        { label: "よくある質問", href: "/faq" },
        { label: "お問い合わせ", href: "/contact" },
      ],
    },
  ]

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
              </div>
              <span className="text-lg font-bold text-primary tracking-tight">なみなみレディースクリニック</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              〒141-0022<br />
              東京都品川区東五反田1-1-1<br />
              五反田駅徒歩1分
            </p>
            <div className="text-sm text-muted-foreground">
              <p>TEL: 03-1234-5678</p>
              <p>受付時間: 9:00 - 18:00 (日・祝休診)</p>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Naminami Ladies Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
