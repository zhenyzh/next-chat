import { Avatar, Box } from "@zhenyzh/common-ui/components";
import s from "./message-images.module.scss";

export function MessageImages({ images }: { images: string[] }) {
  return (
    <Box className={s.container}>
      {images.map((url, i) => (
        <Avatar
          key={i}
          image={url}
          size={120}
          variant="whole"
          className={s.image}
        />
      ))}
    </Box>
  );
}
