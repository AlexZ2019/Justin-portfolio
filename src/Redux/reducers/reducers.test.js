import trackingReducer, {setStatus} from "./Tracking-reducer";
import TheNearestDepartmentsReducer, {setStatus as setStatusForTND} from "./TheNearestDepartment-reducer";

let state = {
    date: "2019-10-23",
    orderDescription: "Замовлення клієнта 400473302 від 2/5/2019",
    orderNumber: "400473302",
    status: "Відміна відправки"
}

test ('state for tracking must be changed' , () => {
    const action = setStatus('test')
    let newState = trackingReducer(state, action)
    expect(newState.result).toBe('test')
})

test ('state for TND must be changed' , () => {
    const action = setStatusForTND('test')
    let newState = TheNearestDepartmentsReducer(state, action)
    expect(newState.result).toBe('test')
})
