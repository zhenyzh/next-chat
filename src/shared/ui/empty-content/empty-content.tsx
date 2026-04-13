import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./empty-content.module.scss";

type Props = {
  label: string;
};

export function EmptyContent({ label }: Props) {
  return (
    <Box className={s.container}>
      <Typography variant="label" className={s.text}>
        {label}
      </Typography>
    </Box>
  );
}
