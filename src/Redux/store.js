import {applyMiddleware, combineReducers, createStore} from "redux";
import trackingReducer from "./reducers/Tracking-reducer";
import TheNearestDepartmentsReducer from "./reducers/TheNearestDepartment-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import PreloaderReducer from "./reducers/Preloader-reducer";


let reducers = combineReducers({
    trackingReducer,
    TheNearestDepartmentsReducer,
    form: formReducer,
    PreloaderReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store

export default store;