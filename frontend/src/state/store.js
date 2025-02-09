import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./stateAuth/Reducer";
import { customerProductReducer } from "./stateProduct/Reducer";
import { cartReducar } from "./stateCart/Reducer";
import { orderReducer } from "./stateOrder/Reducer";

const rootReducers = combineReducers({
  auth: authReducer,
  product: customerProductReducer,
  cart: cartReducar,
  order: orderReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
