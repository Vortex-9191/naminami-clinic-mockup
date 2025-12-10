import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MapSection } from "@/components/clinic/MapSection"

export default function FAQPage() {
  const faqs = [
    {
      q: "初診の予約は必要ですか？",
      a: "はい、当院は完全予約制となっております。WEB予約システムよりご予約の上、ご来院ください。",
    },
    {
      q: "生理中でも受診できますか？",
      a: "はい、受診可能です。ホルモン検査など、生理中にしかできない検査もございますので、むしろ生理中の受診をお勧めする場合もあります。",
    },
    {
      q: "夫も一緒に受診した方が良いですか？",
      a: "はい、不妊治療はご夫婦での協力が不可欠ですので、可能な限りご夫婦での受診をお勧めしています。ただし、奥様お一人での受診ももちろん可能です。",
    },
    {
      q: "子供連れでの受診は可能ですか？",
      a: "申し訳ございませんが、当院では不妊治療専門クリニックという性質上、お子様連れでのご来院はご遠慮いただいております。ご理解とご協力をお願いいたします。",
    },
    {
      q: "クレジットカードは使えますか？",
      a: "はい、VISA、Mastercard、JCBなど主要なクレジットカードがご利用いただけます。",
    },
  ]

  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">よくある質問</h1>
        <p className="text-muted-foreground">患者様からよくいただくご質問をまとめました。</p>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary">
                <span className="text-primary font-bold mr-4">Q.</span>
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pl-8">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
