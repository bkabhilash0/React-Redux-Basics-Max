import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import authSlice from "./auth";
import { composeWithDevTools } from "redux-devtools-extension";

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return { ...state, counter: state.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...state, counter: state.counter - 1 };
//   } else if (action.type === "INCREASE") {
//     return { ...state, counter: state.counter + action.amount };
//   } else if (action.type === "TOGGLE") {
//     return { ...state, showCounter: !state.showCounter };
//   } else {
//     return state;
//   }
// };

const store = configureStore({
  reducer: { counter: counterSlice, auth: authSlice },
  devTools: composeWithDevTools,
});

export default store;
