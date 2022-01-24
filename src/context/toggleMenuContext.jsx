import React, { createContext, useContext, useState } from "react"

const ToggleMenuContext = createContext()

export default function ToggleMenu({ children }) {
	const [toggleMenu, setToggleMenu] = useState(false)

	return <ToggleMenuContext.Provider value={{ toggleMenu, setToggleMenu }}>{children}</ToggleMenuContext.Provider>
}

export const useToggleMenu = () => useContext(ToggleMenuContext)
