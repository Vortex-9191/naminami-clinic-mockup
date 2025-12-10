export default function AdvancedMedicalPricePage() {
  const items = [
    { name: "タイムラプス培養", price: "33,000円", desc: "受精卵の発育を定点カメラで記録し、最適な胚を選別します。" },
    { name: "SEET法", price: "33,000円", desc: "胚移植の数日前に培養液を子宮に注入し、着床環境を整えます。" },
    { name: "子宮内膜スクラッチ", price: "11,000円", desc: "子宮内膜に小さな傷をつけることで、着床を促進させます。" },
    { name: "PICSI", price: "22,000円", desc: "ヒアルロン酸を用いて成熟した精子を選別し、顕微授精を行います。" },
    { name: "ERA/EMMA/ALICE検査", price: "165,000円", desc: "子宮内膜の着床の窓や、子宮内フローラを調べる検査です。" },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">先進医療費用</h1>
        <p className="text-muted-foreground">保険診療と併用可能な先進医療の費用です。</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {items.map((item, i) => (
              <div key={i} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                  <h3 className="text-lg font-bold text-foreground">{item.name}</h3>
                  <span className="font-bold text-lg text-primary whitespace-nowrap">{item.price}</span>
                </div>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-xl text-sm text-orange-800">
          <p className="font-bold mb-2">先進医療について</p>
          <p>
            先進医療は、厚生労働省が認めた高度な医療技術です。<br />
            保険診療との併用が認められていますが、先進医療にかかる費用は全額自己負担となります。<br />
            民間医療保険の「先進医療特約」の対象となる場合があります。
          </p>
        </div>
      </div>
    </div>
  )
}
