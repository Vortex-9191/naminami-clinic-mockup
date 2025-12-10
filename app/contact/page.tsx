import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-bold text-primary mb-4">お問い合わせ</h1>
        <p className="text-muted-foreground">
          診療内容に関するご質問は、こちらからお問い合わせください。<br />
          <span className="text-red-500 text-sm">※ご予約・変更はWEB予約システムをご利用ください。</span>
        </p>
      </div>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">お名前 <span className="text-red-500">*</span></Label>
            <Input id="name" placeholder="山田 花子" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">メールアドレス <span className="text-red-500">*</span></Label>
            <Input id="email" type="email" placeholder="example@email.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="tel">電話番号</Label>
            <Input id="tel" type="tel" placeholder="090-1234-5678" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">お問い合わせ項目 <span className="text-red-500">*</span></Label>
            <select id="category" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <option value="">選択してください</option>
              <option value="treatment">治療について</option>
              <option value="cost">費用について</option>
              <option value="other">その他</option>
            </select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">お問い合わせ内容 <span className="text-red-500">*</span></Label>
            <Textarea id="message" placeholder="ご質問内容をご記入ください" className="min-h-[150px]" required />
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white rounded-full h-12 text-lg">
              送信する
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
