import {
  ImageUploader,
  Button,
  Card,
  Box,
} from "@zhenyzh/common-ui/components";
import { SaveIcon } from "@zhenyzh/common-ui/icons";
import { useUserAvatar } from "../model/hooks";
import s from "./add-user-avatar.module.scss";

type Props = {
  onClose?: () => void;
};

export function AddUserAvatar({ onClose }: Props) {
  const {
    isAvatarUrl,
    handleSendUserAvatar,
    handleSelect,
    handleClose,
    isPending,
  } = useUserAvatar(onClose);

  return (
    <Box className={s.wrapper} onClick={handleClose}>
      <Card>
        <ImageUploader
          className={s.imageUploader}
          onImageSelect={(file) => handleSelect(file)}
          placeholder="Выберите или перетащите изображение"
          cropShape="round"
          enableCrop={true}
        />
        <Button
          className={s.button}
          disabled={!isAvatarUrl || isPending}
          onClick={handleSendUserAvatar}
        >
          <SaveIcon />
        </Button>
      </Card>
    </Box>
  );
}
