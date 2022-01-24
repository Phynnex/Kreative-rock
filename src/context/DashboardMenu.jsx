import React, { createContext, useContext } from "react"

import { menuData } from "components/dashboard/menu/menuData"
import { useSecureStorage } from "Hooks/useSecureStorage"

const DashboardMenuContext = createContext()

export default function DashboardMenu({ children }) {
	const [dashboardMenu, setDashboardMenu] = useSecureStorage("dashboardMenu", menuData)

	return <DashboardMenuContext.Provider value={{ dashboardMenu, setDashboardMenu }}>{children}</DashboardMenuContext.Provider>
}

export const useDashboardMenu = () => useContext(DashboardMenu)
