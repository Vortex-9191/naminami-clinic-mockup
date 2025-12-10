"use client"

import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { MapSection } from "@/components/clinic/MapSection"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

export default function FAQPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // フォーム送信処理（実装時に追加）
    alert("お問合せを受け付けました。")
  }

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
    <div className="flex flex-col">
      {/* Page Header */}
      <div className="bg-secondary/30 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-primary mb-4">よくある質問・お問合せ</h1>
          <p className="text-muted-foreground">ご不明な点がございましたら、お気軽にお問合せください</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-primary text-center mb-4">お問合せフォーム</h2>
            <p className="text-center text-muted-foreground mb-8">
              診療に関するご質問・ご相談は以下のフォームよりお送りください。<br />
              <span className="text-sm">※ 緊急の場合はお電話（03-5747-9330）にてご連絡ください。</span>
            </p>

            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-2xl">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="山田 花子"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    電話番号
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="090-1234-5678"
                  />
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-foreground mb-2">
                    お問合せ種別 <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="category"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors bg-white"
                  >
                    <option value="">選択してください</option>
                    <option value="初診について">初診について</option>
                    <option value="診療内容について">診療内容について</option>
                    <option value="費用について">費用について</option>
                    <option value="予約について">予約について</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    お問合せ内容 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="お問合せ内容をご記入ください"
                  />
                </div>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground">
                  ご入力いただいた個人情報は、お問合せへの回答にのみ使用いたします。
                  詳しくは<a href="/privacy" className="text-primary hover:underline">プライバシーポリシー</a>をご確認ください。
                </p>

                {/* Submit Button */}
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  送信する
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-2xl font-bold text-primary text-center mb-4">よくある質問</h2>
          <p className="text-center text-muted-foreground mb-12">患者様からよくいただくご質問をまとめました</p>

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
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* Bottom spacing for fixed buttons */}
      <div className="h-24 md:h-28"></div>
    </div>
  )
}
