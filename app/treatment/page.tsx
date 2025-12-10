import { ArrowDown, CheckCircle } from "lucide-react"

export default function TreatmentPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">当院の不妊治療</h1>
        <p className="text-muted-foreground">患者様のご希望と体の状態に合わせた、最適な治療をご提案します。</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-20">
        {/* Step 1: Timing Method */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">1</div>
            <h2 className="text-2xl font-bold text-primary">タイミング法</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              医師が超音波検査などで排卵日を予測し、最も妊娠しやすい時期に性交渉を持つよう指導する方法です。<br />
              不妊治療の第一歩として、自然な形での妊娠を目指します。
            </p>

            {/* Diagram: Timing Method */}
            <div className="bg-secondary/20 p-6 rounded-xl">
              <h3 className="font-bold text-center mb-4 text-primary">タイミング法の流れ</h3>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
                <div className="bg-white p-4 rounded-lg shadow-sm text-center w-full md:w-auto">
                  <p className="font-bold mb-1">月経中</p>
                  <p className="text-xs text-muted-foreground">ホルモン検査</p>
                </div>
                <ArrowDown className="md:-rotate-90 text-primary/50" />
                <div className="bg-white p-4 rounded-lg shadow-sm text-center w-full md:w-auto">
                  <p className="font-bold mb-1">排卵前</p>
                  <p className="text-xs text-muted-foreground">卵胞チェック<br />排卵日予測</p>
                </div>
                <ArrowDown className="md:-rotate-90 text-primary/50" />
                <div className="bg-white border-2 border-primary/50 p-4 rounded-lg shadow-sm text-center w-full md:w-auto bg-primary/5">
                  <p className="font-bold mb-1 text-primary">タイミング</p>
                  <p className="text-xs text-muted-foreground">性交渉</p>
                </div>
                <ArrowDown className="md:-rotate-90 text-primary/50" />
                <div className="bg-white p-4 rounded-lg shadow-sm text-center w-full md:w-auto">
                  <p className="font-bold mb-1">排卵後</p>
                  <p className="text-xs text-muted-foreground">黄体ホルモン補充<br />(必要な場合)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: AIH */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">2</div>
            <h2 className="text-2xl font-bold text-primary">人工授精（AIH）</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              採取した精液を洗浄・濃縮し、元気な精子だけを子宮内に直接注入する方法です。<br />
              精子の数が少ない場合や、運動率が低い場合などに有効です。
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="font-bold text-blue-800 mb-2">メリット</h3>
                <ul className="space-y-2 text-sm text-blue-700">
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5" />精子が卵子に出会う距離を短縮できる</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5" />洗浄により良好な精子を選別できる</li>
                  <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 mt-0.5" />体への負担が比較的少ない</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="font-bold text-gray-800 mb-2">対象となる方</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>・軽度の男性不妊（精子減少症など）</li>
                  <li>・性交障害がある方</li>
                  <li>・タイミング法で妊娠に至らなかった方</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Step 3: ART */}
        <section>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">3</div>
            <h2 className="text-2xl font-bold text-primary">体外受精・顕微授精（ART）</h2>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <p className="text-muted-foreground mb-8 leading-relaxed">
              卵子を体外に取り出し（採卵）、精子と受精させてから、育った受精卵（胚）を子宮に戻す（移植）治療です。<br />
              より高度な技術を要しますが、高い妊娠率が期待できます。
            </p>

            {/* Diagram: ART Flow */}
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 bg-white border border-gray-200 p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded">Step 1</span>
                  <div className="text-4xl mb-2">💊</div>
                  <h4 className="font-bold mb-1">卵巣刺激</h4>
                  <p className="text-xs text-muted-foreground">排卵誘発剤を使用し<br />複数の卵子を育てます</p>
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded">Step 2</span>
                  <div className="text-4xl mb-2">💉</div>
                  <h4 className="font-bold mb-1">採卵・採精</h4>
                  <p className="text-xs text-muted-foreground">卵子を取り出し<br />精子を採取します</p>
                </div>
                <div className="flex-1 bg-white border border-gray-200 p-4 rounded-xl text-center relative">
                  <span className="absolute top-2 left-2 bg-gray-100 text-xs px-2 py-1 rounded">Step 3</span>
                  <div className="text-4xl mb-2">🧫</div>
                  <h4 className="font-bold mb-1">受精・培養</h4>
                  <p className="text-xs text-muted-foreground">体外受精または顕微授精で<br />受精させ育てます</p>
                </div>
                <div className="flex-1 bg-white border border-primary p-4 rounded-xl text-center relative shadow-md ring-2 ring-primary/10">
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs px-2 py-1 rounded">Step 4</span>
                  <div className="text-4xl mb-2">👶</div>
                  <h4 className="font-bold mb-1 text-primary">胚移植</h4>
                  <p className="text-xs text-muted-foreground">良好な胚を<br />子宮に戻します</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
