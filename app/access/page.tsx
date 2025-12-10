import { MapPin, Phone, Clock, Train, Car } from "lucide-react"

export default function AccessPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">アクセス</h1>
        <p className="text-muted-foreground">当院へのアクセス方法をご案内します。</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6" />
              クリニック情報
            </h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-lg mb-1">なみなみレディースクリニック</p>
                <p className="text-muted-foreground">
                  〒141-0022<br />
                  東京都品川区東五反田1-1-1<br />
                  五反田駅 東口より徒歩1分
                </p>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-bold text-xl text-primary">03-1234-5678</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Train className="w-6 h-6" />
              電車でお越しの方
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">JR</span>
                <span>山手線「五反田駅」東口より徒歩1分</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">地下鉄</span>
                <span>都営浅草線「五反田駅」A4出口より徒歩1分</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold shrink-0 mt-0.5">東急</span>
                <span>池上線「五反田駅」より徒歩2分</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
              <Car className="w-6 h-6" />
              お車でお越しの方
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              当院には専用駐車場がございません。<br />
              近隣のコインパーキングをご利用ください。<br />
              <span className="text-xs text-gray-400">※駐車料金のサービスは行っておりませんのでご了承ください。</span>
            </p>
          </div>
        </div>

        <div className="h-full min-h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
          {/* Map Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-muted-foreground">
            <div className="text-center">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-20" />
              <p className="text-lg font-medium">Google Map Area</p>
              <p className="text-sm opacity-60">Embed Google Maps iframe here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
