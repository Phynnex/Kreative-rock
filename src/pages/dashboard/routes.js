import CampaignPage from "./campaign"
import ContactsPage from "./contacts"
import DeliveryReportsPage from "./deliveryreports"
import HelpPage from "./help"
import DashboardPage from "./home"
import InboxPage from "./inbox"
import KeywordsPage from "./keywords"

import { CAMPAIGN, CONTACTS, DASHBOARDHOME, DELIVERY_REPORS, HELP, INBOX, KEYWORDS, WALLET } from "./ROUTESCONTS"
import WalletPage from "./wallet"

export const dashboardRoutes = [
	{
		path: DASHBOARDHOME,
		component: DashboardPage,
		exact: true,
		protected: true
	},
	{
		path: INBOX,
		component: InboxPage,
		exact: true,
		protected: true
	},
	{
		path: CONTACTS,
		component: ContactsPage,
		exact: true,
		protected: true
	},
	{
		path: KEYWORDS,
		component: KeywordsPage,
		exact: true,
		protected: true
	},
	{
		path: CAMPAIGN,
		component: CampaignPage,
		exact: true,
		protected: true
	},
	{
		path: WALLET,
		component: WalletPage,
		exact: true,
		protected: true
	},
	{
		path: DELIVERY_REPORS,
		component: DeliveryReportsPage,
		exact: true,
		protected: true
	},
	{
		path: HELP,
		component: HelpPage,
		exact: true,
		protected: true
	}
]
