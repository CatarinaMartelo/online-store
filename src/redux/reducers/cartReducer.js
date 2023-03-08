const savedCart = localStorage.getItem('cart');
const cart = savedCart ? JSON.parse(savedCart) : [];

const cartReducer = (state = cart, action) => {
  const product = action.payload;

  switch (action.type) {
    case "ADDITEM":
        const existingProduct = state.find((x) => x.id === product.id);
        if (existingProduct) {
          return state;
        } else {
          return [...state, { ...product, qty: 1 }];
        }

    case "DELITEM":
        const updatedCart = state.map((x) =>
        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
      ).filter((x) => x.qty !== 0);
      return updatedCart;

      case "CHANGE_CART_QTY":
        return state.map((product) =>
          product.id === action.payload.id
            ? { ...product, qty: action.payload.qty }
            : product
        );
    
  }
  
  localStorage.setItem('cart', JSON.stringify(state));
  return state;
};

export default cartReducer;