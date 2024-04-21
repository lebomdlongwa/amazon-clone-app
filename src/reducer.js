export const initialState = {
  basket: [
    {
      title:
        "The Lean Startup: How Constant Innovation Creates Radical Successful Businesses Paperback",
      price: 11.59,
      rating: 3,
      image: "https://m.media-amazon.com/images/I/6107aYfAoHL.jpg",
      id: "75446546",
    },
    {
      title:
        "The Lean Startup: How Constant Innovation Creates Radical Successful Businesses Paperback",
      price: 11.59,
      rating: 3,
      image: "https://m.media-amazon.com/images/I/6107aYfAoHL.jpg",
      id: "75446546",
    },
  ],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      //logic to add
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //logic to remove
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) because it does not exist in the basket`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };
    default:
      return state;
  }
};

export default reducer;
