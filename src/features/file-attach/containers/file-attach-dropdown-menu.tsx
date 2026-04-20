import {
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@zhenyzh/common-ui/components";
import { ImageIcon, CirclePlusIcon, FileIcon } from "@zhenyzh/common-ui/icons";
import { ImageUpload } from "../ui/image-upload";
import { FileUpload } from "../ui/file-upload";
import { useModal } from "@/shared/hooks";
import s from "./file-attach-dropdown-menu.module.scss";

export function FileAttachDropdownMenu() {
  const {
    isOpen: isOpenImage,
    handleOpen: handleOpenImage,
    handleClose: handleCloseImage,
  } = useModal();
  const {
    isOpen: isOpenFile,
    handleOpen: handleOpenFile,
    handleClose: handleCloseFile,
  } = useModal();

  const dropdownMenuItem = [
    { icon: ImageIcon, label: "Добавить фото", onClick: handleOpenImage },
    { icon: FileIcon, label: "Добавить файл", onClick: handleOpenFile },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true} className={s.triggerMenu}>
        <Button className={s.button} variant="outline">
          <CirclePlusIcon className={s.pointer} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {dropdownMenuItem.map((item, i) => (
          <DropdownMenuItem key={i}>
            <item.icon />
            <Box onClick={item.onClick} as="span">
              {item.label}
            </Box>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
      {isOpenImage && <ImageUpload onClose={handleCloseImage} />}
      {isOpenFile && <FileUpload onClose={handleCloseFile} />}
    </DropdownMenu>
  );
}
