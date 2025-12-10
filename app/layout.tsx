import { Noto_Sans_JP, Zen_Maru_Gothic } from "next/font/google"
import { Suspense } from "react"
import { Header } from "@/components/clinic/Header"
import { Footer } from "@/components/clinic/Footer"
import "./globals.css"

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  display: "swap",
})

const zenMaruGothic = Zen_Maru_Gothic({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-zen-maru-gothic",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`font-sans ${notoSansJP.variable} ${zenMaruGothic.variable} antialiased font-['Noto_Sans_JP',_sans-serif]`}>
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
