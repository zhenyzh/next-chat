export function sortDataByCreatedAt<T extends { createdAt: string | Date }>(
  data: T[],
) {
  return data.sort((a, b) => {
    if (!a.createdAt && !b.createdAt) return 0;
    if (!a.createdAt) return 1;
    if (!b.createdAt) return -1;
    return new Date(b.createdAt).getTime() - new Date(b.createdAt).getTime();
  });
}
