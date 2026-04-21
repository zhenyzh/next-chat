import React from "react";
import clsx from "clsx";
import {
  type AvatarVariant,
  Avatar,
  Box,
  Typography,
} from "@zhenyzh/common-ui/components";
import s from "./card-preview.module.scss";

export type UserCardPreviewsProps = {
  title: string;
  url: string | undefined | null;
  variantUrl?: AvatarVariant;
  isOnline?: boolean;
  classNameContainer?: string;
  classNameTitle?: string;
  rightInfoSlot?: React.ReactNode;
  subInfoSlot?: React.ReactNode;
};

export function CardPreview({
  title,
  url,
  variantUrl = "cropped",
  classNameContainer,
  classNameTitle,
  rightInfoSlot, // дата, метка, кнопка
  subInfoSlot, // сообщение, статус прочтения, иконки
  isOnline = false,
}: UserCardPreviewsProps) {
  return (
    <Box className={clsx(s.content, classNameContainer)}>
      <Avatar
        image={url}
        variant={variantUrl}
        size={55}
        className={clsx(s.avatar, isOnline && s.online)}
      />
      <Box className={s.infoSection}>
        <Box className={s.basicInfo}>
          <Typography variant="h2" className={clsx(s.ellipsis, classNameTitle)}>
            {title}
          </Typography>

          {rightInfoSlot}
        </Box>

        {subInfoSlot}
      </Box>
    </Box>
  );
}
