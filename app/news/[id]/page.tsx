import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"

// サンプルデータ（実際はCMS等から取得）
const newsData = [
  {
    id: 1,
    date: "2024.12.01",
    title: "年末年始の診療について",
    cat: "お知らせ",
    important: true,
    content: `いつも当院をご利用いただき、誠にありがとうございます。

年末年始の診療日程についてお知らせいたします。

【休診日】
12月29日（日）〜 1月3日（金）

【年内最終診療日】
12月28日（土）通常診療

【年始診療開始日】
1月4日（土）より通常診療

※休診期間中のお問い合わせは、1月4日以降に順次対応させていただきます。
※緊急の場合は、最寄りの救急医療機関をご利用ください。

ご不便をおかけいたしますが、何卒ご理解のほどよろしくお願い申し上げます。`,
  },
  {
    id: 2,
    date: "2024.11.20",
    title: "12月の不妊治療説明会の日程が決まりました",
    cat: "イベント",
    important: false,
    content: `12月の不妊治療説明会の日程が決定いたしましたのでお知らせいたします。

【日時】
2024年12月14日（土）14:00〜15:30

【場所】
当院 2階 セミナールーム

【内容】
・不妊治療の基礎知識
・当院の治療方針について
・体外受精・顕微授精の流れ
・費用と助成金について
・質疑応答

【定員】
10組（先着順・ご夫婦での参加推奨）

【参加費】
無料

【お申し込み方法】
お電話またはWEB予約システムよりお申し込みください。

皆様のご参加をお待ちしております。`,
  },
  {
    id: 3,
    date: "2024.11.15",
    title: "採卵当日の持ち物が変更になりました",
    cat: "お知らせ",
    important: false,
    content: `採卵当日にお持ちいただくものについて、一部変更がございますのでお知らせいたします。

【変更点】
これまでお願いしておりました「ナプキン」につきまして、当院にてご用意することとなりました。

【採卵当日の持ち物】
・診察券
・保険証
・同意書（事前にお渡ししたもの）
・楽な服装（ワンピースまたはゆったりした服）
・替えの下着

【ご注意】
・当日は絶飲食でお越しください
・お化粧・マニキュアはお控えください
・貴金属類は外してお越しください

ご不明な点がございましたら、お気軽にスタッフまでお問い合わせください。`,
  },
  {
    id: 4,
    date: "2024.11.01",
    title: "外来担当医の変更について",
    cat: "お知らせ",
    important: false,
    content: `11月より外来担当医のスケジュールが一部変更となりますのでお知らせいたします。

【変更内容】
毎週水曜日午後の担当医
変更前：岩﨑医師
変更後：佐竹医師

【変更開始日】
2024年11月6日（水）より

その他の曜日・時間帯につきましては、従来通りの担当となります。
最新の担当医表は、当院ホームページまたは受付にてご確認ください。

ご理解のほどよろしくお願いいたします。`,
  },
  {
    id: 5,
    date: "2024.10.25",
    title: "新しい培養士が着任しました",
    cat: "スタッフ",
    important: false,
    content: `このたび、新しい培養士が当院に着任いたしましたのでお知らせいたします。

【新任培養士】
氏名：培養士 B
資格：胚培養士

豊富な経験を持つ培養士が加わることで、より一層充実した体制で患者様の治療をサポートしてまいります。

今後とも当院をよろしくお願いいたします。`,
  },
  {
    id: 6,
    date: "2024.10.20",
    title: "待合室のWi-Fiパスワード変更のお知らせ",
    cat: "お知らせ",
    important: false,
    content: `セキュリティ強化のため、待合室でご利用いただけるWi-Fiのパスワードを変更いたしました。

新しいパスワードは受付にてお知らせしております。
ご利用をご希望の方は、お気軽にスタッフまでお声がけください。

【Wi-Fi名（SSID）】
PUKAPUKA-Guest

ご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。`,
  },
  {
    id: 7,
    date: "2024.10.15",
    title: "11月の休診日について",
    cat: "お知らせ",
    important: false,
    content: `11月の休診日についてお知らせいたします。

【休診日】
・11月3日（日）文化の日
・11月4日（月）振替休日
・11月23日（土）勤労感謝の日
・毎週日曜日

上記以外は通常通り診療しております。
ご予約・お問い合わせはお早めにお願いいたします。`,
  },
  {
    id: 8,
    date: "2024.10.01",
    title: "保険適用範囲拡大のお知らせ",
    cat: "医療情報",
    important: true,
    content: `2024年10月より、不妊治療の保険適用範囲が一部拡大されましたのでお知らせいたします。

【主な変更点】
・一部の先進医療が保険適用対象に追加
・年齢制限の見直し

詳細につきましては、診察時に医師またはスタッフよりご説明させていただきます。
また、厚生労働省のホームページでも最新情報をご確認いただけます。

ご不明な点がございましたら、お気軽にお問い合わせください。`,
  },
  {
    id: 9,
    date: "2024.09.20",
    title: "システムメンテナンスのお知らせ",
    cat: "お知らせ",
    important: false,
    content: `下記日程にてシステムメンテナンスを実施いたします。

【メンテナンス日時】
2024年9月28日（土）22:00 〜 9月29日（日）6:00

【影響範囲】
・WEB予約システムがご利用いただけません
・お問い合わせフォームがご利用いただけません

メンテナンス時間中のご予約は、翌営業日にお電話にてお願いいたします。
ご不便をおかけいたしますが、ご理解のほどよろしくお願いいたします。`,
  },
  {
    id: 10,
    date: "2024.09.10",
    title: "不妊治療助成金の申請について",
    cat: "医療情報",
    important: false,
    content: `不妊治療の助成金制度についてご案内いたします。

【東京都の助成制度】
東京都では、特定不妊治療（体外受精・顕微授精）を受けた方を対象に、
治療費の一部を助成する制度があります。

【申請に必要な書類】
・申請書（東京都福祉保健局のHPよりダウンロード）
・受診等証明書（当院にて発行）
・住民票
・戸籍謄本
・所得証明書

【当院での手続き】
受診等証明書の発行をご希望の方は、受付にてお申し出ください。
発行には数日お時間をいただく場合がございます。

詳細は東京都福祉保健局のホームページをご確認ください。`,
  },
]

export function generateStaticParams() {
  return newsData.map((news) => ({
    id: String(news.id),
  }))
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const newsId = parseInt(id, 10)
  const news = newsData.find((n) => n.id === newsId)

  if (!news) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-2xl font-bold text-primary mb-4">お知らせが見つかりません</h1>
        <Link href="/news" className="text-primary hover:underline">
          お知らせ一覧に戻る
        </Link>
      </div>
    )
  }

  // 前後の記事を取得
  const currentIndex = newsData.findIndex((n) => n.id === newsId)
  const prevNews = currentIndex > 0 ? newsData[currentIndex - 1] : null
  const nextNews = currentIndex < newsData.length - 1 ? newsData[currentIndex + 1] : null

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/news" className="hover:text-primary">お知らせ</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">詳細</span>
          </div>

          {/* Title */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="text-muted-foreground font-medium">{news.date}</time>
            {news.important && (
              <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">
                重要
              </span>
            )}
            <span className="bg-secondary text-primary px-3 py-1 rounded-full text-xs font-bold">
              {news.cat}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-primary">{news.title}</h1>
        </div>
      </div>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
              <div className="prose prose-gray max-w-none">
                {news.content.split("\n").map((line, i) => (
                  <p key={i} className={`${line === "" ? "mb-4" : "mb-2"} text-foreground leading-relaxed`}>
                    {line || <br />}
                  </p>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 gap-4">
              {prevNews ? (
                <Link
                  href={`/news/${prevNews.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden md:inline">{prevNews.title}</span>
                  <span className="md:hidden">前の記事</span>
                </Link>
              ) : (
                <div />
              )}

              <Link
                href="/news"
                className="px-6 py-2 bg-gray-100 rounded-full text-sm font-medium text-muted-foreground hover:bg-gray-200 transition-colors"
              >
                一覧に戻る
              </Link>

              {nextNews ? (
                <Link
                  href={`/news/${nextNews.id}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="hidden md:inline">{nextNews.title}</span>
                  <span className="md:hidden">次の記事</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : (
                <div />
              )}
            </div>
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
