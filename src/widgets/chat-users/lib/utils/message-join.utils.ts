import { concatNonEmptyData } from "@/shared/utils";

export function messageJoin(msg: string | null, value: number, word: string) {
  return concatNonEmptyData([msg, `${value} ${word}`], ", ");
}
