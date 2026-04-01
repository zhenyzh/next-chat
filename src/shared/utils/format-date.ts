import { format, isToday, isYesterday } from "date-fns";
import { ru } from "date-fns/locale";

export function formatSmartDate(date: string | Date) {
  const parsedDate = new Date(date);
  if (isToday(parsedDate)) return "Сегодня";
  if (isYesterday(parsedDate)) return "Вчера";
  return formatDate_dd_MMMM_yyyy(parsedDate);
}

export function formatDateTimeAgo(date: string | Date) {
  if (!date) return "";

  const now = new Date();
  const parseDate = new Date(date);
  const diff = +now - +parseDate;

  const seconds = Math.floor(diff / 1000);
  if (seconds < 5) return "только что";
  if (seconds < 60) return `${seconds}c`;

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}м`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}ч`;

  const days = Math.floor(hours / 24);
  if (days < 10) return `${days}д`;

  return formatDate_dd_MMMM_yyyy(parseDate);
}

export function formatDate_yyyy_MM_dd(date: string | Date) {
  return format(new Date(date), "yyyy-MM-dd");
}

export function formatDate_dd_MMMM_yyyy(date: string | Date) {
  return format(new Date(date), "dd MMMM yyyy", { locale: ru });
}

export function formatDate_HH_mm(date: string | Date) {
  return format(new Date(date), "HH:mm");
}
