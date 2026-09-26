# Persian RTL UI — v1.2.0

Persian RTL UI is an independent toolkit built for the practical needs of Persian and RTL web applications.

The project focuses on real Persian product requirements rather than reproducing a generic UI kit.

---

## راهنمای فارسی

**Persian RTL UI** یک Toolkit مستقل برای توسعه وب‌اپلیکیشن‌های فارسی و راست‌به‌چپ (RTL) است.

هدف پروژه این است که مشکلاتی را که در محصولات فارسی به‌صورت تکراری با آن‌ها روبه‌رو می‌شویم، به APIها و کامپوننت‌های قابل استفاده مجدد تبدیل کند.

### قابلیت‌های نسخه 1.2.0

- **PersianNumberInput** — دریافت و نرمال‌سازی اعداد فارسی و عربی
- **CurrencyInput** — ورود و نمایش مبلغ با پشتیبانی از تومان و ریال
- **IranPhoneInput** — نرمال‌سازی و اعتبارسنجی شماره موبایل ایران
- **NationalIdInput** — اعتبارسنجی کد ملی
- **JalaliDatePicker** — انتخاب تاریخ در تقویم جلالی
- Utilityهای فارسی و جلالی
- پشتیبانی هم‌زمان از RTL و LTR
- کامپوننت‌های پایه مانند Button، Input، Select، Modal و Tabs
- Demo برای بررسی قابلیت‌های اختصاصی فارسی

### نصب

برای استفاده به‌عنوان پکیج:

```bash
npm install persian-rtl-ui
```

### اجرای پروژه در حالت توسعه

ابتدا Node.js 20.19+ یا 22.12+ داشته باشید.

```bash
npm install
npm run dev
```

سپس Demo را در آدرس محلی Vite باز کنید.

### بررسی TypeScript و Build

```bash
npm run typecheck
npm run build
```

### نمونه استفاده

#### اعداد فارسی

```tsx
import { PersianNumberInput } from "persian-rtl-ui";

<PersianNumberInput
  defaultValue="۱۲۵۰۰۰۰"
  onChange={(value) => {
    console.log(value);
  }}
/>
```

#### تومان

```tsx
import { CurrencyInput } from "persian-rtl-ui";

<CurrencyInput
  unit="toman"
  onChange={(value) => {
    console.log(value);
  }}
/>
```

#### شماره موبایل ایران

```tsx
import { IranPhoneInput } from "persian-rtl-ui";

<IranPhoneInput
  onChange={(value, valid) => {
    console.log(value, valid);
  }}
/>
```

#### کد ملی

```tsx
import { NationalIdInput } from "persian-rtl-ui";

<NationalIdInput
  onChange={(value, valid) => {
    console.log(value, valid);
  }}
/>
```

#### تاریخ جلالی

```tsx
import { JalaliDatePicker } from "persian-rtl-ui";

<JalaliDatePicker
  onChange={(date) => {
    console.log(date);
  }}
/>
```

### هدف پروژه

در بسیاری از پروژه‌های فارسی، تاریخ، عدد، پول، شماره موبایل، کد ملی و جهت نمایش بخشی از نیاز اصلی محصول هستند، نه قابلیت‌های جانبی.

این پروژه تلاش می‌کند این نیازها را در قالب اجزای مشخص، قابل تست و قابل استفاده مجدد ارائه کند تا توسعه‌دهنده مجبور نباشد منطق مشابه را در هر پروژه دوباره پیاده‌سازی کند.

### اصل عدم کپی‌کاری

این پروژه به‌صورت مستقل توسعه داده می‌شود.

ما کامپوننت‌ها، هویت بصری، ساختار API یا مستندات پروژه‌های دیگر را کپی نمی‌کنیم. در صورت استفاده از یک dependency خارجی، آن dependency به‌عنوان زیرساخت استفاده می‌شود و پیاده‌سازی آن در این Repository بازتولید نمی‌شود.

جزئیات این سیاست در فایل زیر قرار دارد:

[docs/ORIGINALITY.md](docs/ORIGINALITY.md)

### مشارکت در پروژه

برای پیشنهاد قابلیت یا گزارش مشکل، یک Issue باز کنید و توضیح دهید:

1. مشکل یا نیاز واقعی چیست؟
2. چه ورودی و خروجی‌ای انتظار می‌رود؟
3. آیا رفتار موردنظر مخصوص فارسی/ایران/RTL است یا عمومی است؟

---

## Included in v1.2.0

- PersianNumberInput
- CurrencyInput with Toman/Rial support
- IranPhoneInput
- NationalIdInput
- JalaliDatePicker
- Persian and Jalali utilities
- RTL/LTR-friendly components
- A demo for Persian-specific features

## Goal

The goal is to improve the everyday development experience for Persian web applications. Dates, numbers, currency, phone numbers, national IDs, and directionality are treated as first-class product concerns.

## Originality

This project is developed independently. It does not copy component implementations or visual identities from other UI libraries.

See [docs/ORIGINALITY.md](docs/ORIGINALITY.md).

## Demo

The repository includes a runnable demo showing Persian number handling, Toman/Rial formatting, Iranian phone validation, national ID validation, Jalali dates, and RTL/LTR switching.

## Stack

React, TypeScript, Vite, Tailwind CSS, and jalaali-js.

## License

MIT
