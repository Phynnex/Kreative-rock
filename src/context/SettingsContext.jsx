import React, { createContext, useContext, useState } from "react"

const SettingsTabContext = createContext()

export default function SettingTabStatus({ children }) {
	const [tab, setTab] = useState(0)

	function handChangeTab(value) {
		setTab(value)
	}

	return <SettingsTabContext.Provider value={{ tab, handChangeTab }}>{children}</SettingsTabContext.Provider>
}

export const useSettingTabStatus = () => useContext(SettingsTabContext)
