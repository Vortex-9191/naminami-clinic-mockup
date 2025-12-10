import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Bell, Clock, Download, AlertCircle } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"

export default function PatientPage() {
  // 外来担当表
  const scheduleData = [
    { time: "9:00-13:00", mon: "山田", tue: "山田", wed: "山田", thu: "山田", fri: "山田", sat: "山田", sun: "-" },
    { time: "14:20-17:00", mon: "山田", tue: "山田", wed: "佐藤", thu: "山田", fri: "山田", sat: "-", sun: "-" },
    { time: "17:00-19:20", mon: "山田", tue: "佐藤", wed: "-", thu: "山田", fri: "佐藤", sat: "-", sun: "-" },
  ]

  // ダウンロード書類
  const documents = [
    { name: "問診票（初診用）", desc: "初めての方はご記入ください", file: "monshin_shoshin.pdf" },
    { name: "問診票（再診用）", desc: "症状に変化がある方", file: "monshin_saishin.pdf" },
    { name: "体外受精同意書", desc: "体外受精を受けられる方", file: "ivf_doui.pdf" },
    { name: "凍結保存同意書", desc: "胚・卵子凍結を希望される方", file: "toketsu_doui.pdf" },
    { name: "診断書申込書", desc: "診断書が必要な方", file: "shindansho_moushikomi.pdf" },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">通院中の方へ</h1>
          <p className="text-muted-foreground">予約システムや診療に関するご案内です</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "1年以上ご来院がない方", href: "#absence" },
              { label: "外来担当表", href: "#schedule" },
              { label: "診断書の申込み", href: "#certificate" },
              { label: "書類ダウンロード", href: "#download" },
              { label: "お知らせ", href: "#notice" },
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

      <div className="container py-12">
        {/* 1年以上ご来院がない方 */}
        <section id="absence" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            1年以上ご来院がない方へ
          </h2>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-800 mb-3">ご来院前にご確認ください</h3>
                <div className="text-amber-900 space-y-3 text-sm">
                  <p>
                    前回のご来院から1年以上経過している場合、カルテの確認や検査データの更新が必要となる場合がございます。
                  </p>
                  <p>
                    <span className="font-bold">以下に該当する方は、お電話にてご予約をお願いいたします：</span>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>前回の来院から1年以上経過している方</li>
                    <li>凍結胚・凍結卵子の保存期間が近づいている方</li>
                    <li>治療を再開したい方</li>
                    <li>他院からの転院をご希望の方</li>
                  </ul>
                  <div className="mt-4 pt-4 border-t border-amber-200">
                    <p className="font-bold">お電話でのご予約：</p>
                    <a href="tel:03-5747-9330" className="text-xl font-bold text-primary hover:underline">
                      03-5747-9330
                    </a>
                    <p className="text-xs mt-1">受付時間：9:00-17:00（日祝除く）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 外来担当表 */}
        <section id="schedule" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            外来担当表
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead className="bg-primary/10">
                  <tr>
                    <th className="p-4 text-left font-bold text-primary">診療時間</th>
                    <th className="p-4 text-center font-bold text-primary">月</th>
                    <th className="p-4 text-center font-bold text-primary">火</th>
                    <th className="p-4 text-center font-bold text-primary">水</th>
                    <th className="p-4 text-center font-bold text-primary">木</th>
                    <th className="p-4 text-center font-bold text-primary">金</th>
                    <th className="p-4 text-center font-bold text-primary">土</th>
                    <th className="p-4 text-center font-bold text-red-400">日祝</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {scheduleData.map((row, i) => (
                    <tr key={i}>
                      <td className="p-4 font-medium">{row.time}</td>
                      <td className="p-4 text-center">{row.mon}</td>
                      <td className="p-4 text-center">{row.tue}</td>
                      <td className="p-4 text-center">{row.wed}</td>
                      <td className="p-4 text-center">{row.thu}</td>
                      <td className="p-4 text-center">{row.fri}</td>
                      <td className="p-4 text-center">{row.sat}</td>
                      <td className="p-4 text-center text-gray-400">{row.sun}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-sm text-muted-foreground">
              <p>※担当医は変更になる場合がございます。詳しくはお電話にてお問い合わせください。</p>
              <p>※祝日は休診となります。</p>
            </div>
          </div>
        </section>

        {/* 診断書の申込み手順 */}
        <section id="certificate" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            診断書の申込み手順
          </h2>

          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "申込書のダウンロード・記入",
                  desc: "下記の「各種書類ダウンロード」から診断書申込書をダウンロードし、必要事項をご記入ください。"
                },
                {
                  step: 2,
                  title: "窓口または郵送で提出",
                  desc: "ご記入いただいた申込書を、当院受付窓口へ直接お持ちいただくか、郵送にてご提出ください。"
                },
                {
                  step: 3,
                  title: "作成・お渡し（約1〜2週間）",
                  desc: "診断書の作成には1〜2週間程度お時間をいただきます。完成後、ご来院またはご郵送にてお渡しいたします。"
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-primary mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-sm mb-2">診断書料金</h4>
              <table className="text-sm w-full">
                <tbody>
                  <tr>
                    <td className="py-1 text-muted-foreground">当院書式の診断書</td>
                    <td className="py-1 text-right">¥3,300（税込）</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-muted-foreground">指定書式の診断書</td>
                    <td className="py-1 text-right">¥5,500（税込）</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-muted-foreground">英文診断書</td>
                    <td className="py-1 text-right">¥11,000（税込）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 各種書類ダウンロード */}
        <section id="download" className="mb-16 scroll-mt-32">
          <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-primary rounded-full"></span>
            各種書類ダウンロード
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {documents.map((doc, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-red-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-sm">{doc.name}</h3>
                  <p className="text-xs text-muted-foreground">{doc.desc}</p>
                </div>
                <a
                  href={`/documents/${doc.file}`}
                  className="flex items-center gap-1 text-primary text-sm font-medium hover:underline flex-shrink-0"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">ダウンロード</span>
                </a>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-4 text-center">
            ※PDFファイルをご覧いただくには、Adobe Acrobat Readerが必要です。
          </p>
        </section>

        {/* WEB予約・お知らせ */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* WEB予約システム */}
          <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                <Calendar className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-primary">WEB予約システム</h2>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              24時間いつでもご予約・変更が可能です。<br />
              診察券番号をお手元にご用意の上、ログインしてください。
            </p>
            <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg">
              予約システムにログイン
            </Button>
            <p className="text-xs text-center text-muted-foreground mt-4">
              ※システムメンテナンス時はご利用いただけない場合があります。
            </p>
          </div>

          {/* お知らせ */}
          <section id="notice" className="scroll-mt-32">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-full">
              <div className="p-4 border-b flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="font-bold text-primary">患者様へのお知らせ</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {[
                  { date: "2024.12.01", title: "年末年始の休診日について", important: true },
                  { date: "2024.11.15", title: "採卵当日の持ち物が変更になりました", important: false },
                  { date: "2024.11.01", title: "外来担当医の変更について", important: false },
                  { date: "2024.10.20", title: "待合室のWi-Fiパスワード変更のお知らせ", important: false },
                ].map((item, i) => (
                  <div key={i} className="p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <time className="text-xs text-muted-foreground">{item.date}</time>
                        {item.important && (
                          <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">重要</span>
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 border-t">
                <Link href="/news" className="text-sm text-primary hover:underline">
                  お知らせ一覧を見る →
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
