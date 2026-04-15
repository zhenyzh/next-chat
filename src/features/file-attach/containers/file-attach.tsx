import clsx from "clsx";
import { Box, Avatar, Card, Typography } from "@zhenyzh/common-ui/components";
import { CloseIcon } from "@zhenyzh/common-ui/icons";
import { ScrollBar } from "@/shared/ui";
import s from "./file-attach.module.scss";

export function FileAttach() {
  return (
    <Box className={s.wrapper}>
      <CloseIcon className={s.closeIconContainer} />
      <ScrollBar variant="horizontal" className={s.scrollHorizontal}>
        <Card className={s.card}>
          <CloseIcon className={s.closeIconContainer2} />
          <Avatar
            variant="whole"
            className={s.image}
            size={80}
            image={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGRPzn7p0iresNG3SRxzEciTvOxDJeZT2EQ&s"
            }
          />
          <Typography variant="label" className={clsx(s.label, s.ellipsis)}>
            Презентация
          </Typography>
          <Typography variant="caption" className={clsx(s.caption, s.ellipsis)}>
            4.7MB
          </Typography>
        </Card>
      </ScrollBar>
    </Box>
  );
}
