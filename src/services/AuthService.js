import http from "./httpService"
import { LOGIN_USER } from "routes/backendroutes"

export async function loginUser(user) {
	try {
		const { data } = await http.post(`${LOGIN_USER}`, user)
		// console.log(data, { data: "nbsbhbshdbhb" })

		return data
	} catch (err) {
		let error = {}
		console.log(err, "error from api login")
		if (err && err.response.data) {
			error = err.response.data
		} else {
			error = { data: { message: "NetWork Error" } }
		}
		return error
	}
}
