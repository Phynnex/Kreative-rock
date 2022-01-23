import { menuData } from "components/dashboard/menu/menuData"
import { useSecureStorage } from "Hooks/useSecureStorage"
import React, { createContext, useContext } from "react"
// import { useSecureStorage } from '@app/Hooks/useSecureStorage';
// import { menuData } from '@app/dashboard/main/menu/menuData';

// import { menuData } from "components/dashboard/main/menu/menuData"
// import { useSecureStorage } from "app/Hooks/useSecureStorage"

const AdminMenuContext = createContext()

export default function AdminMenu({ children }) {
	const [adminMenu, setAdminMenu] = useSecureStorage("adminMenu", menuData)

	return <AdminMenuContext.Provider value={{ adminMenu, setAdminMenu }}>{children}</AdminMenuContext.Provider>
}

export const useAdminMenu = () => useContext(AdminMenuContext)
