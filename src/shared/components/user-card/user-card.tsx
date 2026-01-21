"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, Typography } from "@zhenyzh/common-ui/components";
import UserIcon from "@/shared/assets/images/logo.png";
import s from "./user-card.module.scss";

export type UserCardProps = {
  name: string;
  message?: string;
  widthSize?: number;
  heightSize?: number;
  defaultLink?: string;
};

export function UserCard(props: UserCardProps) {
  const {
    name,
    message,
    widthSize = 60,
    heightSize = 60,
    defaultLink = "",
  } = props;

  return (
    <Link href={defaultLink} className={s.container}>
      <Image
        src={UserIcon}
        alt="user"
        width={widthSize}
        height={heightSize}
        className={s.userIcon}
      />
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
