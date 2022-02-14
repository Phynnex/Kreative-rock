import AllCampaignsPage from "./allcampaigns"
import AutoresponsePage from "./autoresponse"
import CampaignPage from "./campaign"
import CreateCampainForm from "./campaign/createcampaign"
import OnewayCampainPage from "./campaign/createcampaign/onewayform"
import ContactsPage from "./contacts"
import DeliveryReportsPage from "./deliveryreports"
import HelpPage from "./help"
import DashboardPage from "./home"
import InboxPage from "./inbox"
import KeywordsPage from "./keywords"
import UserCreatedResponses from "./keywords/created-responses"
import LogoutPage from "./logout"

import {
	ALL_CAMPAIGNS,
	AUTO_RESPONSES,
	CAMPAIGN,
	CONTACTS,
	CREATCAMPAIGN_ONE,
	CREATCAMPAIGN_TWO,
	DASHBOARDHOME,
	DELIVERY_REPORS,
	D_LOGOUT,
	HELP,
	INBOX,
	KEYWORDS,
	SENDER_ID,
	USERCREATED_RESPONSES,
	WALLET
} from "./ROUTESCONTS"
import SenderIdPage from "./sendId"
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
		path: SENDER_ID,
		component: SenderIdPage,
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
		path: AUTO_RESPONSES,
		component: AutoresponsePage,
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
		path: ALL_CAMPAIGNS,
		component: AllCampaignsPage,
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
	},
	{
		path: D_LOGOUT,
		component: LogoutPage,
		exact: true,
		protected: true
	},
	{
		path: CREATCAMPAIGN_TWO,
		component: CreateCampainForm,
		exact: true,
		protected: true
	},
	{
		path: USERCREATED_RESPONSES,
		component: UserCreatedResponses,
		exact: true,
		protected: true
	},
	{
		path: CREATCAMPAIGN_ONE,
		component: OnewayCampainPage,
		exact: true,
		protected: true
	}
]
