export function concatNonEmptyData<T>(items: T[], separator: string) {
  return items.filter(Boolean).join(separator);
}
