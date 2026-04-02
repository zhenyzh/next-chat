import React from "react";
import { Image, CirclePlus, File } from "lucide-react";
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
    { icon: Image, label: "Добавить фото" },
    { icon: File, label: "Добавить файл" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.triggerMenu}>
        <Button className={s.button} variant="outline">
          <CirclePlus className={s.pointer} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuItem.map((item, i) => (
          <DropdownMenuItem key={i}>
            <item.icon />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
