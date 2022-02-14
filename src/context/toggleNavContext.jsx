import React, { createContext, useContext, useState } from "react"

const ToggleNavContext = createContext()

export default function ToggleNav({ children }) {
	const [toggleNav, setToggleNav] = useState(false)

	return <ToggleNavContext.Provider value={{ toggleNav, setToggleNav }}>{children}</ToggleNavContext.Provider>
}

export const useToggleNav = () => useContext(ToggleNavContext)
