import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counter-slice";
import { authSlice } from "./auth-slice";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       ...state,
//       counter: state.counter + 1,
//     };
//   }
//
//   if (action.type === "increase") {
//     return {
//       ...state,
//       counter: state.counter + action.amount,
//     };
//   }
//
//   if (action.type === "decrement") {
//     return {
//       ...state,
//       counter: state.counter - 1,
//     };
//   }
//
//   if (action.type === "toggle") {
//     return {
//       ...state,
//       showCounter: !state.showCounter,
//     };
//   }
//
//   return state;
// };

// const store = createStore(counterReducer);

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});

export default store;
