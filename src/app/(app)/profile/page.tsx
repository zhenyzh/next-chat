"use client";

import { AvatarWrapper, Message } from "@/shared/components";
import LogoIcon from "@/shared/assets/images/logo.svg";
import LogoP from "@/shared/assets/images/logo.png";

export default function ProfilePage() {
  return (
    <>
      <AvatarWrapper image={LogoIcon.src} />
      <Message
        avatar={LogoP.src}
        user={{}}
        text={"Читал статью очень понравилась!"}
        date=" вчера, 10:23"
      />
    </>
  );
}
