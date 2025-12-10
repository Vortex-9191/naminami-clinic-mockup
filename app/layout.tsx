import { Zen_Kaku_Gothic_Antique } from "next/font/google"
import { Suspense } from "react"
import { Header } from "@/components/clinic/Header"
import { Footer } from "@/components/clinic/Footer"
import "./globals.css"

const zenKakuGothicAntique = Zen_Kaku_Gothic_Antique({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-kaku-gothic-antique",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKakuGothicAntique.className} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Suspense>
      </body>
    </html>
  )
}
