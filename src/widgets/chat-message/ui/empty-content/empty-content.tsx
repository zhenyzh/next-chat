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
          Кликните на человека из списка чтобы увидеть чат
        </Typography>
      )}
      {hasChatId && (
        <Typography variant="label" className={s.text}>
          У вас еще нету диалога с этим человеком
        </Typography>
      )}
    </Box>
  );
}
