import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ChevronRight, MapPin, Navigation } from "lucide-react"
import { getClinicsCountByPrefecture, REGIONS, PREFECTURE_SLUGS } from "@/lib/api/locations"

// Force dynamic rendering to ensure fresh data
export const dynamic = 'force-dynamic'

export const metadata = {
  title: "エリアから探す - 都道府県別クリニック一覧 | ピルミライ",
  description: "全国47都道府県の低用量ピル処方クリニックを地域から検索できます。お住まいの地域や職場近くのクリニックを探せます。",
}

export default async function AreasPage() {
  const counts = await getClinicsCountByPrefecture()

  const regionsWithData = REGIONS.map(region => ({
    name: region.name,
    prefectures: region.prefectures.map(prefName => ({
      name: prefName,
      slug: PREFECTURE_SLUGS[prefName] || 'unknown',
      count: counts[prefName] || 0
    }))
  }))

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <Header />
      <main className="flex-1">
        {/* Breadcrumbs */}
        <div className="bg-white pt-3 px-4 md:px-8 text-xs font-bold text-slate-400 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="cursor-pointer hover:text-rose-500 transition-colors">TOP</Link>
          <ChevronRight size={10} />
          <span className="text-slate-800">エリア一覧</span>
        </div>

        {/* Hero Header with Gradient */}
        <div className="relative bg-gradient-to-r from-rose-50 to-indigo-50 px-4 md:px-8 py-12 border-b border-rose-100 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rose-500 text-white p-3 rounded-2xl shadow-lg shadow-rose-200">
                <MapPin size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-800 md:text-4xl">エリアから探す</h1>
                <p className="text-slate-500 text-sm font-medium mt-1">都道府県別にクリニックを検索</p>
              </div>
            </div>
            <p className="text-slate-600 max-w-2xl font-medium">
              全国47都道府県の低用量ピル処方クリニックを地域から検索できます
            </p>
          </div>
        </div>

        {/* Regions */}
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="space-y-12">
            {regionsWithData.map((region) => (
              <div key={region.name} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-100">
                <h2 className="mb-6 text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3 border-b border-slate-100 pb-4">
                  <Navigation size={24} className="text-rose-500" />
                  {region.name}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {region.prefectures.map((prefecture) => (
                    <Link
                      key={prefecture.slug}
                      href={`/areas/${prefecture.slug}`}
                      className="group"
                    >
                      <div className="h-full rounded-xl border border-slate-200 bg-white transition-all hover:border-rose-300 hover:shadow-lg hover:-translate-y-1 hover:bg-rose-50/30">
                        <div className="flex items-center justify-between p-4">
                          <div className="flex items-center gap-3 flex-1">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-100 text-rose-500 transition-colors group-hover:bg-rose-500 group-hover:text-white">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h3 className="text-base font-bold text-slate-800 group-hover:text-rose-600 transition-colors truncate">
                                {prefecture.name}
                              </h3>
                              <p className="text-xs text-slate-500 font-medium">
                                {prefecture.count > 0 ? `${prefecture.count}件` : '準備中'}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-rose-500 transition-colors flex-shrink-0" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Info Box */}
          <div className="mt-12 bg-gradient-to-br from-rose-50 to-indigo-50 rounded-2xl p-6 md:p-8 border border-rose-100">
            <h3 className="font-bold text-lg text-slate-800 mb-3">エリア検索について</h3>
            <div className="space-y-2 text-sm text-slate-600">
              <p>• 各都道府県をクリックすると、その地域のクリニック一覧が表示されます</p>
              <p>• 市区町村や駅名でさらに絞り込むことができます</p>
              <p>• お住まいの地域や職場の近くで通いやすいクリニックを探せます</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
