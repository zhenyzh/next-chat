import type { ReactNode } from "react";
import { Box } from "@zhenyzh/common-ui/components";
import { CloseIcon } from "@zhenyzh/common-ui/icons";
import s from "./wrapper-card-file-close.module.scss";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
  classNameClose?: string;
};

export function WrapperCardFileClose({
  children,
  className,
  classNameClose,
}: Props) {
  return (
    <Box className={className}>
      <CloseIcon className={clsx(s.closeIconContainer, classNameClose)} />
      {children}
    </Box>
  );
}
