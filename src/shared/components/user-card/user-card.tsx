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

export function UserCard({ name, message, date, isReader }: UserCardProps) {
  return (
    <Box className={s.container}>
      <Box className={s.content}>
        <Avatar
          image={UserIcon.src}
          variant="whole"
          size={65}
          className={s.avatar}
        />

        <Box className={s.infoSection}>
          <Box className={s.basicInfo}>
            <Typography variant="h2" className={s.ellipsis}>
              {name}
            </Typography>
            {date && (
              <Typography variant="label" className={s.date}>
                {date}
              </Typography>
            )}
          </Box>

          {message && (
            <Box className={clsx(s.basicInfo, s.additionalInfo)}>
              <Typography variant="label" className={s.ellipsis}>
                {message}
              </Typography>
              <Box className={s.additionalInfo}>
                {isReader ? <CheckCheck /> : <UnreadIndicator />}
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
