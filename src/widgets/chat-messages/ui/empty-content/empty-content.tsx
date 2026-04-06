import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./empty-content.module.scss";

export function EmptyContent() {
  return (
    <Box className={s.container}>
      <Typography variant="label" className={s.text}>
        Кликните на список чтобы увидеть чат
      </Typography>
    </Box>
  );
}
