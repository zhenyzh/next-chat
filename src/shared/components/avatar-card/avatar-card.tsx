"use client";

import { Avatar, AvatarProps } from "@zhenyzh/common-ui/components";
import s from "./avatar-card.module.scss";

export function AvatarCard({ image, size }: AvatarProps) {
  return <Avatar image={image} size={size} className={s.avatarCard} />;
}
