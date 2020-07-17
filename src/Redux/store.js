import {applyMiddleware, combineReducers, createStore} from "redux";
import TrackingReducer from "./reducers/Tracking-reducer";
import NearestDepartmentsReducer from "./reducers/NearestDepartment-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import PreloaderReducer from "./reducers/Preloader-reducer";


let reducers = combineReducers({
    TrackingReducer,
    NearestDepartmentsReducer,
    form: formReducer,
    PreloaderReducer
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store

export default store;