export function capitalizeFirstLetter(value: string) {
  if (!value) return "";

  return value.replace(/^./, value[0].toUpperCase());
}
