import React, { useEffect } from "react"
import styled from "styled-components/macro"

const PageScroll = styled.div`
	display: none;
`

function ScrollToTop() {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return <PageScroll></PageScroll>
}

export default ScrollToTop
