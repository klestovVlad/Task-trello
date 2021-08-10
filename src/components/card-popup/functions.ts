export function returnTwoLetterFromName(name: string): string {
  return name
    .split(" ")
    .map((i) => i[0])
    .slice(0, 2)
    .join("");
}
