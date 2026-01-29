"use client";

import { Box, Card } from "@zhenyzh/common-ui/components";
import { AvatarWrapper } from "@/shared/components";
import s from "./bubble.module.scss";

type BubbleProps = {
  avatar?: string;
};

export function Bubble({ avatar }: BubbleProps) {
  return (
    <Card className={s.container}>
      {avatar && <AvatarWrapper image={avatar} />}
      <Box className={s.chatBubble}>
        <Box className={s.typingDots}>
          <Box as="span"></Box>
          <Box as="span"></Box>
          <Box as="span"></Box>
        </Box>
      </Box>
    </Card>
  );
}
