import React from "react";
import clsx from "clsx";
import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";
import { patchUrl } from "@/shared/configs";
import s from "./card-preview.module.scss";

export type UserCardPreviewsProps = {
  name: string;
  avatarUrl?: string;
  isOnline?: boolean;
  rightInfoSlot?: React.ReactNode;
  subInfoSlot?: React.ReactNode;
};

export function CardPreview({
  name,
  avatarUrl,
  rightInfoSlot, // дата, метка, кнопка
  subInfoSlot, // сообщение, статус прочтения, иконки
  isOnline = false,
}: UserCardPreviewsProps) {
  return (
    <Box className={s.content}>
      <Avatar
        image={patchUrl(avatarUrl)}
        variant="cropped"
        size={55}
        className={clsx(s.avatar, isOnline && s.online)}
      />
      <Box className={s.infoSection}>
        <Box className={s.basicInfo}>
          <Typography variant="h2" className={s.ellipsis}>
            {name}
          </Typography>

          {rightInfoSlot}
        </Box>

        {subInfoSlot}
      </Box>
    </Box>
  );
}
