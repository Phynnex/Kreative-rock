import { DashboardBody, DashboardContainer } from "./style"
import Menu from "components/dashboard/menu"
import AdminMenu from "context/adminMenu"
import { dashboardRoutes } from "./routes"
import { Switch } from "react-router-dom"
import ProtectedRoute from "Utilities/ProtectedRoutes"
import { ToggleMobileDashboardBtn } from "components/dashboard/actionbuttons"
import { useToggleMenu } from "context/toggleMenuContext"

function Dashboard() {
	const { toggleMenu, setToggleMenu } = useToggleMenu()

	const handleOpenNav = event => {
		setToggleMenu(!toggleMenu)
	}

	return (
		<div>
			<DashboardContainer>
				<AdminMenu>
					<Menu />
				</AdminMenu>
				<DashboardBody>
					{!toggleMenu && <ToggleMobileDashboardBtn onClick={handleOpenNav} />}

					<Switch>
						{dashboardRoutes.map((route, i) => (
							<ProtectedRoute key={i} exact={route.exact} path={route.path} component={route.component} />
						))}
					</Switch>
				</DashboardBody>
			</DashboardContainer>
		</div>
	)
}

export default Dashboard
