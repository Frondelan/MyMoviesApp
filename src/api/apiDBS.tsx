export default function apiDBS(search: string) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=c228dad6f5c1cf9f486b1000122ea7d4&language=en-US&query=${search}`;

  return fetch(url)
    .then(response => {
      return response.json();
    })
    .then(result => {
      return result;
    });
}
