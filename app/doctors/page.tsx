import Link from "next/link"
import { MapSection } from "@/components/clinic/MapSection"

export default function DoctorsPage() {
  const doctors = [
    {
      name: "岩﨑 〇〇",
      nameKana: "いわさき ○○",
      role: "院長",
      image: "doctor-iwasaki.jpg",
      qualifications: ["日本産科婦人科学会専門医", "日本生殖医学会生殖医療専門医"],
      message: "不妊治療は患者様お一人おひとりの状況が異なります。最新の医療技術と丁寧なカウンセリングで、皆様の妊娠・出産をサポートいたします。",
      career: [
        { year: "○○年", content: "○○大学医学部 卒業" },
        { year: "○○年", content: "○○大学病院 産婦人科" },
        { year: "○○年", content: "○○クリニック 勤務" },
        { year: "2024年", content: "レディースクリニック ぷかぷか 開院" },
      ],
    },
    {
      name: "佐竹 〇〇",
      nameKana: "さたけ ○○",
      role: "医師",
      image: "doctor-satake.jpg",
      qualifications: ["日本産科婦人科学会専門医"],
      message: "女性の健康に関するお悩みに、親身になって対応いたします。お気軽にご相談ください。",
      career: [
        { year: "○○年", content: "○○大学医学部 卒業" },
        { year: "○○年", content: "○○病院 産婦人科" },
        { year: "○○年", content: "レディースクリニック ぷかぷか 入職" },
      ],
    },
  ]

  const embryologists = [
    {
      name: "培養士 A",
      role: "主任培養士",
      image: "embryologist-a.jpg",
      qualifications: ["臨床エンブリオロジスト", "胚培養士"],
      message: "大切な卵子・精子・胚を最良の状態で管理し、皆様の治療をサポートいたします。",
    },
    {
      name: "培養士 B",
      role: "培養士",
      image: "embryologist-b.jpg",
      qualifications: ["臨床エンブリオロジスト"],
      message: "培養室での作業一つひとつに細心の注意を払い、丁寧な培養を心がけています。",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">医師紹介</h1>
          <p className="text-muted-foreground">当院の医師・培養士をご紹介します</p>
        </div>
      </div>

      {/* Anchor Navigation */}
      <div className="bg-white border-b sticky top-20 z-30">
        <div className="container py-4">
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center">
            {[
              { label: "医師紹介", href: "#doctors" },
              { label: "培養士紹介", href: "#embryologists" },
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

      {/*
        ============================================
        【画像】医師写真
        - 推奨サイズ: 400x500px
        - ファイル名: doctor-iwasaki.jpg, doctor-satake.jpg
        - 内容: 医師の顔写真（白衣姿推奨）
        ============================================
      */}
      {/* Doctors Section */}
      <section id="doctors" className="py-16 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">医師紹介</h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {doctors.map((doctor, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="bg-gray-200 aspect-[4/5] md:aspect-auto flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                    <span className="text-muted-foreground font-medium">【画像】</span>
                    <span className="text-muted-foreground text-sm">{doctor.image}</span>
                    <span className="text-xs text-gray-400 mt-1">推奨: 400x500px</span>
                  </div>
                  <div className="p-8 md:p-10">
                    <div className="mb-6">
                      <span className={`inline-block text-white text-xs px-3 py-1 rounded-full mb-3 ${doctor.role === "院長" ? "bg-primary" : "bg-purple-500"}`}>
                        {doctor.role}
                      </span>
                      <h3 className="text-2xl font-bold text-primary mb-1">{doctor.name}</h3>
                      <p className="text-sm text-muted-foreground">{doctor.nameKana}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {doctor.qualifications.map((qual, qi) => (
                        <span key={qi} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {qual}
                        </span>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {doctor.message}
                    </p>

                    <div className="border-t pt-4">
                      <h4 className="font-bold text-sm text-primary mb-3">経歴</h4>
                      <div className="space-y-2 text-xs text-muted-foreground">
                        {doctor.career.map((item, ci) => (
                          <div key={ci} className="flex gap-3">
                            <span className="font-medium w-12 shrink-0">{item.year}</span>
                            <span>{item.content}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        ============================================
        【画像】培養士写真
        - 推奨サイズ: 300x300px
        - ファイル名: embryologist-a.jpg, embryologist-b.jpg
        - 内容: 培養士の顔写真
        ============================================
      */}
      {/* Embryologists Section */}
      <section id="embryologists" className="py-16 bg-secondary/30 scroll-mt-32">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">培養士紹介</h2>
          <p className="text-center text-muted-foreground mb-12">
            高度な技術を持つ培養士が、大切な卵子・胚を管理しています
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {embryologists.map((embryologist, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 flex flex-col items-center justify-center border-2 border-dashed border-gray-300">
                  <span className="text-muted-foreground text-xs">【画像】</span>
                  <span className="text-muted-foreground text-[10px]">{embryologist.image}</span>
                </div>
                <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full mb-2">
                  {embryologist.role}
                </span>
                <h3 className="text-lg font-bold text-primary mb-2">{embryologist.name}</h3>
                <div className="flex flex-wrap justify-center gap-1 mb-4">
                  {embryologist.qualifications.map((qual, qi) => (
                    <span key={qi} className="text-[10px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {qual}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {embryologist.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-primary/5">
        <div className="container text-center">
          <p className="text-muted-foreground mb-6">
            お気軽にご相談ください
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
