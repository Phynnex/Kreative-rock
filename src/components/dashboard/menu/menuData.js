import dashboardIcon from "assets/images/icons/dashboard.svg"
import dashboardActive from "assets/images/icons/dashboardActive.svg"

import inboxIcon from "assets/images/icons/inbox.svg"
import inboxActive from "assets/images/icons/inboxActive.svg"

import contactsIcon from "assets/images/icons/contacts.svg"
import contactsActive from "assets/images/icons/contactsActive.svg"

import senderidIcon from "assets/images/icons/sender_id.svg"
import senderidActive from "assets/images/icons/sender_idActive.svg"

import keywordsIcon from "assets/images/icons/keywords.svg"
import keywordsActive from "assets/images/icons/keywordsActive.svg"

import autoresponseIcon from "assets/images/icons/autoresponse.svg"
import autoresponseActive from "assets/images/icons/autoresponseActive.svg"

import campaignIcon from "assets/images/icons/compaign.svg"
import campaignIconActive from "assets/images/icons/compaignActive.svg"

import viewallcampaignsIcon from "assets/images/icons/view_all_compaign.svg"
import viewallcampaignsActive from "assets/images/icons/view_all_compaignActive.svg"

import walletIcon from "assets/images/icons/wallet.svg"
import walletActive from "assets/images/icons/walletActive.svg"

import delivery_reportIcon from "assets/images/icons/delivery_reports.svg"
import delivery_reportActive from "assets/images/icons/delivery_reportsActive.svg"

import helpIcon from "assets/images/icons/help.svg"
import helpActive from "assets/images/icons/helpActive.svg"

import settingsIcon from "assets/images/icons/settings.svg"
import settingsActive from "assets/images/icons/settingsActive.svg"

import logoutIcon from "assets/images/icons/logout.svg"
import logoutActive from "assets/images/icons/logoutActive.svg"

import {
	ACCOUNTING_SETTINGS,
	ALL_CAMPAIGNS,
	AUTO_RESPONSES,
	CAMPAIGN,
	CONTACTS,
	DASHBOARDHOME,
	DELIVERY_REPORS,
	D_LOGOUT,
	HELP,
	INBOX,
	KEYWORDS,
	SENDER_ID_LIST,
	WALLET
} from "pages/dashboard/ROUTESCONTS"

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
		icon: senderidIcon,
		activeIcon: senderidActive,
		text: "Sender Id",
		isActive: false,
		link: SENDER_ID_LIST
	},
	{
		icon: keywordsIcon,
		activeIcon: keywordsActive,
		text: "Keywords",
		isActive: false,
		link: KEYWORDS
	},
	{
		icon: autoresponseIcon,
		activeIcon: autoresponseActive,
		text: "Auto Response",
		isActive: false,
		link: AUTO_RESPONSES
	},
	{
		icon: campaignIcon,
		activeIcon: campaignIconActive,
		text: "Campaign",
		isActive: false,
		link: CAMPAIGN
	},
	{
		icon: viewallcampaignsIcon,
		activeIcon: viewallcampaignsActive,
		text: "View All Campaigns",
		isActive: false,
		link: ALL_CAMPAIGNS
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
		icon: settingsIcon,
		activeIcon: settingsActive,
		text: "Profile Settings",
		isActive: false,
		link: ACCOUNTING_SETTINGS
	},
	{
		icon: helpIcon,
		activeIcon: helpActive,
		text: "Help",
		isActive: false,
		link: HELP
	},
	{
		icon: logoutIcon,
		activeIcon: logoutActive,
		text: "Log Out",
		isActive: false,
		link: D_LOGOUT
	}
]
