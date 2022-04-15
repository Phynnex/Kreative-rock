import { ADD_AUTORESPONSE_KEYWORD, ENDPOINT_KEYWORD, RENEW_KEYWORD } from "routes/mobileText"
import http from "./httpService"

export async function getUserKeywords() {
	try {
		const { data } = await http.get(`${ENDPOINT_KEYWORD}`)
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
export async function createKeyword(payload) {
	try {
		const { data } = await http.post(`${ENDPOINT_KEYWORD}`, payload)
		console.log(data)
		return data
	} catch (err) {
		console.log(err)
		let error = {}
		if (err && err.response.data) {
			error = { message: err.response.data }
		} else {
			error = { message: "NetWork Error" }
		}
		return error
	}
}
export async function updateKeyword(id) {
	try {
		const { data } = await http.get(`${RENEW_KEYWORD}/${id}`)
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
export async function deleteKeyword(id) {
	try {
		const { data } = await http.get(`${ENDPOINT_KEYWORD}/${id}`)
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
export async function renewKeyword(id) {
	try {
		const { data } = await http.get(`${RENEW_KEYWORD}/${id}`)
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
export async function AddAutoResponse(payload) {
	try {
		const { data } = await http.put(`${ADD_AUTORESPONSE_KEYWORD}/${payload.keyword}`, payload)
		console.log(data, "Response Auto res")
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
