const BASE_LINK = 'https://64c95b66b2980cec85c22d39.mockapi.io/posts';


export async function getPosts(category = "") {
  const url = `${BASE_LINK}${category ? `?category=${category}` : ""}`;
  return await fetch(`${url}`).then(res => res.json() );
}