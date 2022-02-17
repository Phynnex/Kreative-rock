import React, { createContext, useContext } from "react"
import { useSecureStorage } from "Hooks/useSecureStorage"

const KreativeUserContext = createContext()

export default function KreativeUser({ children }) {
	const [kreativeUser, setKreativeUser] = useSecureStorage("corporateUser", {
		token: "",
		data: {
			Name: "",
			contactEmail: "",
			contactPhoneNumber: "",
			profileUrl: ""
		}
	})

	return <KreativeUserContext.Provider value={{ kreativeUser, setKreativeUser }}>{children}</KreativeUserContext.Provider>
}

export const useKreativeUser = () => useContext(KreativeUserContext)
