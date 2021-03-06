import TrackingApI from "../../API/API";
import {reset} from "redux-form";
import {isFetching} from "./Preloader-reducer";

// const ADDRESS_TEXT_CHANGE = 'ADDRESS_TEXT_CHANGE'
const GET_DEPARTMENTS = 'GET_DEPARTMENTS'
let initialState = {
    result: '',
    address_text: ''
}

const NearestDepartmentsReducer = (state = initialState, action) => {
    switch (action.type) {
        // case ADDRESS_TEXT_CHANGE: {
        //     return {
        //         ...state,address_text: action.address_text
        //     }
        // }
        case GET_DEPARTMENTS: {
            return {
                ...state, result: action.result, address_text: ''
            }
        }
        default:
            return state
    }
}
// export const textChange = (address_text) => (
//     {type: ADDRESS_TEXT_CHANGE, address_text}
// )
export const setStatus = (result) => (
    {type: GET_DEPARTMENTS, result}
)

export const getTnD = (address) => async dispatch => {
    dispatch(isFetching(true))
    let response = await TrackingApI.getNearestDepartments(address)
        dispatch(isFetching(false))
            if (response.status === 1) {
                dispatch(setStatus(response.result))
            }
            // } else if (data.status === 0) {
            //     dispatch(setStatus(data.msg.ua))
            // }
            dispatch(reset('tracking'))
}

export default NearestDepartmentsReducer