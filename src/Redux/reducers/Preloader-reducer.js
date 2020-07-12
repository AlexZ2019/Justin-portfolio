const IS_FETCHING = 'preloader/IS_FETCHING'

let initialState = {
    isFetching: false
}

const PreloaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}
export const isFetching = (isFetching) => (
    {type: IS_FETCHING, isFetching}
)
export default PreloaderReducer