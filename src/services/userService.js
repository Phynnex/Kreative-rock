import http from "./httpService"
import { CHANGE_USER_PASSWORD, GET_CURRENT_USER, GET_USER_TEAM_MEMBERS } from "routes/backendroutes"
import cogoToast from "cogo-toast"

export async function getCurrentUser() {
	try {
		const { data } = await http.get(`${GET_CURRENT_USER}`)
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
export async function changePassword(payload) {
	try {
		const response = await http.put(`${CHANGE_USER_PASSWORD}`, payload)
		return response
	} catch (err) {
		if (err.response) return err
		cogoToast.error("Network Error", { hideAfter: 5 })
		return err
	}
}

export async function getTeamMembers() {
	try {
		const { data } = await http.get(`${GET_USER_TEAM_MEMBERS}`)
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
export async function addTeamMember() {
	try {
		const { data } = await http.post(`${GET_USER_TEAM_MEMBERS}`)
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
export async function deleteTeamMember() {
	try {
		const { data } = await http.delete(`${GET_USER_TEAM_MEMBERS}`)
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
export async function changeProfilePicture() {
	try {
		const { data } = await http.put(`${GET_USER_TEAM_MEMBERS}`)
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
export async function editPersonalInfo() {
	try {
		const { data } = await http.put(`${GET_USER_TEAM_MEMBERS}`)
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

export async function editBusinessInfo() {
	try {
		const { data } = await http.put(`${GET_USER_TEAM_MEMBERS}`)
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
