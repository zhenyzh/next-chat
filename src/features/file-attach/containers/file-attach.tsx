import { CardItemFile } from "../ui/card-item-file";
import { CardItemImage } from "../ui/card-item-image";
import { WrapperCardClose } from "../ui/wrapper-card-close";
import { useFilesAttach, useFilesAttachActions } from "../model/store";
import { List, ScrollBar } from "@/shared/ui";
import s from "./file-attach.module.scss";

export function FileAttach() {
  const { clearAll } = useFilesAttachActions();
  const files = useFilesAttach();

  return (
    !!files.length && (
      <WrapperCardClose
        className={s.wrapper}
        classNameClose={s.closeIconContainer}
        onClose={clearAll}
      >
        <ScrollBar variant="horizontal">
          <List
            className={s.list}
            data={files}
            renderItem={(file) => (
              <>
                {file.typeFile === "file" && <CardItemFile fileItem={file} />}
                {file.typeFile === "image" && <CardItemImage fileItem={file} />}
              </>
            )}
          />
        </ScrollBar>
      </WrapperCardClose>
    )
  );
}
