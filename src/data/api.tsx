export async function getItems() {
  const response = await fetch('https://www.abibliadigital.com.br/api/books');
  const data = (await response.json()) as unknown;
  return data;
}
