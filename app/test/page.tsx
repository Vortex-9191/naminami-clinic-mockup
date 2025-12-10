import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { MapSection } from "@/components/clinic/MapSection"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "各種検査｜不妊検査・ブライダルチェック｜レディースクリニック ぷかぷか",
  description: "不妊治療に関する各種検査のご案内。AMH検査、精液検査、子宮卵管造影検査、ホルモン検査など。目黒駅徒歩3分のレディースクリニック ぷかぷか。",
  keywords: "不妊検査, AMH検査, 精液検査, 子宮卵管造影検査, ブライダルチェック, プレコンセプションケア, 目黒, レディースクリニック",
}

export default function TestPage() {
  const tests = [
    {
      id: "preconception-female",
      name: "女性プレコンセプションチェック",
      desc: "妊娠前に女性の健康状態を総合的にチェックする検査です。ホルモン検査、感染症検査、子宮・卵巣の超音波検査などを行い、妊娠に向けた体の準備を確認します。",
      href: "/test/preconception-female",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "preconception-male",
      name: "男性プレコンセプションチェック",
      desc: "妊娠前に男性の健康状態をチェックする検査です。精液検査、ホルモン検査、感染症検査などを行い、不妊の原因となりうる要素を事前に確認します。",
      href: "/test/preconception-male",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "amh",
      name: "AMH検査",
      desc: "卵巣予備能（卵巣にどれくらいの卵子が残っているか）を調べる血液検査です。年齢とともに低下するAMH値を測定し、治療計画の参考にします。",
      href: "/test/amh",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "semen",
      name: "精液検査",
      desc: "精子の数、運動率、形態などを調べる検査です。男性不妊の原因を特定するための基本的な検査で、治療方針の決定に重要な役割を果たします。",
      href: "/test/semen",
      color: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      id: "hsg",
      name: "子宮卵管造影検査",
      desc: "子宮の形状や卵管の通過性を調べるX線検査です。造影剤を使用して、卵管の詰まりや子宮の形態異常を確認します。",
      href: "/test/hsg",
      color: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      id: "endometrium",
      name: "子宮内膜検査",
      desc: "子宮内膜の状態を調べる検査です。ERA検査（子宮内膜着床能検査）やEMMA/ALICE検査など、着床環境を詳しく調べることができます。",
      href: "/test/endometrium",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "ultrasound",
      name: "超音波検査",
      desc: "子宮や卵巣の状態を画像で確認する検査です。卵胞の発育状況、子宮内膜の厚さ、子宮筋腫や卵巣嚢腫の有無などを調べます。",
      href: "/test/ultrasound",
      color: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      id: "microscopy",
      name: "顕微鏡検査",
      desc: "精子や卵子、胚を顕微鏡で詳しく観察する検査です。精子の形態や運動性、卵子の成熟度、胚の発育状態などを確認します。",
      href: "/test/microscopy",
      color: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      id: "hormone",
      name: "ホルモン検査",
      desc: "FSH、LH、E2、プロゲステロンなど、妊娠に関わるホルモンの値を血液検査で調べます。月経周期に合わせて適切なタイミングで検査を行います。",
      href: "/test/hormone",
      color: "bg-pink-50",
      borderColor: "border-pink-200",
    },
    {
      id: "infection",
      name: "淋菌・クラミジア検査／膣分泌物培養",
      desc: "性感染症や膣内の細菌感染を調べる検査です。クラミジアや淋菌は卵管障害の原因となることがあり、早期発見・治療が重要です。",
      href: "/test/infection",
      color: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      id: "vitamin",
      name: "ビタミン・ミネラルの検査",
      desc: "ビタミンD、亜鉛、鉄分など、妊娠に必要な栄養素の過不足を調べる血液検査です。不足している場合はサプリメントなどで補充します。",
      href: "/test/vitamin",
      color: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      id: "recurrent",
      name: "不育症の検査",
      desc: "流産を繰り返す原因を調べる検査です。血液凝固異常、抗リン脂質抗体、染色体異常などを検査し、適切な治療につなげます。",
      href: "/test/recurrent",
      color: "bg-orange-50",
      borderColor: "border-orange-200",
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
            <Link href="/treatment" className="hover:text-primary">診療内容</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">各種検査</span>
          </div>

          <h1 className="text-3xl font-bold text-primary mb-4">各種検査</h1>
          <p className="text-muted-foreground">
            不妊治療・妊活に関する各種検査をご案内します。<br />
            適切な検査を行うことで、最適な治療計画を立てることができます。
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-6">検査の重要性</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              不妊治療を始める前に、まず原因を特定することが大切です。
              当院では、女性・男性それぞれに適した検査を行い、
              お二人に最適な治療方針をご提案いたします。
            </p>
            <p className="text-muted-foreground leading-relaxed">
              検査結果は医師が丁寧にご説明し、
              ご不明な点やご不安なことにもしっかりお答えします。
            </p>
          </div>
        </div>
      </section>

      {/* Tests List */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-12">検査一覧</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {tests.map((test) => (
              <Link
                key={test.id}
                href={test.href}
                className={`${test.color} ${test.borderColor} border rounded-2xl p-6 hover:shadow-md transition-shadow group`}
              >
                <h3 className="text-lg font-bold text-primary mb-3 group-hover:underline">
                  {test.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {test.desc}
                </p>
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  詳しく見る
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-primary mb-4">検査のご予約</h2>
            <p className="text-muted-foreground mb-8">
              検査をご希望の方は、まず診察のご予約をお取りください。<br />
              医師が症状やご希望をお伺いした上で、必要な検査をご案内いたします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/visitor"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-colors"
              >
                はじめての方へ
              </Link>
              <Link
                href="/price"
                className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/5 transition-colors"
              >
                料金について
              </Link>
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
