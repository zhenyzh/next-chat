"use client";

import { Bubble, Message, UserCard } from "@/shared/components";
import LogoP from "@/shared/assets/images/logo.png";
import { formatDateDistanceToNow } from "@/shared/utils";

export default function ProfilePage() {
  return (
    <>
      <UserCard
        name={"Сирафима Зайцева121212"}
        message={"Прикьнь тут такrfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd"}
        date={formatDateDistanceToNow("Fri Jan 26 2026 16:02:57", false)}
      />
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
      <Bubble avatar={LogoP.src} />
    </>
  );
}
