import { createStore, compose, applyMiddleware } from "redux";
import roofReducer from "./Reducers/index";
import thunk from "redux-thunk";
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const configureStore = () => {
  const middleWares = [thunk];
  const enhancers = [applyMiddleware(...middleWares)];
  const store = createStore(roofReducer, composeEnhancers(...enhancers));
  return store;
};
export default configureStore;
