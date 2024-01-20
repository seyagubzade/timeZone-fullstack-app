import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  data: JSON.parse(localStorage.getItem("wishlist")) || [],
};

const wishlistSlice = createSlice({
  name: "wishlistSlice",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.data));
      console.log(newArr, action.payload);
      const target = newArr.find((item) => item._id == action.payload._id);
      if (target) {
        toast.error("Already in your wishlist!");
      } else {
        newArr = [...newArr, action.payload];
        state.data = newArr;
        toast.success("Added to your wishlist!");
        localStorage.setItem("wishlist", JSON.stringify(state.data));
      }
    },
    removeByIdFromWishlist: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.data));
      const target = newArr.find((item) => item._id == action.payload);
      const indexOfTarget = newArr.indexOf(target);

      newArr.splice(indexOfTarget, 1);
      state.data = newArr;
      toast.success("Deleted from your wishlist!");
      localStorage.setItem("wishlist", JSON.stringify(state.data));
    },
  },
});

export const { addToWishlist, removeByIdFromWishlist } = wishlistSlice.actions;
export const wishlistRedcuer = wishlistSlice.reducer;
