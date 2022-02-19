import React, { PureComponent } from "react"
import AppColors from "utils/colors"
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts"

const data = [
	{ name: "Available", value: 209 },
	{ name: "Total", value: 100 }
]

const renderActiveShape = props => {
	const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, color } = props

	return (
		<g>
			<text x={cx} y={cy} dy={8} textAnchor="middle" fill={AppColors.black2}>
				${payload.value}
			</text>
			<Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={fill} />
			<Sector cx={cx} cy={cy} innerRadius={innerRadius} outerRadius={outerRadius} startAngle={startAngle} endAngle={endAngle} fill={color} />
		</g>
	)
}

export default class WalletPieChat extends PureComponent {
	state = {
		activeIndex: 0
	}

	onPieEnter = (_, index) => {
		this.setState({
			activeIndex: index
		})
	}

	render() {
		return (
			<ResponsiveContainer width="100%" height="100%">
				<PieChart width={200} height={200}>
					<Pie
						activeIndex={this.state.activeIndex}
						activeShape={renderActiveShape}
						data={data}
						cx="50%"
						cy="50%"
						paddingAngle={0}
						innerRadius={"60%"}
						outerRadius={"90px"}
						fill={AppColors.footerBlue}
						color={AppColors.brandColor}
						dataKey="value"
						onMouseEnter={this.onPieEnter}
					/>
				</PieChart>
			</ResponsiveContainer>
		)
	}
}
