"use client";

import dynamic from "next/dynamic";
import clsx from "clsx";
import { Smile } from "lucide-react";

import { Box } from "@zhenyzh/common-ui/components";

import { useMessageActions } from "@/features/send-message/model/store";

import s from "../containers/send-message.module.scss";

const EmojiPicker = dynamic(() => import("emoji-picker-react"), { ssr: false });

export function EmojiSmile() {
  const { appendEmoji } = useMessageActions();

  return (
    <Box className={s.container}>
      <Smile className={clsx(s.pointer, s.marginEmoji)} />
      <Box className={clsx(s.positionPicker, s.block)}>
        <EmojiPicker
          onEmojiClick={(emojiData) => {
            appendEmoji(emojiData.emoji);
          }}
        />
      </Box>
    </Box>
  );
}
