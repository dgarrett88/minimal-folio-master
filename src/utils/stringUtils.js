export function formatTitle(str) {
  if (!str || str.length === 0) return '';
  return str.charAt(1).toUpperCase() + str.slice(2);
}