export function filteredFilesByType<T extends { type: string }>(
  files: T[] | null | undefined,
  typeFile: T["type"],
) {
  return files?.filter((file) => file.type === typeFile);
}
