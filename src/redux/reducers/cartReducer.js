const cart = []


const cartReducer = (state = cart, action) => {
    const product = action.payload;

    switch(action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist){
                return state.map((x) => x.id === product.id ? {...x, qty: x.qty + 1} : x.qty + 1);
            }else{
                const product = action.payload;
                return[
                    ...state, 
                    {
                        ...product,
                        qty: 1,
                        
                    }
                 
                ]
                
            }
            

            case "DELITEM": 
            const exist1 = state.find((x)=> x.id === product.id);
            if (exist1.qty === 1){
                return state.filter((x) => x.id !== exist1.id);

            }else {
                return state.map((x)=> x.id === product.id ? {...x, qty: x.qty-1} : x)
            }
            

                case "CHANGE_CART_QTY":
                    return {
                      ...state,
                      cart: state.cart.filter((c) =>
                        c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                      ),
                    };
                  default:
                    return state;
                }
              };
            


export default cartReducer