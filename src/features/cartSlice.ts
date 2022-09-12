import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "itemCount",
    initialState: { value: 0 },
    reducers: {
        addItemsToCart: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        clearCart: (state) => {
            state.value = 0;
        },
    },
});
export const { addItemsToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
