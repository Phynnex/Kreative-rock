import React from "react"
import styled from "styled-components/macro"
// import PropTypes from "prop-types"
import _ from "lodash"

const PaginationDiv = styled.div`
	display: flex;
	justify-content: flex-end;
	overflow-x: scroll;
	margin-top: 10px;
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
`
const PaginationUl = styled.ul`
	/* width: 100%; */
	display: flex;
	gap: 5px;
	overflow-x: scroll;
	::-webkit-scrollbar {
		width: 0;
		background: transparent;
	}
	::-webkit-scrollbar-thumb {
		background: transparent;
	}
	li {
		list-style-type: none;
	}
`
const PaginationBtn = styled.button`
	height: 40px;
	padding: 0px 15px;
	color: #fff;
	background: #00a386;
	border-radius: 2px;
`

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
	const pagesCount = Math.ceil(itemsCount / pageSize)
	if (pagesCount === 1) return null
	const pages = _.range(1, pagesCount + 1)

	return (
		<PaginationDiv>
			<PaginationUl>
				{pages.map(page => (
					<li key={page}>
						<PaginationBtn>{page}</PaginationBtn>
					</li>
				))}
				<li>
					<PaginationBtn>Next</PaginationBtn>
				</li>
			</PaginationUl>
		</PaginationDiv>
	)
}

// Pagination.propTypes = {
// 	itemsCount: PropTypes.number.isRequired,
// 	pageSize: PropTypes.number.isRequired,
// 	currentPage: PropTypes.number.isRequired,
// 	onPageChange: PropTypes.func.isRequired
// }

export default Pagination
