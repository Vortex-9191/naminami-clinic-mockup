export default function SelfPaidPricePage() {
  const prices = [
    {
      category: "人工授精",
      items: [
        { name: "人工授精（AIH）", price: "22,000円" },
        { name: "精子調整", price: "11,000円" },
      ],
    },
    {
      category: "体外受精（採卵）",
      items: [
        { name: "採卵基本料", price: "55,000円" },
        { name: "採卵手技料（1個あたり）", price: "22,000円" },
        { name: "静脈麻酔", price: "33,000円" },
      ],
    },
    {
      category: "体外受精（培養・移植）",
      items: [
        { name: "媒精（ふりかけ）", price: "55,000円" },
        { name: "顕微授精（ICSI）基本料", price: "55,000円" },
        { name: "顕微授精手技料（1個あたり）", price: "11,000円" },
        { name: "胚盤胞培養", price: "33,000円" },
        { name: "胚移植", price: "77,000円" },
      ],
    },
    {
      category: "凍結保存",
      items: [
        { name: "胚凍結保存（1年目）", price: "55,000円" },
        { name: "精子凍結保存（1年目）", price: "33,000円" },
        { name: "凍結延長料（1年毎）", price: "33,000円" },
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">自費診療費用</h1>
        <p className="text-muted-foreground">保険適用外の治療にかかる費用のご案内です。</p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12">
        {prices.map((section, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-primary/5 px-6 py-4 border-b border-primary/10">
              <h2 className="text-xl font-bold text-primary">{section.category}</h2>
            </div>
            <div className="divide-y divide-gray-100">
              {section.items.map((item, j) => (
                <div key={j} className="flex justify-between items-center p-6 hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-foreground">{item.name}</span>
                  <span className="font-bold text-lg text-foreground">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-6 rounded-xl text-sm text-muted-foreground">
          <p className="mb-2 font-bold">注意事項</p>
          <ul className="list-disc list-inside space-y-1">
            <li>表示価格はすべて税込です。</li>
            <li>お薬代は別途必要となります。</li>
            <li>治療内容は医師の判断により変更となる場合があります。</li>
            <li>価格は予告なく変更となる場合があります。</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
