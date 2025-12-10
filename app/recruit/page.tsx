import Link from "next/link"
import { ChevronRight, Heart, Clock, MapPin, Briefcase } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "求人情報｜採用情報｜レディースクリニック ぷかぷか",
  description: "レディースクリニック ぷかぷかの求人・採用情報。看護師、培養士、医療事務スタッフを募集しています。目黒駅徒歩3分。",
  keywords: "求人, 採用, 看護師, 培養士, 医療事務, 不妊治療, クリニック, 目黒",
}

export default function RecruitPage() {
  const positions = [
    {
      title: "看護師（正社員）",
      department: "看護部",
      type: "正社員",
      requirements: [
        "看護師免許をお持ちの方",
        "不妊治療に興味のある方",
        "患者様に寄り添った看護ができる方",
      ],
      preferred: [
        "産婦人科・不妊治療クリニックでの勤務経験",
        "採血・注射の経験がある方",
      ],
      salary: "月給 30万円〜45万円（経験・能力による）",
      hours: "8:30〜17:30（シフト制）",
      benefits: ["社会保険完備", "交通費支給", "有給休暇", "育児休暇", "研修制度あり"],
    },
    {
      title: "胚培養士（正社員）",
      department: "培養室",
      type: "正社員",
      requirements: [
        "胚培養士の資格をお持ちの方",
        "または生殖医療の培養業務経験がある方",
        "チームワークを大切にできる方",
      ],
      preferred: [
        "ART施設での勤務経験3年以上",
        "顕微授精の経験がある方",
      ],
      salary: "月給 35万円〜50万円（経験・能力による）",
      hours: "8:30〜17:30（シフト制）",
      benefits: ["社会保険完備", "交通費支給", "有給休暇", "育児休暇", "学会参加支援"],
    },
    {
      title: "医療事務（正社員・パート）",
      department: "事務部",
      type: "正社員・パート",
      requirements: [
        "医療事務の経験がある方、または資格をお持ちの方",
        "PC操作ができる方",
        "明るく丁寧な対応ができる方",
      ],
      preferred: [
        "レセプト業務の経験",
        "産婦人科クリニックでの勤務経験",
      ],
      salary: "正社員：月給 22万円〜30万円 / パート：時給 1,300円〜",
      hours: "正社員：8:30〜17:30 / パート：応相談",
      benefits: ["社会保険完備（正社員）", "交通費支給", "有給休暇", "制服貸与"],
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
            <span className="text-foreground">求人情報</span>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-4">求人情報</h1>
          <p className="text-muted-foreground">
            私たちと一緒に、患者様の夢を叶えるお手伝いをしませんか？
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">私たちが大切にしていること</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              レディースクリニック ぷかぷかでは、患者様一人ひとりに寄り添った医療を提供することを大切にしています。
              スタッフ同士のコミュニケーションを重視し、チームワークで患者様をサポートしています。
              未経験の方も、経験豊富な先輩スタッフが丁寧に指導いたしますので、安心してご応募ください。
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-pink-50 p-6 rounded-xl">
                <Heart className="w-10 h-10 text-pink-500 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">患者様第一</h3>
                <p className="text-sm text-muted-foreground">患者様の気持ちに寄り添い、安心して治療を受けていただける環境づくりを心がけています。</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl">
                <Briefcase className="w-10 h-10 text-blue-500 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">成長できる環境</h3>
                <p className="text-sm text-muted-foreground">研修制度や学会参加支援など、スキルアップをサポートする体制を整えています。</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Clock className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <h3 className="font-bold text-primary mb-2">ワークライフバランス</h3>
                <p className="text-sm text-muted-foreground">残業少なめ、有給取得しやすい環境で、プライベートも大切にできます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Positions */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">募集職種</h2>

          <div className="space-y-8 max-w-4xl mx-auto">
            {positions.map((pos) => (
              <div key={pos.title} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <h3 className="text-xl font-bold text-primary">{pos.title}</h3>
                  <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                    {pos.department}
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-bold text-foreground mb-2">応募資格</h4>
                    <ul className="space-y-1">
                      {pos.requirements.map((req, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">・</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">歓迎条件</h4>
                    <ul className="space-y-1">
                      {pos.preferred.map((pref, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">・</span>
                          {pref}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-6 space-y-3">
                  <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
                    <div>
                      <span className="font-bold text-foreground">給与：</span>
                      <span className="text-muted-foreground">{pos.salary}</span>
                    </div>
                    <div>
                      <span className="font-bold text-foreground">勤務時間：</span>
                      <span className="text-muted-foreground">{pos.hours}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {pos.benefits.map((benefit, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">応募方法</h2>
            <p className="text-muted-foreground mb-8">
              ご応募・お問い合わせは、お電話またはメールにてお気軽にご連絡ください。<br />
              面接日時等、詳細は追ってご連絡いたします。
            </p>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <div className="flex items-center justify-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-bold">勤務地</span>
              </div>
              <p className="text-muted-foreground mb-6">
                東京都目黒区目黒1-1-1<br />
                目黒駅 西口より徒歩4分
              </p>

              <div className="space-y-4">
                <div>
                  <p className="font-bold text-lg text-primary">TEL: 03-5747-9330</p>
                  <p className="text-sm text-muted-foreground">（採用担当まで）</p>
                </div>
                <div>
                  <p className="font-bold">E-mail: recruit@pukapuka-clinic.jp</p>
                </div>
              </div>
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
