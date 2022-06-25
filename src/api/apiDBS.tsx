export default function apiDBS(search: string) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=&language=en-US&query=${search}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}
