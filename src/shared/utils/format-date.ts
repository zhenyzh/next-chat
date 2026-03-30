import { format, isToday, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";

export function formatSmartDate(date: string | null) {
  if (!date) return;
  const parsedDate = new Date(date);
  if (isToday(parsedDate)) return "Сегодня";
  if (isYesterday(parsedDate)) return "Вчера";
  return format(parsedDate, "dd MMMM yyyy", { locale: ru });
}

export function formatDate_yyyy_MM_dd(date: string) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function formatDate_HH_mm(date: string) {
  return format(new Date(date), "HH:mm");
}
