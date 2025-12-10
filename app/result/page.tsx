export default function ResultPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">治療成績</h1>
        <p className="text-muted-foreground">当院における不妊治療の実績を公開しています。</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-16">
        {/* Pregnancy Rate by Age */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">年齢別妊娠率（体外受精）</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="h-64 flex items-end justify-around gap-4 pb-4 border-b border-gray-200">
              {[
                { age: "~29歳", rate: 45, color: "bg-chart-1" },
                { age: "30~34歳", rate: 40, color: "bg-chart-2" },
                { age: "35~39歳", rate: 32, color: "bg-chart-3" },
                { age: "40~42歳", rate: 20, color: "bg-chart-4" },
                { age: "43歳~", rate: 5, color: "bg-chart-5" },
              ].map((data, i) => (
                <div key={i} className="flex flex-col items-center gap-2 w-full group">
                  <div className="relative w-full max-w-[60px] flex items-end h-full group-hover:opacity-80 transition-opacity">
                    <div
                      className={`w-full rounded-t-lg ${data.color} transition-all duration-1000 ease-out`}
                      style={{ height: `${data.rate * 2}%` }}
                    >
                      <span className="absolute -top-6 left-1/2 -translate-x-1/2 font-bold text-foreground">
                        {data.rate}%
                      </span>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-muted-foreground">{data.age}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-right text-muted-foreground mt-4">※2023年1月〜12月の当院実績（移植あたりの妊娠率）</p>
          </div>
        </section>

        {/* Annual Cases */}
        <section>
          <h2 className="text-2xl font-bold text-primary mb-8 text-center">年間治療件数の推移</h2>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <div className="space-y-4">
              {[
                { year: 2021, count: 850 },
                { year: 2022, count: 1200 },
                { year: 2023, count: 1500 },
              ].map((data, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="w-16 font-bold text-muted-foreground">{data.year}年</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full flex items-center justify-end px-4 text-white font-bold text-sm"
                      style={{ width: `${(data.count / 1500) * 100}%` }}
                    >
                      {data.count}件
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-6 leading-relaxed">
              多くの患者様に選ばれ、治療件数は年々増加しています。<br />
              経験豊富なスタッフがチーム医療でサポートいたします。
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
