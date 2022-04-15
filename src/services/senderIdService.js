import { CREATE_SENDER_ID, EDIT_SENDER_ID } from "routes/mobileText"
import http from "./httpService"

export async function getUserSenderIds() {
	try {
		const { data } = await http.get(`${CREATE_SENDER_ID}`)
		return data
	} catch (err) {
		if (err && err?.response?.data) {
			throw new Error(err.response.data)
		} else {
			throw new Error({ message: "NetWork Error" })
		}
	}
}
export async function createSenderId(payload) {
	try {
		const { data } = await http.post(`${CREATE_SENDER_ID}`, payload)
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
export async function updateSenderId(id, payload) {
	try {
		const { data } = await http.put(`${EDIT_SENDER_ID}/${id}`, payload)
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
export async function deleteSenderId(id) {
	const response = await http.delete(`${EDIT_SENDER_ID}/${id}`)
	return response
}
