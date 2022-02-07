import React, { PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import AppColors from "utils/colors"

const data = [
	{
		name: "Page A",
		pv: 2400,
		amt: 2400
	},
	{
		name: "Page B",
		pv: 1398,
		amt: 2210
	},
	{
		name: "Page C",
		pv: 3800,
		amt: 2290
	},
	{
		name: "Page D",
		pv: 3908,
		amt: 2000
	},
	{
		name: "Page E",
		pv: 4800,
		amt: 2181
	},
	{
		name: "Page F",
		pv: 3800,
		amt: 2500
	},
	{
		name: "Page G",
		pv: 4300,
		amt: 2100
	}
]

const CustomizedDot = props => {
	const { cx, cy, stroke, payload, value } = props

	return (
		// <svg x={cx - 10} y={cy - 10} width={20} height={20} fill="none" xmlns="http://www.w3.org/2000/svg">
		// 	<path opacity="0.5" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white" />
		// 	<path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="white" />
		// </svg>
		<svg x={cx - 10} y={cy - 10} width={30} height={30} fill="none" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.5"
				d="M10.8906 20.979C16.4135 20.979 20.8906 16.5019 20.8906 10.979C20.8906 5.45616 16.4135 0.979004 10.8906 0.979004C5.36778 0.979004 0.890625 5.45616 0.890625 10.979C0.890625 16.5019 5.36778 20.979 10.8906 20.979Z"
				fill="#00CCA7"
			/>
			<path
				d="M10.8906 14.979C13.0998 14.979 14.8906 13.1881 14.8906 10.979C14.8906 8.76986 13.0998 6.979 10.8906 6.979C8.68149 6.979 6.89062 8.76986 6.89062 10.979C6.89062 13.1881 8.68149 14.979 10.8906 14.979Z"
				fill="#00CCA7"
			/>
		</svg>
	)
}

export default class TotalMessageSentInMonth extends PureComponent {
	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}
				>
					<CartesianGrid horizontal={false} vertical={true} />
					<XAxis dataKey="name" hide={true} />
					<YAxis hide={true} />
					<Tooltip allowEscapeViewBox={{ x: true, y: true }} />
					<Line type="monotoneX" name="pv" dataKey="pv" stroke={AppColors.footerBlue} strokeWidth={4} activeDot={<CustomizedDot />} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		)
	}
}
