//import { client, checkError } from './client';

// export async function fetchMovies() {
//   const resp = await client.from('movies').select('*');
//   return checkError(resp);
// }

export async function fetchMovies(director_id) {
  const urlParams = new URLSearchParams();
  if (director_id !== 'All') {
    urlParams.set('director_id', `eq.${director_id}`);
  }
  const resp = await fetch(
    `${process.env.REACT_APP_SUPABASE_URL}/rest/v1/movies?${urlParams.toString()}`,
    {
      headers: {
        apikey: process.env.REACT_APP_SUPABASE_KEY,
        Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
      },
    }
  );
  const data = await resp.json();
  return data;
}
