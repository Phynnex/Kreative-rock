import { MAKE_ENQUIRY } from "routes/mobileText"
import http from "./httpService"

export async function makeEnquiry(payload) {
    try {
        const { data } = await http.post(`${MAKE_ENQUIRY}`, payload)
        return data
    } catch (err) {
        let error = {}
        if (err && err.response.data) {
            error = { message: err.response.data.message }
        } else {
            error = { message: "NetWork Error" }
        }
        return error
    }
}
