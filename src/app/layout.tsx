import type { Metadata } from "next";
import "@zhenyzh/common-ui/styles";
import "./themas/global.scss";
import Provider from "./providers";
import Logo from "@/shared/assets/images/logo.svg";

export const metadata: Metadata = {
  title: "Next chat",
  description: "next app chat",
  icons: {
    icon: Logo.src,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
