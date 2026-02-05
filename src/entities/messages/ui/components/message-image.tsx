import { Avatar, Box } from "@zhenyzh/common-ui/components";
import s from "../styles/message-image.module.scss";

export function MessageImage({ imageUrl }: { imageUrl: string[] }) {
  return (
    <Box className={s.container}>
      {imageUrl.map((url, i) => (
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
