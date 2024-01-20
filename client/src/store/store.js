import { configureStore } from "@reduxjs/toolkit";
import { watchRedcuer } from "./watch/watchSlice";
import { wishlistRedcuer } from "./wishlist/wishlistSlice";
import { basketReducer } from "./basket/basketSlice";

const store = configureStore({
  reducer: {
    watch: watchRedcuer,
    wishlist: wishlistRedcuer,
    basket: basketReducer,
  },
});

export default store;
