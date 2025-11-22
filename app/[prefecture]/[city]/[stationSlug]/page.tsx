import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import StationHeader from "@/components/station-header";
import Breadcrumbs from "@/components/breadcrumbs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getStationBySlug, getClinicsByStation, getAllStationSlugs } from "@/lib/api/stations";
import { notFound } from "next/navigation";
import { ClinicCard } from "@/components/clinic-card"; // existing component

// Types from API
import type { Station, Clinic } from "@/lib/api/stations";

// Generate static params for ISR (popular stations)
export async function generateStaticParams() {
  const slugs = await getAllStationSlugs();
  return slugs.map((s) => ({
    prefecture: s.prefecture,
    city: s.city,
    stationSlug: s.stationSlug,
  }));
}

// SEO metadata
export async function generateMetadata({ params }: { params: { prefecture: string; city: string; stationSlug: string } }) {
  const station = await getStationBySlug(params.stationSlug);
  if (!station) return {};
  const title = `${station.nameKanji}駅周辺のクリニック一覧 | 低用量ピル.com`;
  const description = `${station.nameKanji}駅から徒歩圏内のクリニックを${station.prefecture}・${station.city}エリアで比較できます。内科・小児科・皮膚科などの診療科や診療時間で絞り込み可能です。`;
  return {
    title,
    description,
    // Open Graph / Twitter could be added here
  };
}

interface Props {
  params: { prefecture: string; city: string; stationSlug: string };
}

export default async function StationPage({ params }: Props) {
  const station = await getStationBySlug(params.stationSlug);
  if (!station) notFound();

  // For now, no filters applied – fetch all clinics for the station
  const clinics: Clinic[] = await getClinicsByStation(station.id);

  // Breadcrumb items
  const breadcrumbItems = [
    { href: "/", label: "ホーム" },
    { href: `/${station.prefecture}/`, label: station.prefecture },
    { href: `/${station.prefecture}/${station.city}/`, label: station.city },
    { href: `/${station.prefecture}/${station.city}/${station.slug}/`, label: `${station.nameKanji}駅` },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <StationHeader station={station} clinicCount={clinics.length} />
      {/* Simple filter bar placeholder */}
      <section className="bg-white py-4 border-b border-border">
        <div className="container flex flex-wrap items-center gap-4 justify-center">
          {/* Add real filter components later */}
          <Button variant="outline" size="sm">診療科で絞り込み</Button>
          <Button variant="outline" size="sm">徒歩分数で絞り込み</Button>
          <Button variant="outline" size="sm">オンライン診療</Button>
        </div>
      </section>
      {/* Clinic list */}
      <main className="flex-1 bg-background py-8">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {clinics.map((clinic) => (
            <ClinicCard
              key={clinic.id}
              clinic={{
                id: clinic.id,
                name: clinic.name,
                slug: clinic.slug,
                address: clinic.address,
                station: clinic.station,
                specialties: clinic.specialties,
                phone: clinic.phone ?? null,
                prefecture: clinic.prefecture,
                city: clinic.city,
                // walkingMinutes is not part of original props; we can pass via custom prop if needed
                // For now, we just display via extra info inside CardContent if needed
              }}
            />
          ))}
        </div>
      </main>
      {/* FAQ Section */}
      <section className="bg-secondary/30 py-12">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">{station.nameKanji}駅周辺のよくある質問</h2>
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="font-bold mb-2">{station.nameKanji}駅近くで内科を探すポイントは？</h3>
              <p className="text-muted-foreground">駅から徒歩5分以内の内科クリニックは、通勤・通学の合間に受診しやすくおすすめです。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="font-bold mb-2">仕事帰りに通えるクリニックはありますか？</h3>
              <p className="text-muted-foreground">夜間診療や土日診療を実施しているクリニックは、駅から徒歩10分以内に多数あります。</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-border">
              <h3 className="font-bold mb-2">オンライン診療は利用できますか？</h3>
              <p className="text-muted-foreground">対応クリニックはカードに「Web予約可」や「オンライン診療可」のバッジが表示されます。</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl font-bold mb-6">さっそくクリニックを探す</h2>
          <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full" asChild>
            <Link href="/search">検索ページへ</Link>
          </Button>
        </div>
      </section>
      <Footer />
    </div>
  );
}
