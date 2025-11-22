// lib/api/stations.ts

// NOTE: Supabase is not configured yet, so this file uses mock data.
// When Supabase env vars are set, replace the mock implementations with real queries.

export type Station = {
  id: string;
  nameKanji: string; // e.g. "新宿"
  nameRomaji: string; // e.g. "shinjuku-station"
  prefecture: string; // e.g. "tokyo"
  city: string; // e.g. "shinjuku-ku"
  slug: string; // same as nameRomaji, unique
};

export type Clinic = {
  id: string;
  name: string;
  slug: string;
  address: string;
  station: string; // station nameKanji for display
  specialties: string[];
  phone?: string | null;
  prefecture: string;
  city: string;
  walkingMinutes?: number; // distance from the station
  // other fields from existing ClinicCardProps are kept for compatibility
};

// Mock station list – replace with real Supabase query later
const mockStations: Station[] = [
  {
    id: "1",
    nameKanji: "新宿",
    nameRomaji: "shinjuku-station",
    prefecture: "tokyo",
    city: "shinjuku-ku",
    slug: "shinjuku-station",
  },
  {
    id: "2",
    nameKanji: "梅田",
    nameRomaji: "umeda-station",
    prefecture: "osaka",
    city: "kita-ku",
    slug: "umeda-station",
  },
];

// Mock clinic data – in a real project this would be fetched via a join on clinic_stations
const mockClinics: Clinic[] = [
  {
    id: "c1",
    name: "新宿クリニック",
    slug: "shinjuku-clinic",
    address: "東京都新宿区西新宿1-1-1",
    station: "新宿",
    specialties: ["内科", "産婦人科"],
    phone: "03-1234-5678",
    prefecture: "tokyo",
    city: "shinjuku-ku",
    walkingMinutes: 3,
  },
  {
    id: "c2",
    name: "梅田メディカルセンター",
    slug: "umeda-medical-center",
    address: "大阪府大阪市北区梅田1-2-3",
    station: "梅田",
    specialties: ["内科", "皮膚科"],
    phone: "06-9876-5432",
    prefecture: "osaka",
    city: "kita-ku",
    walkingMinutes: 5,
  },
];

/** Get a station by its slug (e.g. "shinjuku-station") */
export async function getStationBySlug(slug: string): Promise<Station | null> {
  // Replace with Supabase query when ready
  const station = mockStations.find((s) => s.slug === slug);
  return station ?? null;
}

/** Get clinics that belong to a station (by station id) */
export async function getClinicsByStation(
  stationId: string,
  filters?: { specialty?: string; maxWalkingMinutes?: number }
): Promise<Clinic[]> {
  // In a real implementation you would join clinic_stations and filter.
  // Here we filter the mock data.
  let clinics = mockClinics.filter((c) => {
    // match by station name (simplified)
    const station = mockStations.find((s) => s.id === stationId);
    return station && c.station === station.nameKanji;
  });

  if (filters?.specialty) {
    clinics = clinics.filter((c) => c.specialties.includes(filters.specialty!));
  }
  if (filters?.maxWalkingMinutes !== undefined) {
    clinics = clinics.filter(
      (c) => (c.walkingMinutes ?? 999) <= filters.maxWalkingMinutes!
    );
  }
  // Sort by walking minutes asc
  clinics.sort((a, b) => (a.walkingMinutes ?? 0) - (b.walkingMinutes ?? 0));
  return clinics;
}

/** Helper to generate static params for all stations */
export async function getAllStationSlugs(): Promise<
  { prefecture: string; city: string; stationSlug: string }[]
> {
  return mockStations.map((s) => ({
    prefecture: s.prefecture,
    city: s.city,
    stationSlug: s.slug,
  }));
}
