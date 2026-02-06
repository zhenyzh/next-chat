"use client";

import React from "react";
import clsx from "clsx";
import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";

import s from "./user-previews.module.scss";

export type ProfilePreviewsProps = {
  name: string;
  avatarUrl?: string;
  rightInfoSlot?: React.ReactNode;
  subInfoSlot?: React.ReactNode;
  status?: "online" | "offline";
};

export function UserPreviews({
  name,
  avatarUrl,
  rightInfoSlot, // дата, метка, кнопка
  subInfoSlot, // сообщение, статус прочтения, иконки
  status,
}: ProfilePreviewsProps) {
  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Avatar
          image={avatarUrl}
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

          {subInfoSlot && (
            <Box className={clsx(s.basicInfo, s.additionalInfo)}>
              {subInfoSlot}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
