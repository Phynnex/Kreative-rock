

import { ADD_CONTACT, ADD_CONTACT_LIST, GET_CONTACTS, UPLOAD_CONTACTS } from "routes/backendroutes"
import http from "./httpService"

export async function getContacts() {
	try {
		const { data } = await http.get(`${GET_CONTACTS}`)
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

export async function createContact(payload) {
	try {
		const { data } = await http.post(`${ADD_CONTACT}`, payload)
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


export async function addContactList(payload) {
	try {
		const { data } = await http.post(`${ADD_CONTACT_LIST}`, payload)
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


export async function uploadContact(contactListId, selectedFile) {
	try {
		const formData = new FormData()
		formData.append("file", selectedFile)
		const { data } = await http.post(`${UPLOAD_CONTACTS}/${contactListId}`, formData)
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