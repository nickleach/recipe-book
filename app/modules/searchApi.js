const SearchApi = {
  getRecipes(keywords, ingredients, p = 1) {
        const url = `http://www.recipepuppy.com/api/?${ingredients}&${keywords}&p=${p}`;
        return fetch(url).then((res) => res.json()).then((res) => res.results);
    }
}

export default SearchApi;
