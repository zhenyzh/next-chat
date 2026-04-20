import { Avatar, Box } from "@zhenyzh/common-ui/components";
import { patchUrl } from "@/shared/configs";
import s from "./message-image.module.scss";

export function MessageImage({ imageUrl }: { imageUrl: string[] }) {
  return (
    <Box className={s.container}>
      {imageUrl.map((url, i) => (
        <Avatar
          key={i}
          image={patchUrl(url)}
          size={120}
          variant="whole"
          className={s.image}
        />
      ))}
    </Box>
  );
}
