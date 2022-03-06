import React, { createContext, useContext } from "react"
import { useSecureStorage } from "Hooks/useSecureStorage"

const KreatriveUserContext = createContext()

export default function KreativeUser({ children }) {
	const [kreativeUser, setKreativeUser] = useSecureStorage("kreative-user", {
		profile: {
			personalInformation: {
				fullname: "",
				country: "",
				phoneNumber: "",
				email: ""
			}
		},
		wallet: 0,
		organizationId: "",
		role: "",
		id: ""
	})

	return <KreatriveUserContext.Provider value={{ kreativeUser, setKreativeUser }}>{children}</KreatriveUserContext.Provider>
}

export const useKreativeUser = () => useContext(KreatriveUserContext)
