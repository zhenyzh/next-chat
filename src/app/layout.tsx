import type { Metadata } from "next";
import { Sidebar } from "@/widgets";
import "./styles/global.scss";

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
      <body style={{ display: "flex" }}>
        <Sidebar />
        <main style={{ flex: 1, padding: "24px" }}>{children}</main>
      </body>
    </html>
  );
}
