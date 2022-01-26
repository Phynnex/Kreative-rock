import React, { createContext, useContext, useState } from "react"

const ToggleCreateKeywordContext = createContext()

export default function ToggleCreateKeyword({ children }) {
	const [createkeyword, setCreateKeyword] = useState(false)

	return <ToggleCreateKeywordContext.Provider value={{ createkeyword, setCreateKeyword }}>{children}</ToggleCreateKeywordContext.Provider>
}

export const useCreateKeyword = () => useContext(ToggleCreateKeywordContext)
