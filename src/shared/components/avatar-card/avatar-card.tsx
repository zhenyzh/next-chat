"use client";

import { Avatar, AvatarProps } from "@zhenyzh/common-ui/components";
import s from "./avatar-card.module.scss";

export function AvatarCard({ image, width = 40, height = 40 }: AvatarProps) {
  return (
    <Avatar
      image={image}
      width={width}
      height={height}
      className={s.avatarCard}
    />
  );
}
