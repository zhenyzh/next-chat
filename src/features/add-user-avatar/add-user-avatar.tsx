import { useState } from "react";
import { Save } from "lucide-react";
import { ImageUploader, Button, Card } from "@zhenyzh/common-ui/components";
import { useCloseToCollapsed } from "@/shared/hooks";
import s from "./add-user-avatar.module.scss";

type Props = {
  collapsed?: boolean;
  onClose?: () => void;
};

export function AddUserAvatar({ collapsed, onClose }: Props) {
  const [avatarUrl, setAvatarUrl] = useState<File | null>(null);
  console.log({ avatarUrl });
  const onSelect = (file: File | null) => {
    setAvatarUrl(file);
  };

  useCloseToCollapsed({ collapsed, onClose });

  return (
    <Card className={s.container}>
      <ImageUploader
        className={s.imageUploader}
        onImageSelect={(file) => onSelect(file)}
        placeholder="Выберите или перетащите изображение"
        cropShape="round"
        enableCrop={true}
        onRemoveFile={() => onSelect(null)}
      />
      <Button className={s.button} disabled={!avatarUrl}>
        <Save />
      </Button>
    </Card>
  );
}
