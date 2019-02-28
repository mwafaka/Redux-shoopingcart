import products from "../products.json";

const initeState = {
  products,
  cart: [],
  total: 0
};
export const appReducer = (state = initeState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      console.log(action.payload);
      return {
        ...state,
        products: {
          ...state.products,
          [action.payload.updatedItemFromProducts.id]:
            action.payload.updatedItemFromProducts
        },
        cart: {
          ...state.cart,
          [action.payload.updatedItemFromCart.id]:
            action.payload.updatedItemFromCart
        }
      };

    case "REMOVE_ALL":
      return {
        ...state,

        cart: Object.values(state.cart).filter(
          item => item.id !== action.payload
        )
      };
    case "REMOVE_ONE":
      return {
        ...state,
        cart: Object.values(state.cart)
          .map(item =>
            item.id === action.payload
              ? { ...item, inventory: item.inventory - 1 }
              : item
          )
          .filter(item => item.inventory > 0)
      };

    case "CHECKOUT":
      return {
        ...state,
        cart: {}
      };
    case "TOTAL-APDATE":
      return {
        ...state
      };

    default:
      return state;
  }
};
