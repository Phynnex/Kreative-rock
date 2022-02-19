import React, { createContext, useContext, useState } from "react"

const ToggleContactContext = createContext()

export default function ContactListActions({ children }) {
	const [toggleContact, setToggleContact] = useState(false)
	const [toggleaddContact, setToggleAddContact] = useState(false)
	const [toggleImportContact, setToggleImporContact] = useState(false)

	function handleToggleContact() {
		setToggleContact(!toggleContact)
	}
	function handleToggleAddContact() {
		setToggleAddContact(!toggleaddContact)
	}
	function handleToggleImportContact() {
		setToggleImporContact(!toggleImportContact)
	}

	function stopPropagation(e) {
		e.stopPropagation()
	}

	return (
		<ToggleContactContext.Provider value={{ toggleContact, toggleaddContact, toggleImportContact, handleToggleImportContact, handleToggleContact, handleToggleAddContact, stopPropagation }}>
			{children}
		</ToggleContactContext.Provider>
	)
}

export const useToggleContact = () => useContext(ToggleContactContext)
