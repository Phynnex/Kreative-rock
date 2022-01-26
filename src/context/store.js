import ToggleCreateKeyword from "./createKewordContext.jsx"
import DashboardMenu from "./DashboardMenu.jsx"
import ToggleMenu from "./toggleMenuContext.jsx"

function Store({ children }) {
	return (
		<DashboardMenu>
			<ToggleCreateKeyword>
				<ToggleMenu>{children}</ToggleMenu>
			</ToggleCreateKeyword>
		</DashboardMenu>
	)
}

export default Store
