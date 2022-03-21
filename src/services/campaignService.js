import { ENDPOINT_CAMPAIGN, FIlTER_CAMPAIGN } from "routes/mobileText"
import http from "./httpService"

export async function getCampaigns() {
	try {
		const { data } = await http.get(`${ENDPOINT_CAMPAIGN}`)
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
export async function createCampaign(payload) {
	try {
		const { data } = await http.post(`${ENDPOINT_CAMPAIGN}`, payload)
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
export async function updateCampaign(id) {
	try {
		const { data } = await http.put(`${ENDPOINT_CAMPAIGN}/${id}`)
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
export async function deleteCampaign(id) {
	try {
		const { data } = await http.get(`${ENDPOINT_CAMPAIGN}/${id}`)
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

export async function searCampaign(id) {
	try {
		const { data } = await http.get(`${FIlTER_CAMPAIGN}/${id}`)
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
