import TrackingApI from "../../API/API";
import {reset} from "redux-form";
import {isFetching} from "./Preloader-reducer";

const GET_STATUS = 'GET_STATUS'
// const TTN_TEXT_CHANGE = 'TTN_TEXT_CHANGE'
let initialState = {
    result: 'Введіть номер ТТН посилки',
    // ttn_text: ''
}
const TrackingReducer = (state = initialState, action) => {
    switch (action.type) {
        // case TTN_TEXT_CHANGE: {
        //     return {
        //         ...state, ttn_text: action.ttn_text
        //     }
        // }
        case GET_STATUS: {
            return {
                ...state, result: action.result, ttn_text: ''
            }
        }
        default:
            return state
    }

}
// export const textChange = (ttn_text) => (
//     {type: TTN_TEXT_CHANGE, ttn_text}
// )
export const setStatus = (result) => (
    {type: GET_STATUS, result}
)

export const getTracking = (ttn_text) => async dispatch => {
    dispatch(isFetching(true))
    let response = await TrackingApI.getStatus(ttn_text)
        dispatch(isFetching(false))
        if (response.status === 1) {
            dispatch(setStatus(response.result[0]))
        } else if (response.status === 0) {
            dispatch(setStatus(response.msg.ua))
        }
        dispatch(reset('tracking'))
}

export default TrackingReducer;