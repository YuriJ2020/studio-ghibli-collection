import _ from "lodash";

const categories = [
  { _id: "101", name: "Fantasy" },
  { _id: "102", name: "Family" },
  { _id: "103", name: "War" },
  { _id: "104", name: "Romance" },
  { _id: "105", name: "Nature" },
];

export const getCategoryByID = (id) => _.find(categories, { _id: id });
