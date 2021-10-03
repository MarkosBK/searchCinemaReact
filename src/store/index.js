import CinemaReducer from "./reducers/CinemaReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import LoadingReducer from "./reducers/LoadingReducer";
import {composeWithDevTools} from "redux-devtools-extension";

const reducers = combineReducers({
    cinema: CinemaReducer,
    loading: LoadingReducer
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export default store;