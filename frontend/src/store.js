import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { productListReducer, productsDetailsReducer } from "./reducers/productReducers";

const intialState = {};
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productsDetailsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  intialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
