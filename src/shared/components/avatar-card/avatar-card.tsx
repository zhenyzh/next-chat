"use client";

import { Avatar, AvatarProps } from "@zhenyzh/common-ui/components";
import s from "./avatar-card.module.scss";

export function AvatarCard({ image, size = 40 }: AvatarProps) {
  return <Avatar image={image} size={size} className={s.avatarCard} />;
}
