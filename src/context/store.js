import ToggleCreateKeyword from "./createKewordContext.jsx"
import DashboardMenu from "./DashboardMenu.jsx"
import ToggleMenu from "./toggleMenuContext.jsx"
import ToggleNav from "./toggleNavContext.jsx"

function Store({ children }) {
	return (
		<DashboardMenu>
			<ToggleCreateKeyword>
				<ToggleNav>
					<ToggleMenu>{children}</ToggleMenu>
				</ToggleNav>
			</ToggleCreateKeyword>
		</DashboardMenu>
	)
}

export default Store
