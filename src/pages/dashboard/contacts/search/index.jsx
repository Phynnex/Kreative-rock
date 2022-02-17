import React from "react"
import { SearchDiv } from "./style"
import searchIcon from "assets/images/searchIcon.svg"
import { Img } from "globalStyles/style"
function SearchContacts() {
	return (
		<SearchDiv>
			<Img src={searchIcon} alt="searchIcon" />
			<input type="text" placeholder="Search Contacts" />
		</SearchDiv>
	)
}

export default SearchContacts
