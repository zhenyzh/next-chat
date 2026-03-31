import React from "react";
import clsx from "clsx";
import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";
import s from "./user-preview.module.scss";

export type UserCardPreviewsProps = {
  name: string;
  avatarUrl?: string;
  isOnline?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  rightInfoSlot?: React.ReactNode;
  subInfoSlot?: React.ReactNode;
};

export function UserPreview({
  name,
  avatarUrl,
  rightInfoSlot, // дата, метка, кнопка
  subInfoSlot, // сообщение, статус прочтения, иконки
  isOnline = false,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: UserCardPreviewsProps) {
  return (
    <Box className={s.content}>
      <Box
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Avatar
          image={avatarUrl}
          variant="cropped"
          size={55}
          className={clsx(s.avatar, isOnline && s.online)}
        />
      </Box>

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
