import React, { PureComponent } from "react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
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
		<svg x={cx - 10} y={cy - 10} width={40} height={40} fill="none" xmlns="http://www.w3.org/2000/svg">
			<path opacity="0.5" d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="white" />
			<path d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="white" />
		</svg>
	)
}

export default class ChartOneData extends PureComponent {
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
					{/* <CartesianGrid horizontal={false} vertical={false} /> */}
					<XAxis dataKey="name" hide={true} />
					<YAxis hide={true} />
					<Tooltip allowEscapeViewBox={{ x: true, y: true }} />
					<Line type="monotoneX" name="pv" dataKey="pv" stroke={AppColors.white} strokeWidth={4} activeDot={<CustomizedDot />} dot={false} />
				</LineChart>
			</ResponsiveContainer>
		)
	}
}
