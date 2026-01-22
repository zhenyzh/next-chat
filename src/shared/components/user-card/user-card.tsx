"use client";

import Link from "next/link";
import { Card, Typography } from "@zhenyzh/common-ui/components";
import { AvatarCard } from "@/shared/components";
import UserIcon from "@/shared/assets/images/logo.svg";
import s from "./user-card.module.scss";

export type UserCardProps = {
  name: string;
  message?: string;
  size?: number;
  defaultLink?: string;
};

export function UserCard(props: UserCardProps) {
  const { name, message, size = 60, defaultLink = "" } = props;

  return (
    <Link href={defaultLink} className={s.container}>
      <AvatarCard image={UserIcon.src} size={size} />
      <Card className={s.cardContent}>
        <Typography variant="h2" className={s.ellipsis}>
          {name}
        </Typography>
        {message && (
          <Typography variant="label" className={s.ellipsis}>
            {message}
          </Typography>
        )}
      </Card>
    </Link>
  );
}
