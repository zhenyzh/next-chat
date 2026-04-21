import { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";

type Props = {
  children: ReactNode;
};

export function CardPreviewWrapper({ children }: Props) {
  return (
    <Box style={{ "--avatar-online-bg": "var(--color-bg-primary-v1)" }}>
      {children}
    </Box>
  );
}
