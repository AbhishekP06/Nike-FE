import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const itemListFromStorage = localStorage.getItem("itemList")
    ? JSON.parse(localStorage.getItem("itemList"))
    : [];

const initialState = {
    itemList: itemListFromStorage,
    totalQuantity: itemListFromStorage.reduce((acc, item) => acc + item.quantity, 0),
    subTotalPrice: itemListFromStorage.reduce((sum, item) => sum + item.totalPrice, 0)
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.itemList.find(item => item._id === newItem._id);

            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = Number(existingItem.price * existingItem.quantity);
                toast('One more added!');
            } else {
                state.itemList.push({
                    name: newItem.name,
                    price: Number(newItem.price),
                    image: newItem.img?.[0] || null,
                    totalPrice: Number(newItem.price),
                    _id: newItem._id,
                    quantity: 1,
                });
                toast('Added to Cart');
            }
            state.subTotalPrice = state.itemList.reduce((sum, item) => sum + item.totalPrice, 0);
            state.totalQuantity = state.itemList.reduce((acc, item) => acc + item.quantity, 0);
            localStorage.setItem("itemList", JSON.stringify(state.itemList));
        },
        removeFromCart(state, action) {
            const itemId = action.payload._id;
            const findItem = state.itemList.find(item => item._id === itemId);

            if (findItem.quantity === 1) {
                state.itemList = state.itemList.filter(item => item._id !== itemId);
            } else {
                findItem.quantity--;
                findItem.totalPrice -= Number(findItem.price);
            }
            toast('Removed from Cart');
            state.subTotalPrice = parseInt(state.itemList.reduce((sum, item) => sum + item.totalPrice, 0));
            state.totalQuantity = state.itemList.reduce((acc, item) => acc + item.quantity, 0);
            localStorage.setItem("itemList", JSON.stringify(state.itemList));
        },
        clearCart(state, action) {
            toast('Order Placed!');
            state.itemList = [];
            state.totalQuantity = 0;
            state.subTotalPrice = 0;
            localStorage.removeItem("itemList");
        }
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;