# 🌐 Personal Portfolio — Next.js 15 + React 19

เว็บไซต์ Portfolio ส่วนตัวที่สร้างด้วย Next.js, Tailwind CSS, และ Framer Motion

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **Tailwind CSS 3**
- **Framer Motion 11**
- **Lucide React**
- **TypeScript**

## 🚀 เริ่มต้น

### 1. ติดตั้ง dependencies

```bash
npm install
```

### 2. รัน dev server

```bash
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) ในเบราว์เซอร์

### 3. Build สำหรับ production

```bash
npm run build
npm start
```

---

## 📁 โครงสร้างโปรเจกต์

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles + Tailwind
│   ├── aboutme/
│   │   └── page.tsx        # About Me page
│   ├── tools/
│   │   └── page.tsx        # Tools page
│   └── contacts/
│       └── page.tsx        # Contacts page
├── components/
│   ├── Navbar.tsx          # Navigation bar (sticky + mobile)
│   ├── Footer.tsx          # Footer with social links
│   └── FadeIn.tsx          # Reusable Framer Motion wrapper
├── tailwind.config.ts      # Custom colors, fonts, animations
└── package.json
```

---

## 🎨 Customization

### เปลี่ยนข้อมูลส่วนตัว

แก้ไขในไฟล์ `app/page.tsx`:
- ชื่อ, bio, location
- Social links

### เปลี่ยนสีธีม

แก้ไขใน `tailwind.config.ts`:
```ts
colors: {
  accent: "#7c6ff7",  // เปลี่ยนสีหลัก
  bg: "#0a0a0f",      // เปลี่ยน background
}
```

### เปลี่ยน Font

แก้ไขใน `app/globals.css`:
```css
@import url('https://fonts.googleapis.com/...');
```

---

## 🌐 Deploy บน Vercel

1. Push โค้ดขึ้น GitHub
2. ไปที่ [vercel.com](https://vercel.com) → Import Repository
3. กด Deploy — เสร็จ!

ซื้อ custom domain ได้ที่ Cloudflare หรือ Namecheap แล้วเชื่อมกับ Vercel ใน Settings
