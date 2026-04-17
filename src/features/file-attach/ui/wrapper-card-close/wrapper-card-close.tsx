import type { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { CloseIcon } from "@zhenyzh/common-ui/icons";
import s from "./wrapper-card-close.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  classNameClose?: string;
  onClose?: () => void;
};

export function WrapperCardClose({
  children,
  className,
  classNameClose,
  onClose,
}: Props) {
  return (
    <Box className={className}>
      <CloseIcon
        className={clsx(s.closeIconContainer, classNameClose)}
        onClick={onClose}
      />
      {children}
    </Box>
  );
}
