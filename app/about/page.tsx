import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-primary mb-6">院長ご挨拶</h1>
          <p className="text-xl leading-relaxed font-medium text-foreground">
            「妊娠したい」という想いに、<br />
            誠心誠意お応えします。
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-start mb-16">
          <div className="w-full md:w-1/3 aspect-[3/4] bg-gray-200 rounded-2xl relative overflow-hidden shadow-md">
            {/* Placeholder for Doctor's Image */}
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-muted-foreground">
              <span className="opacity-50">Doctor Image</span>
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl font-bold text-primary">
              院長 <span className="text-foreground ml-2">波並 太郎</span>
            </h2>
            <p className="text-muted-foreground leading-loose">
              不妊治療は、身体的な負担だけでなく、精神的な負担も大きい治療です。<br />
              私たちは、最新の医療技術を提供するだけでなく、患者様の心に寄り添い、安心して治療を受けていただける環境づくりを大切にしています。<br />
              <br />
              「赤ちゃんが欲しい」という切実な願いを叶えるため、スタッフ一丸となってサポートさせていただきます。<br />
              どんな些細なことでも、お気軽にご相談ください。
            </p>

            <div className="bg-secondary/20 p-6 rounded-xl mt-8">
              <h3 className="font-bold text-primary mb-4">経歴</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-4"><span className="font-bold w-20">2000年</span><span>〇〇大学医学部 卒業</span></li>
                <li className="flex gap-4"><span className="font-bold w-20">2000年</span><span>〇〇大学病院 産婦人科 入局</span></li>
                <li className="flex gap-4"><span className="font-bold w-20">2010年</span><span>〇〇レディースクリニック 副院長</span></li>
                <li className="flex gap-4"><span className="font-bold w-20">2024年</span><span>なみなみレディースクリニック 開院</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-primary mb-8">当院の理念</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "安心", desc: "心に寄り添う温かい医療" },
              { title: "信頼", desc: "科学的根拠に基づいた治療" },
              { title: "希望", desc: "最新技術で可能性を広げる" },
            ].map((item, i) => (
              <div key={i}>
                <div className="text-primary font-bold text-xl mb-2">{item.title}</div>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
