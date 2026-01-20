import type { Metadata } from "next";
import "@zhenyzh/common-ui/styles";
import "./themas/global.scss";
import { Sidebar } from "@/widgets";
import s from "./layout.module.scss";

export const metadata: Metadata = {
  title: "Next chat",
  description: "next app chat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={s.container}>
        <Sidebar />
        <main className={s.main}>{children}</main>
      </body>
    </html>
  );
}
