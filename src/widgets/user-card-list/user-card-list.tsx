import { Box } from "@zhenyzh/common-ui/components";

import { ScrollBar } from "@/shared/ui";
import { formatSmartDate } from "@/shared/utils";

import s from "./user-card-list.module.scss";

export function UserCardList() {
  return (
    <Box className={s.container}>
      <ScrollBar>
        {Array.from({ length: 20 }, (_, i) => (
          <Box key={i} className={s.userCard}>
            {/*<UserCard*/}
            {/*  name={"Иванов Иван"}*/}
            {/*  message={*/}
            {/*    "Прикьнь тут такrfdfddfffffffffffffffffffffffdsssssssssssssssssssssssssss"*/}
            {/*  }*/}
            {/*  date={formatSmartDate("Fri Jan 12 1992 16:02:57")}*/}
            {/*/>*/}
          </Box>
        ))}
      </ScrollBar>
    </Box>
  );
}
