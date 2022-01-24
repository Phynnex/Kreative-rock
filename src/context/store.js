import DashboardMenu from "./DashboardMenu.jsx"
import ToggleMenu from "./toggleMenuContext.jsx"

function Store({ children }) {
	return (
		<DashboardMenu>
			<ToggleMenu>{children}</ToggleMenu>
		</DashboardMenu>
	)
}

export default Store
