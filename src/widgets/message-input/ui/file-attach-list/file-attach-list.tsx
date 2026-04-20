import { WrapperCardClose } from "@/features/file-attach/ui/wrapper-card-close";
import { CardItemFile } from "@/features/file-attach/ui/card-item-file";
import { CardItemImage } from "@/features/file-attach/ui/card-item-image";
import {
  useFilesAttach,
  useFilesAttachActions,
} from "@/features/file-attach/model/store";
import { List, ScrollBar } from "@/shared/ui";
import s from "./file-attach-list.module.scss";

export function FileAttachList() {
  const files = useFilesAttach();
  const { clearFiles } = useFilesAttachActions();

  return (
    !!files.length && (
      <WrapperCardClose
        className={s.wrapper}
        classNameClose={s.closeIcon}
        onClose={clearFiles}
      >
        <ScrollBar variant="horizontal">
          <List
            className={s.list}
            data={files}
            renderItem={(file) => (
              <>
                {file.type === "file" && <CardItemFile file={file} />}
                {file.type === "image" && <CardItemImage file={file} />}
              </>
            )}
          />
        </ScrollBar>
      </WrapperCardClose>
    )
  );
}
