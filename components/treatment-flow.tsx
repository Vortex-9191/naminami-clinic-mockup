import { Search as SearchIcon, Calendar, FileText, Pill, CalendarCheck, Smartphone, CreditCard, Package } from "lucide-react"

export function TreatmentFlow() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl mb-3">
            サイトの使い方
          </h2>
          <p className="text-muted-foreground">
            3ステップで、あなたに合ったクリニックが見つかります
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="relative bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
              1
            </div>
            <div className="mt-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <SearchIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">条件で検索</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                エリア、駅名、診療時間など、あなたの希望条件でクリニックを検索します。
              </p>
              <div className="text-xs text-muted-foreground bg-secondary/50 rounded p-2">
                例：「東京都」「土日診療」「オンライン対応」
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
              2
            </div>
            <div className="mt-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">詳細を比較</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                料金プラン、診療時間、特徴などを比較して、自分に合ったクリニックを選びます。
              </p>
              <div className="text-xs text-muted-foreground bg-secondary/50 rounded p-2">
                料金や診療時間の違いをチェック
              </div>

            </div>
          </div>

          {/* Step 3 */}
          <div className="relative bg-white rounded-lg p-6 border border-border hover:border-primary/30 hover:shadow-md transition-all">
            <div className="absolute -top-3 -left-3 h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-md">
              3
            </div>
            <div className="mt-4">
              <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold mb-2">公式サイトで予約</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                気になったクリニックの公式サイトへアクセスして、Web予約や問い合わせを行います。
              </p>
              <div className="text-xs text-muted-foreground bg-secondary/50 rounded p-2">
                各クリニックの公式サイトへ移動します
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
