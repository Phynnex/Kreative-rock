import http from "./httpService"
import { LOGIN_USER, SIGNUP_USER } from "routes/backendroutes"

export async function loginUser(user) {
	try {
		const { data } = await http.post(`${LOGIN_USER}`, user)
		// console.log(data, { data: "nbsbhbshdbhb" })
		// console.log(response, { response: "Sign-up" }
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
export async function signupUser(user) {
	try {
		const { data } = await http.post(`${SIGNUP_USER}`, user)
		// console.log(data, { data: "Sign-up" })
		return data
	} catch (err) {
		let error = {}
		console.log(err, "error from api Signup")
		if (err && err.response.data) {
			error = err.response.data
		} else {
			error = { data: { message: "NetWork Error" } }
		}
		return error
	}
}
