"use client";

import clsx from "clsx";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { Box, Button } from "@zhenyzh/common-ui/components";
import { SmileIcon } from "@zhenyzh/common-ui/icons";
import { useMessageActions } from "../../model/store";
import { useTypingActions } from "@/features/typing/model/socket";
import s from "./emoji-smile.module.scss";

export function EmojiSmile() {
  const { appendEmoji } = useMessageActions();
  const { sendTyping } = useTypingActions();

  return (
    <Box className={s.container}>
      <Button className={s.button} variant="outline">
        <SmileIcon className={s.marginEmoji} />
      </Button>

      <Box className={clsx(s.positionPicker, s.block)}>
        <Picker
          data={data}
          locale="ru"
          previewPosition="none"
          theme="dark"
          searchPosition="none"
          onEmojiSelect={(emoji: { native: string }) => {
            appendEmoji(emoji.native);
            sendTyping();
          }}
        />
      </Box>
    </Box>
  );
}
