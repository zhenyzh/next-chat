import type { MouseEvent, ReactNode } from "react";
import { Box, Button, Card } from "@zhenyzh/common-ui/components";
import s from "./file-uploader-container.module.scss";

export type FileUploaderContainerProps = {
  children: ReactNode;
  onClickContainer?: (e: MouseEvent<HTMLElement>) => void;
  disabledButton?: boolean;
  onClickButton?: () => void;
  buttonIcon?: ReactNode;
};

export function FileUploaderContainer(props: FileUploaderContainerProps) {
  return (
    <Box className={s.wrapper} onClick={props.onClickContainer}>
      <Card>
        {props.children}
        <Button
          className={s.button}
          disabled={props.disabledButton}
          onClick={props.onClickButton}
        >
          {props.buttonIcon}
        </Button>
      </Card>
    </Box>
  );
}
