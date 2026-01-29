import { format, formatDistanceToNow, isToday } from "date-fns";
import { ru } from "date-fns/locale";

export const formatDateDistanceToNow = (date: string, addSuffix = true) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: addSuffix,
    locale: ru,
  });

export const formatSmartDate = (date: string, addSuffix = false) => {
  const parseDate = new Date(date);
  if (isToday(parseDate)) {
    return formatDistanceToNow(parseDate, {
      addSuffix: addSuffix,
      locale: ru,
    });
  }
  return format(parseDate, "dd.MM.yyyy");
};
