"use client";

import { Bubble, Message, UserCard } from "@/shared/components";
import { formatDateDistanceToNow, formatSmartDate } from "@/shared/utils";
import LogoP from "@/shared/assets/images/logo.png";

export default function ProfilePage() {
  return (
    <>
      <UserCard
        name={"Сирафима Зайцевdffddffdfddfdfdfdf"}
        message={"Прикьнь тут такrfdfddfffffffffffffffffffffff"}
        date={formatSmartDate("Fri Jan 12 1992 16:02:57")}
      />
      <UserCard
        name={"Петр Иванов3223323dffddfdfdffd"}
        message={"fdjgjkfdkgfgifjiosdjp43erererererererer"}
        date={formatSmartDate("Fri Jan 30 2026 10:32:16")}
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
        date={formatDateDistanceToNow("Fri Jan 30 2026 10:32:16")}
        isMe
      />
      <Bubble />
    </>
  );
}
