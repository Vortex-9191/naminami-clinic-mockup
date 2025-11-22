import Link from "next/link"

const regions = [
  {
    name: "関東",
    prefectures: [
      { name: "東京都", slug: "tokyo" },
      { name: "神奈川県", slug: "kanagawa" },
      { name: "埼玉県", slug: "saitama" },
      { name: "千葉県", slug: "chiba" },
      { name: "茨城県", slug: "ibaraki" },
      { name: "栃木県", slug: "tochigi" },
      { name: "群馬県", slug: "gunma" },
    ],
  },
  {
    name: "関西",
    prefectures: [
      { name: "大阪府", slug: "osaka" },
      { name: "兵庫県", slug: "hyogo" },
      { name: "京都府", slug: "kyoto" },
      { name: "奈良県", slug: "nara" },
      { name: "滋賀県", slug: "shiga" },
      { name: "和歌山県", slug: "wakayama" },
    ],
  },
  {
    name: "中部",
    prefectures: [
      { name: "愛知県", slug: "aichi" },
      { name: "静岡県", slug: "shizuoka" },
      { name: "岐阜県", slug: "gifu" },
      { name: "長野県", slug: "nagano" },
      { name: "新潟県", slug: "niigata" },
      { name: "富山県", slug: "toyama" },
      { name: "石川県", slug: "ishikawa" },
      { name: "福井県", slug: "fukui" },
      { name: "山梨県", slug: "yamanashi" },
    ],
  },
  {
    name: "九州・沖縄",
    prefectures: [
      { name: "福岡県", slug: "fukuoka" },
      { name: "熊本県", slug: "kumamoto" },
      { name: "鹿児島県", slug: "kagoshima" },
      { name: "長崎県", slug: "nagasaki" },
      { name: "大分県", slug: "oita" },
      { name: "宮崎県", slug: "miyazaki" },
      { name: "佐賀県", slug: "saga" },
      { name: "沖縄県", slug: "okinawa" },
    ],
  },
  {
    name: "北海道・東北",
    prefectures: [
      { name: "北海道", slug: "hokkaido" },
      { name: "宮城県", slug: "miyagi" },
      { name: "福島県", slug: "fukushima" },
      { name: "青森県", slug: "aomori" },
      { name: "岩手県", slug: "iwate" },
      { name: "秋田県", slug: "akita" },
      { name: "山形県", slug: "yamagata" },
    ],
  },
  {
    name: "中国・四国",
    prefectures: [
      { name: "広島県", slug: "hiroshima" },
      { name: "岡山県", slug: "okayama" },
      { name: "山口県", slug: "yamaguchi" },
      { name: "愛媛県", slug: "ehime" },
      { name: "香川県", slug: "kagawa" },
      { name: "徳島県", slug: "tokushima" },
      { name: "高知県", slug: "kochi" },
      { name: "鳥取県", slug: "tottori" },
      { name: "島根県", slug: "shimane" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">低用量ピル.com</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              低用量ピルのオンライン処方・クリニック検索サイト。<br />
              生理痛、避妊、肌荒れなど、女性のお悩みに寄り添うクリニックをご紹介します。
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">クリニックを探す</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/search" className="hover:text-primary transition-colors">条件から探す</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">エリアから探す</Link></li>
              <li><Link href="/stations" className="hover:text-primary transition-colors">駅から探す</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">コンテンツ</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about-pill" className="hover:text-primary transition-colors">ピルについて</Link></li>
              <li><Link href="/flow" className="hover:text-primary transition-colors">処方の流れ</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">よくある質問</Link></li>
              <li><Link href="/column" className="hover:text-primary transition-colors">コラム</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">ポリシー</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:text-primary transition-colors">利用規約</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/company" className="hover:text-primary transition-colors">運営会社</Link></li>
            </ul>
          </div>
        </div>

        {/* All Prefectures Section */}
        <div className="mt-8 pt-8 border-t border-primary/10">
          <div className="mb-6 flex items-center justify-between">
            <h4 className="text-sm font-semibold text-foreground">都道府県・市区町村から探す</h4>
            <Link
              href="/areas"
              className="text-xs text-primary hover:underline"
            >
              すべて見る →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <div key={region.name}>
                <h5 className="mb-2 text-xs font-semibold text-foreground">{region.name}</h5>
                <div className="flex flex-wrap gap-x-3 gap-y-1">
                  {region.prefectures.map((prefecture) => (
                    <Link
                      key={prefecture.slug}
                      href={`/areas/${prefecture.slug}`}
                      className="text-xs text-muted-foreground hover:text-primary hover:underline"
                    >
                      {prefecture.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} 低用量ピル.com All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
