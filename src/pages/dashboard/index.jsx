import { DashboardBody, DashboardContainer } from "./style"
import Menu from "components/dashboard/menu"
import AdminMenu from "context/adminMenu"
import { dashboardRoutes } from "./routes"
import { Switch, useLocation } from "react-router-dom"
import ProtectedRoute from "Utilities/ProtectedRoutes"
import { ToggleMobileDashboardBtn } from "components/dashboard/actionbuttons"
import { useToggleMenu } from "context/toggleMenuContext"
import { useEffect } from "react"

function Dashboard() {
	const location = useLocation()
	const { toggleMenu, setToggleMenu } = useToggleMenu()

	const handleOpenNav = event => {
		setToggleMenu(!toggleMenu)
	}
	useEffect(() => {
		window.scrollTo(30, 0)
	}, [location.pathname])
	return (
		<div>
			<b />
			<b />
			<b />
			<b />
			<b />
			<b />
			<b />
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
