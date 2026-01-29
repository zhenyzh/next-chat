"use client";

import { CheckCheck } from "lucide-react";
import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";
import { UnreadIndicator } from "@/shared/components";
import UserIcon from "@/shared/assets/images/logo.svg";
import s from "./user-card.module.scss";
import clsx from "clsx";

export type UserCardProps = {
  name: string;
  message?: string;
  date?: string;
  isReader?: boolean;
};

export function UserCard(props: UserCardProps) {
  const { name, message, date, isReader } = props;

  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Avatar
          image={UserIcon.src}
          variant="whole"
          size={60}
          className={s.avatar}
        />
        <Box className={s.basicInfo}>
          <Typography variant="h2" className={s.ellipsis}>
            {name}
          </Typography>
          {message && (
            <Typography variant="label" className={clsx(s.message, s.ellipsis)}>
              {message}
            </Typography>
          )}
        </Box>
        <Box className={s.additionalInfo}>
          <Typography variant="label">{date}</Typography>
          {isReader ? <CheckCheck /> : <UnreadIndicator />}
        </Box>
      </Box>
    </Box>
  );
}
