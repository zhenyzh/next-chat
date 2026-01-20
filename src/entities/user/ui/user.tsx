import Image from "next/image";
import clsx from "clsx";
import { Card, Typography, Box } from "@zhenyzh/common-ui/components";
import UserIcon from "@/shared/assets/images/logo.png";
import s from "./user.module.scss";

export function User() {
  return (
    <Box className={clsx(s.container, s.content)}>
      <Image
        src={UserIcon}
        alt="user"
        width={60}
        height={60}
        className={s.userIcon}
      />
      <Card>
        <Typography variant="h2">Иван Сидоров</Typography>
        <Typography variant="label">Привет Маша пошли в кс</Typography>
      </Card>
    </Box>
  );
}
