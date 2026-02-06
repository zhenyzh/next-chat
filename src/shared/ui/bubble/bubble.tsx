"use client";

import clsx from "clsx";
import { Box } from "@zhenyzh/common-ui/components";
import s from "./bubble.module.scss";

type BubbleProps = {
  withTail?: boolean;
};

export function Bubble({ withTail = false }: BubbleProps) {
  return (
    <Box className={clsx(s.chatBubble, withTail && s.withTail)}>
      <Box className={s.typingDots}>
        <Box as="span"></Box>
        <Box as="span"></Box>
        <Box as="span"></Box>
      </Box>
    </Box>
  );
}
