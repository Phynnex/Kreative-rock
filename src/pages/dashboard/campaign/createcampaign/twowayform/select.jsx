import React from "react"
import fsjhf from "assets/images/arrowdown.svg"
import { Img } from "globalStyles/style"
import { SenderIdSelect } from "./twoWaySelect"
import { useQuery } from "react-query"
import { getUserSenderIds } from "services/senderIdService"
import { getUserKeywords } from "services/keywordService"

function CustomSelectIdTwo({ value, onChange, name, ...rest }) {
	const { data: senderId } = useQuery("senderIds", getUserSenderIds)
	const senderIds = senderId?.payload

	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option
					value=""
				>
					Select Sender ID
				</option>
				{senderIds?.map((item, index) => (
					<option
						key={index}
						value={item.senderId}
					>
						{item.senderId}
					</option>
				))}
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}

export default CustomSelectIdTwo


export function CustomSelectRecipient({ value, onChange, name, ...rest }) {
	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option
					value=""
				>
					Select Recipients
				</option>
				{recipientList?.map((item) => (
					<option
						key={item.id}
						value={item.title}
					>
						{item.title}
					</option>
				))}
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}


export function CustomSelectKeyword({ value, onChange, name, ...rest }) {
	const { data: keywordData } = useQuery("keywords", getUserKeywords)
	const keywords = keywordData?.payload

	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option
					value=""
				>
					Select Keyword
				</option>
				{keywords?.map((item) => (
					<option
						key={item.id}
						value={item.keyword}
					>
						{item.keyword}
					</option>
				))}
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}


export function CustomSelectCampaignRecurrence({ value, onChange, name, ...rest }) {
	return (
		<SenderIdSelect>
			<select onChange={onChange} name={name} {...rest}>
				<option
					value=""
				>
					Select Campaign Recurrence
				</option>
				{campaignRecurrence?.map((item) => (
					<option
						key={item.id}
						value={item.id}
					>
						{item.title}
					</option>
				))}
			</select>
			<div>
				<Img src={fsjhf} alt="select" />
			</div>
		</SenderIdSelect>
	)
}


export const recipientList = [
	{
		id: 1,
		title: 'KGB',
		list: [
			{
				contactId: "89890000-ssdd",
				phoneNumber: "2347065645159"
			},
			{
				contactId: "89890000-ssrr",
				phoneNumber: "2348027021766"
			}
		]
	}
]


export const monthName = (month) => {

	let m = ''
	switch (month) {
		case 1:
			m = 'January'
			break;
		case 2:
			m = 'February'
			break;
		case 3:
			m = 'March'
			break;
		case 4:
			m = 'April'
			break;
		case 5:
			m = 'May'
			break;
		case 6:
			m = 'June'
			break;
		case 7:
			m = 'July'
			break;
		case 8:
			m = 'August'
			break;
		case 9:
			m = 'September'
			break;
		case 10:
			m = 'October'
			break;
		case 11:
			m = 'November'
			break;
		case 12:
			m = 'December'
			break;
		default:
			m = ''
	}

	return m
}

export const campaignRecurrence = [
	{
		id: "one-time",
		title: 'One Time'
	},
	{
		id: "day",
		title: 'Every Day'
	},
	{
		id: "week",
		title: 'Every Week'
	},
	{
		id: "month",
		title: 'Every Month'
	},
	{
		id: "year",
		title: 'Every Year'
	}
]

