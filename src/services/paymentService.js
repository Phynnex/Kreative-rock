import { MAKE_PAYMENT } from "routes/backendroutes"
import http from "./httpService"

export async function makePayment(payload) {
    try {
        const { data } = await http.post(`${MAKE_PAYMENT}`, payload)
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