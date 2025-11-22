import React from "react";
import { Station } from "@/lib/api/stations";

interface StationHeaderProps {
  station: Station;
  clinicCount: number;
}

export default function StationHeader({ station, clinicCount }: StationHeaderProps) {
  return (
    <section className="bg-primary/5 py-12 md:py-20">
      <div className="container text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl mb-4">
          {station.nameKanji}駅周辺のクリニック一覧
        </h1>
        <p className="text-lg text-muted-foreground mb-2">
          {station.prefecture}・{station.city}エリアの{clinicCount}件のクリニックをご紹介します。
        </p>
        <p className="text-sm text-muted-foreground">
          駅から徒歩圏内の診療科や診療時間で比較できます。
        </p>
      </div>
    </section>
  );
}
