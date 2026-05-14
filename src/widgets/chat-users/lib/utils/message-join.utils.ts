export function messageJoin(msg: string | null, value: number, word: string) {
  return [msg, `${value} ${word}`].filter(Boolean).join(", ");
}
