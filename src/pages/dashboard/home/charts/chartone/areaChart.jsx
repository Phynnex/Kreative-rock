import React, { PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import AppColors from "utils/colors"

const data = [
	{
		name: "Jan",
		pv: 2400,
		amt: 2400
	},
	{
		name: "Feb",
		pv: 1398,
		amt: 2210
	},
	{
		name: "Mar",
		pv: 3800,
		amt: 2290
	},
	{
		name: "Apr",
		pv: 3908,
		amt: 2000
	},
	{
		name: "May",
		pv: 4800,
		amt: 2181
	},
	{
		name: "Jun",
		pv: 3800,
		amt: 2500
	},
	{
		name: "Jul",
		pv: 4300,
		amt: 2100
	},
	{
		name: "Aug",
		pv: 4300,
		amt: 2100
	},
	{
		name: "Sep",
		pv: 4300,
		amt: 2100
	},
	{
		name: "Oct",
		pv: 4300,
		amt: 2100
	},
	{
		name: "Nov",
		pv: 4300,
		amt: 2100
	},
	{
		name: "Dec",
		pv: 4300,
		amt: 2100
	}
]

const CustomizedDot = props => {
	const { cx, cy } = props

	return (
		<svg x={cx - 10} y={cy - 10} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				opacity="0.5"
				d="M10.8906 20.979C16.4135 20.979 20.8906 16.5019 20.8906 10.979C20.8906 5.45616 16.4135 0.979004 10.8906 0.979004C5.36778 0.979004 0.890625 5.45616 0.890625 10.979C0.890625 16.5019 5.36778 20.979 10.8906 20.979Z"
				fill="#FF7900"
			/>
			<path
				d="M10.8906 14.979C13.0998 14.979 14.8906 13.1881 14.8906 10.979C14.8906 8.76986 13.0998 6.979 10.8906 6.979C8.68149 6.979 6.89062 8.76986 6.89062 10.979C6.89062 13.1881 8.68149 14.979 10.8906 14.979Z"
				fill="#FF7900"
			/>
		</svg>
	)
}

export default class ChartTotal extends PureComponent {
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
						left: 20
						// bottom: 5
					}}
				>
					<CartesianGrid horizontal={false} vertical={true} />
					<XAxis dataKey="name" hide={false} height={30} />
					<YAxis hide={true} />
					<Tooltip allowEscapeViewBox={{ x: true, y: true }} />
					<Line type="monotoneY" name="pv" dataKey="pv" stroke={AppColors.brandColor} strokeWidth={4} activeDot={<CustomizedDot />} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		)
	}
}
