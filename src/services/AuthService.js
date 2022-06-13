import http from "./httpService"
import { LOGIN_USER, SIGNUP_USER, VERIFY_PHONENUMBER } from "routes/backendroutes"

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
		return data
	} catch (err) {
		let error = {}
		if (err && err.response.data) {
			error = err.response.data
		} else {
			error = { data: { message: "Network Error" } }
		}
		return error
	}
}
export async function signOutUser(user) {
	try {
		const { data } = await http.post(`${SIGNUP_USER}`, user)
		return data
	} catch (err) {
		let error = {}
		console.log(err, "error from api Sign out")
		if (err && err.response.data) {
			error = err.response.data
		} else {
			error = { data: { message: "NetWork Error" } }
		}
		return error
	}
}


export async function sendSmsVerificationCode(payload) {
	try {
		const { data } = await http.post(`${VERIFY_PHONENUMBER}`, payload)
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
