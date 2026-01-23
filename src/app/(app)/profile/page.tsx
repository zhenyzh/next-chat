"use client";

import { AvatarCard, Message } from "@/shared/components";
import LogoIcon from "@/shared/assets/images/logo.svg";
import LogoP from "@/shared/assets/images/logo.png";
export default function ProfilePage() {
  return (
    <>
      <AvatarCard image={LogoIcon.src} />
      <Message
        avatar={LogoP.src}
        text={"dffdd3322354554545454e455454545445545454544555454545432432432f"}
        date="32"
      />
    </>
  );
}
