import Link from "next/link"
import { ChevronRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー｜レディースクリニック ぷかぷか",
  description: "レディースクリニック ぷかぷかのプライバシーポリシー（個人情報保護方針）についてご案内します。",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/" className="hover:text-primary">ホーム</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">プライバシーポリシー</span>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-4">プライバシーポリシー</h1>
          <p className="text-muted-foreground">個人情報の取り扱いについて</p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed mb-8">
                レディースクリニック ぷかぷか（以下「当院」といいます）は、患者様の個人情報の保護に努め、以下のプライバシーポリシーに基づき、適切な取り扱いを行います。
              </p>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">1. 個人情報の収集について</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                当院は、診療・治療を行うにあたり、以下の個人情報を収集することがあります。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>氏名、生年月日、住所、電話番号、メールアドレス等の基本情報</li>
                <li>診療に必要な健康状態、既往歴、服薬状況等の医療情報</li>
                <li>保険証情報、診察券番号等の診療に関する情報</li>
                <li>その他、診療・治療に必要な情報</li>
              </ul>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">2. 個人情報の利用目的</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                当院は、収集した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>患者様への医療サービスの提供</li>
                <li>診療費の請求、保険請求等の医療事務</li>
                <li>他の医療機関、検査機関等との連携</li>
                <li>治療経過のご報告、健康管理のためのご連絡</li>
                <li>医療の質向上のための症例研究（個人が特定されない形で）</li>
                <li>当院からのお知らせ、情報提供</li>
              </ul>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">3. 個人情報の第三者提供</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当院は、以下の場合を除き、患者様の同意なく個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-6">
                <li>法令に基づく場合</li>
                <li>患者様の生命、身体または財産の保護のために必要な場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために必要な場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに協力する場合</li>
              </ul>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">4. 個人情報の管理</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当院は、患者様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するため、必要かつ適切な安全管理措置を講じます。また、個人情報を取り扱う職員に対して、適切な監督を行います。
              </p>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">5. 個人情報の開示・訂正・削除</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                患者様ご本人から、個人情報の開示、訂正、削除等をご請求いただいた場合、ご本人であることを確認の上、合理的な期間内に対応いたします。ご請求は、当院受付窓口までお申し出ください。
              </p>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">6. Cookieの使用について</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当院のウェブサイトでは、利便性向上のためCookieを使用することがあります。Cookieの使用を希望されない場合は、ブラウザの設定により無効にすることができます。
              </p>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">7. プライバシーポリシーの変更</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                当院は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当院ウェブサイト上でお知らせいたします。
              </p>

              <h2 className="text-xl font-bold text-primary mt-8 mb-4">8. お問い合わせ</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="font-bold text-foreground mb-2">レディースクリニック ぷかぷか</p>
                <p className="text-muted-foreground text-sm">
                  〒153-0063 東京都目黒区目黒1-1-1<br />
                  TEL: 03-5747-9330
                </p>
              </div>

              <p className="text-sm text-muted-foreground mt-8 text-right">
                制定日：2024年4月1日<br />
                最終改定日：2024年4月1日
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
