import Authorize from "./AuthContext.jsx"
import ToggleCreateKeyword from "./createKewordContext.jsx"
import DashboardMenu from "./DashboardMenu.jsx"
import ToggleMenu from "./toggleMenuContext.jsx"
import ToggleNav from "./toggleNavContext.jsx"
import KreativeUser from "./userDetails.jsx"

function Store({ children }) {
	return (
		<Authorize>
			<KreativeUser>
				<DashboardMenu>
					<ToggleCreateKeyword>
						<ToggleNav>
							<ToggleMenu>{children}</ToggleMenu>
						</ToggleNav>
					</ToggleCreateKeyword>
				</DashboardMenu>
			</KreativeUser>
		</Authorize>
	)
}

export default Store
