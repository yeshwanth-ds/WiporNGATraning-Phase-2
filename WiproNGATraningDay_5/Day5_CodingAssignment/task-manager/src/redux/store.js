import { createStore } from "redux";
import taskReducer from "./reducers";

const store = createStore(
    taskReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // For debugging
);

export default store;
