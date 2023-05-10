import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from "../actions";

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
    };
  }
  if (action.type === SET_GRIDVIEW) {
    return {
      ...state,
      grid_view: true,
    };
  }
  if (action.type === SET_LISTVIEW) {
    return {
      ...state,
      grid_view: false,
    };
  }
  if (action.type === UPDATE_SORT) {
    // console.log(state);
    return { ...state, sort: action.payload };
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let newSort = [...filtered_products];

    if (sort === "price-lowest") {
      newSort = newSort.sort((curr, prev) => curr.price - prev.price);
    }
    if (sort === "price-highest") {
      newSort = newSort.sort((curr, prev) => prev.price - curr.price);
    }
    if (sort === "name-a") {
      newSort = newSort.sort((curr, prev) =>
        curr.name.localeCompare(prev.name)
      );
      // console.log(newSort);
    }
    if (sort === "name-z") {
      newSort = newSort.sort((curr, prev) =>
        prev.name.localeCompare(curr.name)
      );
    }
    return { ...state, filtered_products: newSort };
  }
  return state;
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
