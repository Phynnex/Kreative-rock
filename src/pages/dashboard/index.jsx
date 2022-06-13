import { DashboardBody, DashboardContainer } from "./style"
import Menu from "components/dashboard/menu"
import AdminMenu from "context/adminMenu"
import { dashboardRoutes } from "./routes"
import { Switch, useLocation } from "react-router-dom"
import ProtectedRoute from "Utilities/ProtectedRoutes"
import { ToggleMobileDashboardBtn } from "components/dashboard/actionbuttons"
import { useToggleMenu } from "context/toggleMenuContext"
import { useEffect } from "react"
import { useAuthContext } from "context/AuthContext"

import DashboardTopSection from "./home/topSection"
import Verifycode from "./home/topSection/verifycode"
import { Box, Dialog } from "@material-ui/core"

import { useHistory } from 'react-router-dom';

function Dashboard() {
	const location = useLocation()
	let history = useHistory();

	const { toggleMenu, setToggleMenu } = useToggleMenu()
	const { user } = useAuthContext()
	
	const phoneVerified = user?.data?.user?.phoneVerified
	const emailVerified = user?.data?.user?.emailVerified


	const handleOpenNav = event => {
		setToggleMenu(!toggleMenu)
	}
	useEffect(() => {
		if (!emailVerified) {
			history.push(`/verify`)
		} else {
			window.scrollTo(30, 0)
		}

	}, [location.pathname])
	return (
		<div>
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

			{!phoneVerified && (
				<Dialog
					open={!phoneVerified}
					fullWidth
					maxWidth="md"
				>
					<Box style={{
						height: '300px',
						background: 'transparent',
						display: 'flex',
						alignItems: 'center'
					}}>
						<DashboardTopSection />
						<Verifycode />
					</Box>
				</Dialog>
				// <div
				// 	style={{
				// 		position: 'fixed',
				// 		top: 0,
				// 		width: '100%',
				// 		height: '100%',
				// 		backgroundColor: 'gray',
				// 		opacity: '0.9'
				// 	}}>
				// 	<div
				// 		style={{
				// 			width: '100%',
				// 			height: '100%',
				// 			padding: '3rem',
				// 			display: 'flex',
				// 			alignItems: 'center',
				// 			justifyContent: 'center',
				// 			opacity: '1',
				// 			position: 'fixed',
				// 		}}>
				// 		<div style={{ width: '50%' }}>
				// 			<DashboardTopSection />
				// 			
				// 		</div>
				// 	</div>
				// </div>
			)}
		</div >
	)
}

export default Dashboard
