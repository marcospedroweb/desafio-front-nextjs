export function limitText(text: string, limit = 61): string {
  if (text.length <= limit) return text
  return text.slice(0, limit).trimEnd() + '...'
}