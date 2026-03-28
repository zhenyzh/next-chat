import React from "react";
import { Camera, CirclePlus, File } from "lucide-react";
import {
  Button,
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
        <Button style={{ display: "contents" }} variant="outline">
          <CirclePlus className={s.pointer} />
        </Button>
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
