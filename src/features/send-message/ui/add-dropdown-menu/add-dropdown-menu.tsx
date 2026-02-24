import React from "react";

import { Camera, CirclePlus, File } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";

import s from "./add-dropdown-menu.module.scss";

export function AddDropdownMenu() {
  const dropdownMenuItem = [
    { icon: <Camera />, label: "Добавить фото" },
    { icon: <File />, label: "Добавить файл" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.triggerMenu}>
        <CirclePlus className={s.pointer} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {dropdownMenuItem.map((item, i) => (
          <DropdownMenuItem key={i}>
            {item.icon}
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
