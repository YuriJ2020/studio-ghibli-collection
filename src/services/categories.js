import _ from "lodash";

class Category {
  constructor(id, name, description, popularity) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._popularity = popularity;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get description() {
    return this._description;
  }
  get popularity() {
    return this._popularity;
  }
};

const categories = [
  new Category("101", "Fantasy", "Fantasy Movie", 20),
  new Category("102", "Family", "Family Movie", 30),
  new Category("103", "War", "War Movie", 15),
  new Category("104", "Romance", "Romance Movie", 25),
  new Category("105", "Nature", "Nature Movie", 10),
];

export const getCategories = () => categories;
export const getCategoryByID = (id) => _.find(categories, elem => elem.id === id);
