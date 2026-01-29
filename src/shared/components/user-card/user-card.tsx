"use client";

import { Avatar, Box, Typography } from "@zhenyzh/common-ui/components";
import UserIcon from "@/shared/assets/images/logo.svg";
import s from "./user-card.module.scss";
import { CheckCheck } from "lucide-react";

export type UserCardProps = {
  name: string;
  message?: string;
  date?: string;
  isReader?: boolean;
  count?: number;
};

export function UserCard(props: UserCardProps) {
  const { name, message, date, isReader, count = 3 } = props;

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
            <Typography variant="label" className={s.ellipsis}>
              {message}
            </Typography>
          )}
        </Box>
        <Box className={s.additionalInfo}>
          <Typography variant="label">{date}</Typography>
          {isReader ? (
            <CheckCheck />
          ) : (
            <Box className={s.roundetContainer}>
              <Typography className={s.textRoundet}>
                {count > 99 ? "99+" : count}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
