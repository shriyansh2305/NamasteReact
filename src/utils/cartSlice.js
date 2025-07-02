import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // write logic to remove specific item
            state.items.pop();
        },
        clearCart: (state) => {
            // why not state.items = [], this also worked
            // state.items = []
            // state = [] not worked
            // state = {items: []} not worked
            // state.items.length = 0;
            return { items : []};
        }
    },

});
// print and try to see
export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
// createSlice would return an object like this:
// {
//     actions: {
//         addItem, 
//         removeItem, 
//         clearCart
//     },
//     reducer
// }