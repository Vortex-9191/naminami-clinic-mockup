import { Shield, Clock, UserCheck, Smartphone, Heart, ShieldCheck, Sparkles, Search } from "lucide-react"


export function WhyChooseUs() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl mb-3">
            低用量ピル.comが選ばれる理由
          </h2>
          <p className="text-muted-foreground">
            全国のクリニック情報を一括検索・比較できるポータルサイトです
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">全国のクリニックを網羅</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  オンライン診療から対面診療まで、全国47都道府県のクリニック情報を掲載。条件に合わせて検索できます。
                </p>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">料金・特徴を比較</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  診察料、ピルの種類、配送料など、各クリニックの料金プランや特徴を一覧で比較できます。
                </p>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">充実した情報コンテンツ</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  ピルの基礎知識、服用方法、副作用など、女性の健康に役立つ情報を分かりやすく解説しています。
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
