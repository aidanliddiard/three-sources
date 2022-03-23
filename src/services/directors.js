import { client, checkError } from './client';

export async function fetchDirectors() {
  const resp = await client.from('directors').select('*');
  return checkError(resp);
}
