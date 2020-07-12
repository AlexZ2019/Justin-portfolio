import TrackingAPI from "../../API/API";
import {reset} from "redux-form";
import {isFetching} from "./Preloader-reducer";

const GET_STATUS = 'GET_STATUS'
// const TTN_TEXT_CHANGE = 'TTN_TEXT_CHANGE'
let initialState = {
    result: 'Введіть номер ТТН посилки',
    // ttn_text: ''

}
const trackingReducer = (state = initialState, action) => {
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

export const getTracking = (ttn_text) => dispatch => {
    dispatch(isFetching(true))
    TrackingAPI.getStatus(ttn_text).then(data => {
        dispatch(isFetching(false))
        if (data.status === 1) {
            dispatch(setStatus(data.result[0]))
        } else if (data.status === 0) {
            dispatch(setStatus(data.msg.ua))
        }
        dispatch(reset('tracking'))
    })
}


export default trackingReducer;