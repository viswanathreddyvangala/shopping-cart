interface IntlState {
    carts: any[];  // Array of any type (not recommended for strong typing)
}

const INTL: IntlState = {
    carts: []
};

export const cartReducer = (state = INTL, action: any) => {
    switch (action.type) {

        case 'ADD_CART': {
            const existingItemIndex = state.carts.findIndex(item => item['id'] === action.payload.id);

            if (existingItemIndex >= 0) {
                state.carts[existingItemIndex].qnty += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                // Item does not exist, add it to the cart with initial quantity
                const newItem = { ...action.payload, qnty: 1 };
                return { ...state, carts: [...state.carts, newItem] };
            }
        }

        case 'REMOVE_CART': {
            // Find the index of the item in the cart
            const existingItemIndex = state.carts.findIndex(item => item.id === action.payload.id);
          
            if (existingItemIndex >= 0) {
              const existingItem = state.carts[existingItemIndex];
          
              // If quantity is greater than 1, decrement the quantity
              if (existingItem.qnty > 1) {
                const updatedCarts = state.carts.map((item, index) =>
                  index === existingItemIndex
                    ? { ...item, qnty: item.qnty - 1 }  // Return a new object with the updated quantity
                    : item
                );
                return {
                  ...state,
                  carts: updatedCarts  // Return the new updated cart state
                };
              } else {
                // If the quantity is 1, remove the item from the cart
                const updatedCarts = state.carts.filter(item => item.id !== action.payload.id);
                return {
                  ...state,
                  carts: updatedCarts
                };
              }
            } else {
              // Item does not exist in the cart, no need to modify state
              return state;
            }
        }

        default:
            return state;
    }
}