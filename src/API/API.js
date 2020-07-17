import * as axios from "axios";
const TRACKING = `tracking/`
const BRANCHES_LOCATOR = `branches_locator/`

const instance = axios.create({
    baseURL: 'https://openapi.justin.ua/',
})

export const TrackingApI = {
    getStatus(ttn_text) {
        return (
            instance.get(TRACKING + ttn_text).then(response => {
                return (
                    response.data)
            }))
    },
    getNearestDepartments(address = '') {
        return (
            instance.get(BRANCHES_LOCATOR + address).then(response => {
                return (
                    response.data)
            }))
    }
}
export default TrackingApI