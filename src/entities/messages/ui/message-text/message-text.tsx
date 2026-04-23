import Linkify from "react-linkify";
import { Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./message-text.module.scss";

export function MessageText({ text }: { text: string }) {
  const decorator = (href: string, text: string, key: number) => (
    <Box as="a" key={key} href={href} className={s.link}>
      {text}
    </Box>
  );

  return (
    <Typography variant="h3" className={s.text}>
      <Linkify componentDecorator={decorator}>{text}</Linkify>
    </Typography>
  );
}
