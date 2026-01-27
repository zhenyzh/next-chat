"use client";

import { AvatarWrapper, Message } from "@/shared/components";
import LogoIcon from "@/shared/assets/images/logo.svg";
import LogoP from "@/shared/assets/images/logo.png";
import { formatDateDistanceToNow } from "@/shared/utils";

export default function ProfilePage() {
  return (
    <>
      <AvatarWrapper image={LogoIcon.src} />
      <Message
        avatar={LogoP.src}
        user={{}}
        text={"Читал статью очень понравилась!"}
        date={formatDateDistanceToNow("Fri Jan 23 2026 16:02:57")}
      />
      <Message
        avatar={LogoP.src}
        user={{}}
        text={"Приколвоаовыаровароаролыващшуокавыстаривпртвлаьулдлвылоа"}
        date={formatDateDistanceToNow("Fri Jan 26 2026 16:02:57")}
        isMe
      />
    </>
  );
}
