import _ from "lodash";

class Category {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  describe() {
    return `Category ID: ${this._id}; Category Name: ${this._name}`;
  }
}

class MovieCategory extends Category {
  constructor(id, name, description = '', popularity = 0) {
    super(id, name);
    this._description = description;
    this._popularity = popularity;
  }
  get description() {
    return this._description;
  }
  get popularity() {
    return this._popularity;
  }
  describe() {
    return `Movie Category Name: ${this._name}; Movie Category Popularity: ${this._popularity}`;
  }
  static comparePopularity(catA, catB) {
    return catA.popularity - catB.popularity;
  }
};

const categories = [
  new MovieCategory("101", "Fantasy", "Fantasy Movie", 25),
  new MovieCategory("102", "Family", "Family Movie", 15),
  new MovieCategory("103", "War", "War Movie", 10),
  new MovieCategory("104", "Romance", "Romance Movie", 30),
  new MovieCategory("105", "Nature", "Nature Movie", 20),
];
categories.sort(MovieCategory.comparePopularity);

export const getCategories = () => categories;
export const getCategoryByID = (id) => _.find(categories, elem => elem.id === id);
