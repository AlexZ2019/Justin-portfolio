import * as axios from "axios";

const instance = axios.create({
    baseURL: 'http://openapi.justin.ua/',

})

export const TrackingAPI = {
    getStatus(ttn_text) {
        return instance.get(`tracking/` + ttn_text).then(response => {
            return response.data
        })
    },
    getTheNearestDepartments(address = '') {
        return instance.get(`branches_locator/` + address).then(response => {
            return response.data
        })
    }
}
export default TrackingAPI

