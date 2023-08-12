export const getAllCharacters = `
query getAllCharacters($page: Int = 1) {
  characters(page: $page) {
    info {
      count
      pages
    }
    results {
      id
      name
      status
      image
      species
      origin {
        name
      }
    }
  }
}`;
