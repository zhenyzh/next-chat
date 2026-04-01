import { useState } from "react";
import { Save } from "lucide-react";
import { ImageUploader, Button, Card } from "@zhenyzh/common-ui/components";
import s from "./add-user-avatar.module.scss";

type Props = {
  onClose?: () => void;
};

export function AddUserAvatar({ onClose }: Props) {
  const [avatarUrl, setAvatarUrl] = useState<File | null>(null);
  console.log({ avatarUrl });
  const handleAvatarUrlSelect = (file: File) => {
    setAvatarUrl(file);
  };

  return (
    <Card className={s.container}>
      <ImageUploader
        className={s.imageUploader}
        onImageSelect={(file) => handleAvatarUrlSelect(file)}
        placeholder="Выберите или перетащите фото"
        cropShape="round"
        enableCrop={true}
      />
      <Button className={s.button} disabled={!avatarUrl}>
        <Save />
      </Button>
    </Card>
  );
}
