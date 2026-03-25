import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "สิทธินนท์ สุดแก้ว",
  description: "Backend Developer & Game Developer",
  icons: {
    icon: "/logo.jpg",
  },
  openGraph: {
    title: "สิทธินนท์ สุดแก้ว",
    description: "Backend Developer & Game Developer",
    url: "https://yoursite.me",
    siteName: "สิทธินนท์ สุดแก้ว",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="min-h-screen bg-bg text-text antialiased">
        <div className="relative flex flex-col min-h-screen">
          {/* Background gradient blobs */}
          <div
            aria-hidden
            className="pointer-events-none fixed inset-0 overflow-hidden"
          >
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/4 blur-[100px]" />
          </div>

          <Navbar />

          <main id="main-content" className="flex-1 relative z-10">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
