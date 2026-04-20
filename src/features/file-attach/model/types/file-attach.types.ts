export type FileAttachmentType = {
  id: string;
  typeFile: TypeFile;
  file: File;
};

export type TypeFile = "image" | "file";
