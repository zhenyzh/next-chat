"use client";

import React from "react";
import clsx from "clsx";
import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";

import AvatarIcon from "@/shared/assets/images/download.jpg";
import s from "./user-card-previews.module.scss";

export type UserCardPreviewsProps = {
  name: string;
  avatarUrl?: string;
  rightInfoSlot?: React.ReactNode;
  subInfoSlot?: React.ReactNode;
  status?: "online" | "offline";
};

export function UserCardPreviews({
  name,
  avatarUrl,
  rightInfoSlot, // дата, метка, кнопка
  subInfoSlot, // сообщение, статус прочтения, иконки
  status,
}: UserCardPreviewsProps) {
  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Avatar
          image={avatarUrl || AvatarIcon.src}
          variant="cropped"
          size={55}
          className={clsx(s.avatar, status === "online" && s.online)}
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
    </Box>
  );
}
