import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  data: JSON.parse(localStorage.getItem("basket")) || [],
};

const basketSlice = createSlice({
  name: "basketSlice",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      let newArr = JSON.parse(JSON.stringify(state.data));
      const target = newArr.find((item) => item._id === action.payload._id);
      console.log(target, newArr);
      if (target) {
        toast.error("Already exists in your basket");
      } else {
        newArr = [
          ...newArr,
          { ...action.payload, count: 1, totalPrice: action.payload.price },
        ];
        state.data = newArr;
        toast.success("Added to your basket");
        localStorage.setItem("basket", JSON.stringify(state.data));
      }
    },
    increaseAmount: (state, action) => {
      let newArr = JSON.parse(JSON.stringify([...state.data]));
      const target = newArr.find((item) => item._id === action.payload);
      const indexOfTarget = newArr.indexOf(target);
      newArr[indexOfTarget] = {
        ...newArr[indexOfTarget],
        count: newArr[indexOfTarget].count + 1,
        totalPrice:
          newArr[indexOfTarget].price * (newArr[indexOfTarget].count + 1),
      };
      state.data = newArr;
      localStorage.setItem("basket", JSON.stringify(state.data));
    },
    decreaseAmount: (state, action) => {
      let newArr = JSON.parse(JSON.stringify([...state.data]));
      const target = newArr.find((item) => item._id === action.payload);
      const indexOfTarget = newArr.indexOf(target);
      if (newArr[indexOfTarget].count > 1) {
        newArr[indexOfTarget] = {
          ...newArr[indexOfTarget],
          count: newArr[indexOfTarget].count - 1,
          totalPrice:
            newArr[indexOfTarget].price * (newArr[indexOfTarget].count - 1),
        };
      } else {
        newArr.splice(indexOfTarget, 1);
      }
      state.data = newArr;
      localStorage.setItem("basket", JSON.stringify(state.data));
    },
    removeFromBasket: (state, action) => {
      let newArr = JSON.parse(JSON.stringify([...state.data]));
      const target = newArr.find((item) => item._id === action.payload);
      const indexOfTarget = newArr.indexOf(target);
      newArr.splice(indexOfTarget, 1);
      state.data = newArr;
      toast.success("Removed from your basket");
      localStorage.setItem("basket", JSON.stringify(state.data));
    },
  },
});

export const { addToBasket, increaseAmount, decreaseAmount, removeFromBasket } =
  basketSlice.actions;
export const basketReducer = basketSlice.reducer;
