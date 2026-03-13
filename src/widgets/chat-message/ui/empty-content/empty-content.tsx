import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./empty-content.module.scss";

type EmptyContentProps = {
  hasMessages: boolean;
  hasChatId: boolean;
};

export function EmptyContent({ hasMessages, hasChatId }: EmptyContentProps) {
  return (
    <Box className={s.container}>
      {!hasMessages && !hasChatId && (
        <Typography variant="label" className={s.text}>
          Кликните на список чтобы увидеть чат
        </Typography>
      )}
      {hasChatId && (
        <Typography variant="label" className={s.text}>
          У вас еще нет диалога
        </Typography>
      )}
    </Box>
  );
}
