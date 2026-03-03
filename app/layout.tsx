import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "NAIRA - African AI & XR Excellence Hub",
  description: "NAIRA transforms education and innovation through AI and XR technologies, embedding African knowledge systems into global tech solutions.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" class="scroll-smooth">
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100 font-sans antialiased selection:bg-indigo-500 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
