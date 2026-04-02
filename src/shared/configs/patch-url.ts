export function patchUrl(url?: string | null) {
  return url ? `${process.env.NEXT_PUBLIC_APP_BASE_URL}/${url}` : null;
}
