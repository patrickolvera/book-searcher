export default async function getBooks(query) {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${
    process.env.REACT_APP_API_KEY
  }`;
  try {
    const response = await fetch(url);
    const results = await response.json();
    const books = results.items;
    return books;
  } catch (e) {
    console.error(e);
  }
}
