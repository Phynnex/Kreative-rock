import dashboardIcon from "assets/images/menu/dashboard.svg"
import dashboardActive from "assets/images/menu/dashboardActive.svg"

import inboxIcon from "assets/images/menu/inbox.svg"
import inboxActive from "assets/images/menu/inboxActive.svg"

import contactsIcon from "assets/images/menu/contacts.svg"
import contactsActive from "assets/images/menu/contactsActive.svg"

import keywordsIcon from "assets/images/menu/keywords.svg"
import keywordsActive from "assets/images/menu/keywordsActive.svg"

import campaignIcon from "assets/images/menu/campaign.svg"
import campaignIconActive from "assets/images/menu/campaignActive.svg"

import walletIcon from "assets/images/menu/wallet.svg"
import walletActive from "assets/images/menu/walletActive.svg"

import delivery_reportIcon from "assets/images/menu/delivery_reports.svg"
import delivery_reportActive from "assets/images/menu/delivery_reportsActive.svg"

import helpIcon from "assets/images/menu/help.svg"
import helpActive from "assets/images/menu/helpActive.svg"

import { CAMPAIGN, CONTACTS, DASHBOARDHOME, DELIVERY_REPORS, HELP, INBOX, KEYWORDS, WALLET } from "pages/dashboard/ROUTESCONTS"

export const menuData = [
	{
		icon: dashboardIcon,
		activeIcon: dashboardActive,
		text: "Dashboard",
		isActive: false,
		link: DASHBOARDHOME
	},
	{
		icon: inboxIcon,
		activeIcon: inboxActive,
		text: "Inbox",
		isActive: false,
		link: INBOX
	},
	{
		icon: contactsIcon,
		activeIcon: contactsActive,
		text: "Contacts",
		isActive: false,
		link: CONTACTS
	},
	{
		icon: keywordsIcon,
		activeIcon: keywordsActive,
		text: "Keywords",
		isActive: false,
		link: KEYWORDS
	},
	{
		icon: campaignIcon,
		activeIcon: campaignIconActive,
		text: "Campaign",
		isActive: false,
		link: CAMPAIGN
	},

	{
		icon: walletIcon,
		activeIcon: walletActive,
		text: "Wallet",
		isActive: false,
		link: WALLET
	},
	{
		icon: delivery_reportIcon,
		activeIcon: delivery_reportActive,
		text: "Delivery Reports",
		isActive: false,
		link: DELIVERY_REPORS
	},
	{
		icon: helpIcon,
		activeIcon: helpActive,
		text: "Help",
		isActive: false,
		link: HELP
	}
]
