import { formatDistanceToNow } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDateDistanceToNow = (date: string, addSuffix = true) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: addSuffix,
    locale: ru,
  });
