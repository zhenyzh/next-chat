import { useFileAttachStore } from "./file-attach.store";
import type { FileAttach } from "@/entities/messages/model/types";

describe("file-attach.store", () => {
  beforeEach(() => {
    useFileAttachStore.setState({ files: [] });
  });

  const fileImage = {
    id: "1",
    url: "url1",
    name: "file1.png",
    size: 10,
    type: "image",
  } satisfies FileAttach;

  const file = {
    id: "2",
    url: "url2",
    name: "file2.docx",
    size: 20,
    type: "file",
  } satisfies FileAttach;

  it("Добавление файла", () => {
    useFileAttachStore.getState().actions.setFile(fileImage);
    expect(useFileAttachStore.getState().files).toEqual([fileImage]);
  });

  it("Добавление нескольких файлов", () => {
    const getState = useFileAttachStore.getState();
    getState.actions.setFile(fileImage);
    getState.actions.setFile(file);
    expect(useFileAttachStore.getState().files).toEqual([fileImage, file]);
  });

  it("Удаление файла по id", () => {
    useFileAttachStore.setState({ files: [fileImage, file] });
    useFileAttachStore.getState().actions.clearFile(fileImage.id);
    expect(useFileAttachStore.getState().files).toEqual([file]);
  });

  it("Удаление определенных файлов не влияет на другие", () => {
    useFileAttachStore.setState({ files: [fileImage, file] });
    useFileAttachStore.getState().actions.clearFile(file.id);
    expect(useFileAttachStore.getState().files).toEqual([fileImage]);
  });

  it("Удаление всех файлов", () => {
    useFileAttachStore.setState({ files: [fileImage, file] });
    useFileAttachStore.getState().actions.clearFiles();
    expect(useFileAttachStore.getState().files).toEqual([]);
  });
});
