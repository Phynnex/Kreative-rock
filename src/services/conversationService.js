import { ENDPOINT_MESSAGING } from "routes/mobileText"
import http from "./httpService"

export async function getConversations() {
	try {
		const { data } = await http.get(`${ENDPOINT_MESSAGING}`)
		return data

	} catch (err) {
		if (err && err?.response?.data) {
			throw new Error(err.response.data)
		} else {
			throw new Error({ message: "NetWork Error" })
		}
	}
}


export async function getConversationsByPhoneNo(phoneNumber) {
	try {
		const { data } = await http.get(`${ENDPOINT_MESSAGING}/${phoneNumber}`)
		return data

	} catch (err) {
		if (err && err?.response?.data) {
			throw new Error(err.response.data)
		} else {
			//throw new Error({ message: "NetWork Error" })
		}
	}
}


export async function replyConversation(payload) {
	try {
		const { data } = await http.post(`${ENDPOINT_MESSAGING}/reply`, payload)
		return data

	} catch (err) {
		if (err && err?.response?.data) {
			throw new Error(err.response.data)
		} else {
			throw new Error({ message: "NetWork Error" })
		}
	}
}