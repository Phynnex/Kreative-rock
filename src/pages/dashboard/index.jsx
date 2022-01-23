import { DashboardBody, DashboardContainer } from "./style"
import Menu from "components/dashboard/menu"
import AdminMenu from "context/adminMenu"
import { dashboardRoutes } from "./routes"
import { Switch } from "react-router-dom"
import ProtectedRoute from "Utilities/ProtectedRoutes"
import InboxPage from "./inbox"

// import MobileMenu from '../main/menu/mobileMenu';

function Dashboard() {
	// const [open, setOpen] = useState(false)
	return (
		<div>
			<br />
			<br />
			<br />
			<br />
			<DashboardContainer>
				<AdminMenu>
					<Menu />
				</AdminMenu>
				<DashboardBody>
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
