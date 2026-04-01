import { useState } from "react";
import { Save } from "lucide-react";
import { ImageUploader, Button, Card } from "@zhenyzh/common-ui/components";
import s from "./add-user-avatar.module.scss";

type Props = {
  onClose?: () => void;
};

export function AddUserAvatar({ onClose }: Props) {
  const [avatarUrl, setAvatarUrl] = useState<File | null>(null);

  const onSelect = (file: File | null) => {
    setAvatarUrl(file);
  };

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
