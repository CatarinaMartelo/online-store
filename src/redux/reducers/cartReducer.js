const initialState = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const cartReducer = (state = initialState, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
      const existingProduct = state.find((x) => x.id === product.id);
      if (existingProduct) {
        return state;
      } else {
        const newState = [...state, { ...product, qty: 1 }];
        localStorage.setItem('cart', JSON.stringify(newState));
        return newState;
      }

    case "DELITEM":
      const updatedCart = state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      ).filter((x) => x.qty !== 0);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;

    case "CHANGE_CART_QTY":
      const newState = state.map((product) =>
        product.id === action.payload.id
          ? { ...product, qty: action.payload.qty }
          : product
      );
      localStorage.setItem('cart', JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default cartReducer;