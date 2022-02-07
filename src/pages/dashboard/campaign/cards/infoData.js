import camp from "assets/images/campaign.png"
import smstexting from "assets/images/sms-texting.png"
import { CREATCAMPAIGN_ONE, CREATCAMPAIGN_TWO } from "pages/dashboard/ROUTESCONTS"

const campaignInfoData = [
	{
		id: 1,
		title: "Simple Texting Solutions (1-Way SMS)",
		text: "Customize your Senders ID & personalize communications with your audience. Send text SMS worldwide and monitor your SMS delivery with our real time reporting.",
		imgUrl: smstexting,
		link: CREATCAMPAIGN_ONE
	},
	{
		id: 2,
		title: "Interactive Texting Solutions (2-Way SMS)",
		text: "Send and receive SMS globally. Engage in rich, simplified, purposeful and interactive conversation with your customers. Stay in touch with them & show them your care.",
		imgUrl: camp,
		link: CREATCAMPAIGN_TWO
	}
]

export default campaignInfoData
