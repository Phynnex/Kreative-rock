import http from "./httpService"
import { GET_CURRENT_USER } from "routes/backendroutes"

export async function getCurrentUser() {
	try {
		const { data } = await http.get(`${GET_CURRENT_USER}?status=active`)

		return data
	} catch (err) {
		let error = {}
		console.log(err, "error from api")
		if (err && err.response.data) {
			error = { message: err.response.data.message }
		} else {
			error = { message: "NetWork Error" }
		}
		return error
	}
}