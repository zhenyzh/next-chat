"use client";

import { Bubble, Message, UserCard } from "@/shared/components";
import { formatDateDistanceToNow, formatSmartDate } from "@/shared/utils";
import LogoP from "@/shared/assets/images/logo.png";

export default function ProfilePage() {
  return (
    <>
      <UserCard
        name={"Сирафима Зайцева121212"}
        message={"Прикьнь тут такrfdfdfdfdfdfdfdfdfdfdfdfdfdfdfd"}
        date={formatSmartDate("Fri Jan 12 1992 16:02:57")}
      />
      <UserCard
        name={"Петр Иванов"}
        message={"(.)(.)"}
        date={formatSmartDate("Fri Jan 29 2026 16:02:57")}
        isReader={true}
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
