export default function InsurancePricePage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">保険診療費用</h1>
        <p className="text-muted-foreground">保険適用となる治療の費用目安です。</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-primary mb-6">保険適用の条件</h2>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">年齢</span>
              <span>治療開始時の年齢が43歳未満であること</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">回数</span>
              <span>
                40歳未満：通算6回まで<br />
                40歳以上43歳未満：通算3回まで
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">関係</span>
              <span>法律婚または事実婚の関係にあるカップル</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="bg-secondary/30 px-6 py-4 border-b border-secondary">
            <h2 className="text-xl font-bold text-primary">費用目安（3割負担の場合）</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { name: "タイミング法", price: "約2,000円〜3,000円" },
              { name: "人工授精（AIH）", price: "約5,000円〜6,000円" },
              { name: "採卵術", price: "約20,000円〜" },
              { name: "体外受精・顕微授精管理料", price: "約12,000円〜" },
              { name: "胚移植術", price: "約25,000円〜" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors">
                <span className="font-medium text-foreground">{item.name}</span>
                <span className="font-bold text-lg text-foreground">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 p-6 rounded-xl text-sm text-blue-800">
          <p className="font-bold mb-2">高額療養費制度について</p>
          <p>
            1ヶ月の医療費が高額になった場合、一定の金額（自己負担限度額）を超えた分が払い戻される制度です。<br />
            事前に「限度額適用認定証」をご用意いただくことで、窓口での支払いを限度額までに抑えることができます。
          </p>
        </div>
      </div>
    </div>
  )
}
