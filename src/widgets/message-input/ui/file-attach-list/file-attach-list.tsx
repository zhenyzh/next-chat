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
  const { clearFile } = useFilesAttachActions();

  return (
    !!files.length && (
      <WrapperCardClose
        className={s.wrapper}
        classNameClose={s.closeIcon}
        onClose={clearFiles}
      >
        <ScrollBar variant="horizontal" className={s.scrollHidden}>
          <List
            className={s.list}
            data={files}
            renderItem={(file) => (
              <>
                {file.type === "file" && (
                  <CardItemFile
                    file={file}
                    onRemove={() => clearFile(file.id)}
                  />
                )}
                {file.type === "image" && (
                  <CardItemImage
                    file={file}
                    onRemove={() => clearFile(file.id)}
                  />
                )}
              </>
            )}
          />
        </ScrollBar>
      </WrapperCardClose>
    )
  );
}
