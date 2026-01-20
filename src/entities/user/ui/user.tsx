"use client";

import Image from "next/image";
import { Card, Typography, Box } from "@zhenyzh/common-ui/components";
import UserIcon from "@/shared/assets/images/logo.png";
import s from "./user.module.scss";

type Props = {
  name: string;
  message?: string;
  widthSize?: number;
  heightSize?: number;
};

export function User(props: Props) {
  const { name, message, widthSize = 60, heightSize = 60 } = props;

  return (
    <Box className={s.container}>
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
    </Box>
  );
}
