import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";
import { ImageIcon, CirclePlusIcon, FileIcon } from "@zhenyzh/common-ui/icons";
import s from "./add-dropdown-menu.module.scss";

export function AddDropdownMenu() {
  const dropdownMenuItem = [
    { icon: ImageIcon, label: "Добавить фото" },
    { icon: FileIcon, label: "Добавить файл" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={s.triggerMenu}>
        <Button className={s.button} variant="outline">
          <CirclePlusIcon className={s.pointer} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuItem.map((item, i) => (
          <DropdownMenuItem key={i}>
            <item.icon />
            <Box as="span">{item.label}</Box>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
