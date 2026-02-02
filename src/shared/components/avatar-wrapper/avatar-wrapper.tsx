"use client";

import clsx from "clsx";
import { Avatar, AvatarProps } from "@zhenyzh/common-ui/components";
import s from "./avatar-wrapper.module.scss";

export function AvatarWrapper({ image, size, className }: AvatarProps) {
  return (
    <Avatar
      image={image}
      size={size}
      className={clsx(s.avatarCard, className)}
    />
  );
}
