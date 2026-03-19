"use client";

import clsx from "clsx";
import { Smile } from "lucide-react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Box } from "@zhenyzh/common-ui/components";
import { useMessageActions } from "../../model/store";
import s from "./emoji-smile.module.scss";

export function EmojiSmile() {
  const { appendEmoji } = useMessageActions();

  return (
    <Box className={s.container}>
      <Smile className={clsx(s.pointer, s.marginEmoji)} />
      <Box className={clsx(s.positionPicker, s.block)}>
        <Picker
          data={data}
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
