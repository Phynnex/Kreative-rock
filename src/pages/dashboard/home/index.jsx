import React from "react"

import MTchartone from "./charts/chartone"
import MTchartThree from "./charts/chartthree"
import MTchartTwo from "./charts/charttwo"
import MTLabelSection from "./charts/labelsection"
import MTchartPie from "./charts/piechart"
import { MtAnaltics, MtAnalticsContainer, MTChartsLeft, MTChartsRight, MtHome, MTmainBody, MTmainCharts, MtTopMost } from "./style"

import DashboardTopSection from "./topSection"
import MobileTextingCard from "./topSection/analytics"
import MtDChart1 from "./topSection/chart"
import copy from "assets/images/copyicon.svg"
import earningIcon from "assets/images/earningHome.svg"
function DashboardPage() {
	return (
		<MTmainBody>
			<MtTopMost></MtTopMost>
			<MtHome>
				<DashboardTopSection />
				<MtAnalticsContainer>
					<MtAnaltics>
						<MobileTextingCard icon={earningIcon} textBolod="41.7K" desc="Earning" />
						<MtDChart1 />
						<MobileTextingCard icon={copy} textBolod="2.8K" desc="Current Balance" />
					</MtAnaltics>
				</MtAnalticsContainer>
			</MtHome>

			<MTmainCharts>
				<MTChartsLeft>
					<MTchartone />
					<MTchartTwo />
				</MTChartsLeft>
				<MTChartsRight>
					<MTchartThree />
					<MTchartPie />
					<MTLabelSection />
				</MTChartsRight>
			</MTmainCharts>
		</MTmainBody>
	)
}

export default DashboardPage
