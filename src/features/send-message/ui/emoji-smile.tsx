"use client";

import clsx from "clsx";
import { Smile } from "lucide-react";
import EmojiPicker from "@emoji-mart/react";

import { Box } from "@zhenyzh/common-ui/components";

import { useMessageActions } from "@/features/send-message/model/store";

import s from "../containers/send-message.module.scss";

export function EmojiSmile() {
  const { appendEmoji } = useMessageActions();

  return (
    <Box className={s.container}>
      <Smile className={clsx(s.pointer, s.marginEmoji)} />
      <Box className={clsx(s.positionPicker, s.block)}>
        <EmojiPicker
          locale="ru"
          previewPosition="none"
          theme="dark"
          searchPosition="none"
          onEmojiSelect={(emoji: { native: string }) => {
            appendEmoji(emoji.native);
          }}
        />
      </Box>
    </Box>
  );
}
