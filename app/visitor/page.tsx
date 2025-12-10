import { CheckSquare, Calendar, Stethoscope, CreditCard } from "lucide-react"

export default function VisitorPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">はじめての方へ</h1>
        <p className="text-muted-foreground">初診の流れと、ご来院時の持ち物についてご案内します。</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-16">
        {/* What to bring */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-6">お持ちいただくもの</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <ul className="grid md:grid-cols-2 gap-4">
              {[
                "健康保険証（マイナンバーカード）",
                "紹介状（お持ちの方）",
                "基礎体温表（記録されている方）",
                "他院での検査結果（お持ちの方）",
                "問診票（事前にDL・記入された方）",
                "お薬手帳",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckSquare className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Flow */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8">初診の流れ</h2>
          <div className="space-y-8 relative before:absolute before:left-6 before:top-8 before:bottom-8 before:w-0.5 before:bg-gray-200">
            {[
              {
                title: "ご予約",
                desc: "WEB予約システムより、初診のご予約をお取りください。",
                icon: <Calendar className="w-6 h-6 text-white" />,
              },
              {
                title: "受付",
                desc: "ご予約時間の10分前にお越しください。保険証の確認と問診票の記入を行います。",
                icon: <CheckSquare className="w-6 h-6 text-white" />,
              },
              {
                title: "診察・検査",
                desc: "医師による問診と、必要に応じて超音波検査や血液検査を行います。",
                icon: <Stethoscope className="w-6 h-6 text-white" />,
              },
              {
                title: "治療方針の決定",
                desc: "検査結果や患者様のご希望を踏まえ、今後の治療方針をご相談します。",
                icon: <CheckSquare className="w-6 h-6 text-white" />,
              },
              {
                title: "お会計",
                desc: "自動精算機にてお会計をお願いします。次回のご予約もお取りいただけます。",
                icon: <CreditCard className="w-6 h-6 text-white" />,
              },
            ].map((step, i) => (
              <div key={i} className="relative flex gap-6 items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 z-10 shadow-md ring-4 ring-white">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex-1">
                  <span className="text-primary font-bold text-sm mb-1 block">STEP {i + 1}</span>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
