import {
  format,
  formatDistanceToNow,
  isToday,
  formatDistanceToNowStrict,
} from "date-fns";
import { ru } from "date-fns/locale";

export const formatDateDistanceToNow = (date: string, addSuffix = true) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: addSuffix,
    locale: ru,
  });

export const formatSmartDate = (date: string, addSuffix = false) => {
  const parseDate = new Date(date);

  if (isToday(parseDate)) {
    return formatDistanceToNowStrict(parseDate, {
      addSuffix,
      locale: ru,
      roundingMethod: "floor",
    });
  }

  return format(parseDate, "dd.MM.yyyy");
};
