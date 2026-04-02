import { useState, MouseEvent } from "react";
import { useSendUserAvatar } from "./use-send-user-avatar";

export function useUserAvatar(onClose?: () => void) {
  const { onSendUserAvatar, isPending } = useSendUserAvatar();
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
