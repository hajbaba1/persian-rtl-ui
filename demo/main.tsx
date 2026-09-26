import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { Button, CurrencyInput, IranPhoneInput, JalaliDatePicker, Modal, NationalIdInput, PersianNumberInput, Select, Tabs } from '../src'
import '../src/styles/globals.css'

function App() {
  const [dir,setDir]=useState<'rtl'|'ltr'>('rtl')
  const [open,setOpen]=useState(false)
  const [phoneValid,setPhoneValid]=useState(false)
  const [idValid,setIdValid]=useState(false)
  const [date,setDate]=useState<{jy:number;jm:number;jd:number}|null>(null)
  return <div dir={dir} className="min-h-screen bg-zinc-50 text-zinc-950">
    <header className="border-b bg-white"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
      <div><p className="text-sm text-zinc-500">Persian RTL UI · v1.2.0</p><h1 className="mt-1 text-2xl font-bold">ابزارهای رابط برای محصولات فارسی</h1></div>
      <div className="flex gap-2"><Button variant="outline" size="sm" onClick={()=>setDir(dir==='rtl'?'ltr':'rtl')}>{dir.toUpperCase()}</Button><Button size="sm" onClick={()=>setOpen(true)}>Modal</Button></div>
    </div></header>
    <main className="mx-auto max-w-6xl space-y-6 px-5 py-10">
      <section className="rounded-3xl border bg-white p-7"><p className="max-w-3xl leading-8 text-zinc-600">نسخه ۱.۲ روی نیازهای واقعی محصولات فارسی تمرکز دارد: رقم‌های فارسی، پول ایران، شماره موبایل، کد ملی و تقویم جلالی.</p></section>
      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4 rounded-2xl border bg-white p-6"><h2 className="text-lg font-semibold">قابلیت‌های فارسی</h2>
          <PersianNumberInput defaultValue="1250000"/><CurrencyInput unit="toman" defaultValue="850000"/>
          <IranPhoneInput placeholder="۰۹۱۲۱۲۳۴۵۶۷" onChange={(_,v)=>setPhoneValid(v)}/><p className="text-xs text-zinc-500">شماره: {phoneValid?'معتبر':'نیاز به تکمیل'}</p>
          <NationalIdInput placeholder="کد ملی" onChange={(_,v)=>setIdValid(v)}/><p className="text-xs text-zinc-500">کد ملی: {idValid?'معتبر':'نیاز به تکمیل'}</p>
        </div>
        <div className="rounded-2xl border bg-white p-6"><h2 className="mb-5 text-lg font-semibold">تقویم جلالی</h2><JalaliDatePicker value={date} onChange={setDate}/></div>
      </section>
      <section className="rounded-2xl border bg-white p-6"><h2 className="mb-5 text-lg font-semibold">کامپوننت‌های پایه</h2>
        <div className="mb-6 flex flex-wrap gap-3"><Button>تأیید</Button><Button variant="secondary">ثانویه</Button><Button variant="outline">Outline</Button><Button variant="danger">حذف</Button></div>
        <div className="grid gap-5 md:grid-cols-2"><Select label="وضعیت" defaultValue="active" options={[{label:'فعال',value:'active'},{label:'غیرفعال',value:'inactive'}]}/><Tabs items={[{value:'one',label:'معرفی',content:<p>TypeScript-first و قابل استفاده در RTL و LTR.</p>},{value:'two',label:'دامنه',content:<p>قابلیت‌های ایرانی در لایه دامنه نگهداری می‌شوند.</p>}]}/></div>
      </section>
    </main>
    <Modal open={open} onClose={()=>setOpen(false)} title="Persian RTL UI"><p className="text-sm leading-7 text-zinc-600">این Demo قابلیت‌های عمومی و فارسی نسخه 1.2.0 را کنار هم نشان می‌دهد.</p></Modal>
  </div>
}
createRoot(document.getElementById('root')!).render(<StrictMode><App/></StrictMode>)