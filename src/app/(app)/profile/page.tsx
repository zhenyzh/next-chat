"use client";

import { AvatarCard, Message } from "@/shared/components";
import LogoIcon from "@/shared/assets/images/logo.svg";
export default function ProfilePage() {
  return (
    <>
      <AvatarCard image={LogoIcon.src} />
      <Message avatar={LogoIcon.src} text={"dffddf"} date="32" />
    </>
  );
}
