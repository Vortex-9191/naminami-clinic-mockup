import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, FileText, Bell, Clock } from "lucide-react"

export default function PatientPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">通院中の方へ</h1>
        <p className="text-muted-foreground">予約システムや診療に関するご案内です。</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {/* Reservation System */}
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

        {/* Documents & Forms */}
        <div className="bg-secondary/30 p-8 rounded-2xl border border-secondary">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
              <FileText className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-primary">各種同意書・書類</h2>
          </div>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            治療に必要な同意書や問診票をダウンロードいただけます。<br />
            ご自宅で記入してご持参いただくとスムーズです。
          </p>
          <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 rounded-full h-12 text-lg">
            書類ダウンロード一覧
          </Button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-6 text-center">患者様へのお知らせ</h2>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y divide-gray-100">
          {[
            { date: "2024.05.01", title: "休診日の緊急連絡先について", important: true },
            { date: "2024.04.20", title: "採卵当日の持ち物が変更になりました", important: false },
            { date: "2024.04.10", title: "待合室のWi-Fiパスワード変更のお知らせ", important: false },
          ].map((item, i) => (
            <div key={i} className="p-6 flex items-start gap-4">
              <Bell className={`w-5 h-5 mt-1 ${item.important ? "text-red-500" : "text-gray-400"}`} />
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <time className="text-sm text-muted-foreground">{item.date}</time>
                  {item.important && (
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-xs font-bold">重要</span>
                  )}
                </div>
                <h3 className="font-medium text-foreground">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
