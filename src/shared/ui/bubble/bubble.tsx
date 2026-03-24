"use client";

import { Box } from "@zhenyzh/common-ui/components";
import s from "./bubble.module.scss";

export function Bubble() {
  return (
    <Box className={s.chatBubble}>
      <Box className={s.typingDots}>
        <Box as="span"></Box>
        <Box as="span"></Box>
        <Box as="span"></Box>
      </Box>
    </Box>
  );
}
