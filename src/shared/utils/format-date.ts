import { format, isToday, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";

export const formatSmartDate = (date: string) => {
  const parsedDate = new Date(date);
  if (isToday(parsedDate)) return "Сегодня";
  if (isYesterday(parsedDate)) return "Вчера";
  return format(parsedDate, "dd MMMM yyyy", { locale: ru });
};
