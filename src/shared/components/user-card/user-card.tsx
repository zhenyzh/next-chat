"use client";

import { Avatar, Box, Card, Typography } from "@zhenyzh/common-ui/components";
import UserIcon from "@/shared/assets/images/logo.svg";
import s from "./user-card.module.scss";
import { CheckCheck } from "lucide-react";
import clsx from "clsx";

export type UserCardProps = {
  name: string;
  message?: string;
  className?: string;
};

export function UserCard(props: UserCardProps) {
  const { name, message, className } = props;

  return (
    <Box className={clsx(s.container, className)}>
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
            <Typography variant="label" className={s.ellipsis}>
              {message}
            </Typography>
          )}
        </Box>
        <Box className={s.additionalInfo}>
          <Typography variant="label">{"11:34"}</Typography>
          <CheckCheck />
        </Box>
      </Box>
    </Box>
  );
}
