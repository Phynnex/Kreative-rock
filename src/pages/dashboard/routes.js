import AllCampaignsPage from "./allcampaigns"
import CampaignDetails from "./allcampaigns/details-table"
import AutoresponsePage from "./autoresponse"
import CampaignPage from "./campaign"
import CreateCampainForm from "./campaign/createcampaign"
import OnewayCampainPage from "./campaign/createcampaign/onewayform"
import ContactsPage from "./contacts"
import DeliveryReportsPage from "./deliveryreports"
import ReportPage from "./deliveryreports/report"
import HelpPage from "./help"
import DashboardPage from "./home"
import InboxPage from "./inbox"
import KeywordsPage from "./keywords"
import KreatedKeywordsMain from "./keywords/maincreatedKeywords"
import LogoutPage from "./logout"

import {
	ALL_CAMPAIGNS,
	AUTO_RESPONSES,
	CAMPAIGN,
	CAMPAIGN_DETAILS,
	CONTACTS,
	CREATCAMPAIGN_ONE,
	CREATCAMPAIGN_TWO,
	DASHBOARDHOME,
	DELIVERY_REPORS,
	DELIVERY_REPORT_DETAILS,
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
		path: CAMPAIGN_DETAILS,
		component: CampaignDetails,
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
		path: DELIVERY_REPORT_DETAILS,
		component: ReportPage,
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
		component: KreatedKeywordsMain,
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
