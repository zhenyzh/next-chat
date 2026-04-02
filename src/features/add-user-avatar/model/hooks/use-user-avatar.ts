import { useState, MouseEvent } from "react";
import { useUserAvatarAction } from "./use-user-avatar-action";

export function useUserAvatar(onClose?: () => void) {
  const { onSendUserAvatar, isPending } = useUserAvatarAction();
  const [avatarUrl, setAvatarUrl] = useState<File | null>();

  const handleSelect = (file: File) => {
    setAvatarUrl(file);
  };

  const handleSendUserAvatar = () => {
    if (!avatarUrl) return;
    onSendUserAvatar(avatarUrl);
    setAvatarUrl(null);
    onClose?.();
  };

  const handleClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      setAvatarUrl(null);
      onClose?.();
    }
  };

  return {
    isAvatarUrl: !!avatarUrl,
    handleSelect,
    handleClose,
    handleSendUserAvatar,
    isPending,
  };
}
