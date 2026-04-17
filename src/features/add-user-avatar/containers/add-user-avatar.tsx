import { SaveIcon } from "@zhenyzh/common-ui/icons";
import { useUserAvatar } from "../model/hooks";
import { ImageUploaderContainer } from "@/shared/ui";

type Props = {
  onClose?: () => void;
};

export function AddUserAvatar({ onClose }: Props) {
  const {
    isAvatarUrl,
    handleSendUserAvatar,
    handleSelect,
    handleRemove,
    handleClose,
    isPending,
  } = useUserAvatar(onClose);

  return (
    <ImageUploaderContainer
      onClickContainer={handleClose}
      onImageSelect={handleSelect}
      onRemoveFile={handleRemove}
      cropShape="round"
      enableCrop={true}
      buttonIcon={<SaveIcon />}
      disabledButton={!isAvatarUrl || isPending}
      onClickButton={handleSendUserAvatar}
    />
  );
}
