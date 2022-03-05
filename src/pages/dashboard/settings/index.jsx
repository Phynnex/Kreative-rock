import React from "react"
import { KreativeP } from "globalStyles/style"
import { LineDiv } from "../sendId/style"
import { ScenterDiv, SettingsContainer, SettingsTab, SettingsDivBtn } from "./style"
import ProfileBtnData from "./buttonData"
import { useSettingTabStatus } from "context/SettingsContext"
import AppColors from "utils/colors"
import PersonalTab from "./personal"
import AccountTab from "./account"
import BusinessTab from "./business"
function SettingsPage() {
	const { tab, handChangeTab } = useSettingTabStatus()
	return (
		<SettingsContainer>
			<ScenterDiv>
				<h5>MY PROFILE</h5>
			</ScenterDiv>
			<SettingsTab>
				{ProfileBtnData?.map(setting => (
					<SettingsDivBtn key={setting.id} bm={tab === setting.id ? `3px solid  ${AppColors.brandColor}` : null} onClick={() => handChangeTab(setting.id)}>
						<KreativeP fw={tab === setting.id ? "bold" : "bold"} color={tab === setting.id ? AppColors.black2 : AppColors.black2} fs="18px">
							{setting.title}
						</KreativeP>
					</SettingsDivBtn>
				))}
			</SettingsTab>
			<LineDiv />

			{tab === 0 && <PersonalTab />}
			{tab === 1 && <BusinessTab />}
			{tab === 2 && <AccountTab />}
		</SettingsContainer>
	)
}

export default SettingsPage
