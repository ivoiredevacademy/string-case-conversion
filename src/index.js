export function toSnakeCase(str) {
  const parts = str.split(' ');
  return parts.map(part => part.toLowerCase()).join('_');
}