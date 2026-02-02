import React from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { Message, ScrollBar } from "@/shared/components";
import { formatDateDistanceToNow } from "@/shared/utils";
import s from "./messange-list.module.scss";
import LogoP from "@/shared/assets/images/logo.png";

export function MessangeList() {
  return (
    <Box className={s.container}>
      <ScrollBar>
        {Array.from({ length: 20 }, (_, i) => (
          <React.Fragment key={i}>
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
          </React.Fragment>
        ))}
      </ScrollBar>
    </Box>
  );
}
