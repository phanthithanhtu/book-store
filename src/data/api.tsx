export async function getItems() {
  const response = await fetch('https://wolnelektury.pl/api/books/');
  const data = (await response.json()) as unknown;
  return data;
}
