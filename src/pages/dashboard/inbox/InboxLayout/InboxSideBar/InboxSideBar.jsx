import { CircularProgress } from "@material-ui/core"
import React from "react"
import { useQuery } from "react-query"
import { getConversations } from "services/conversationService"
// import { inboxData } from './sampleData';
import { ReactComponent as SearchIcon } from "../../../../../assets/images/search-icon.svg"
//import { inboxData } from "./sampledata"
//import { inboxData } from "./sampledata"

const InboxSideBar = ({ setInboxId, inboxId }) => {
	const { data: conversations } = useQuery("conversations", getConversations)

	const handleDisplay = () => {
		if (!conversations) {
			return (
				<div
					style={{ textAlign: 'center', padding: '2rem' }}
					className='inbox-sidebar-wrapper'
				>
					<CircularProgress size={25} />
				</div>
			)
		}

		if (conversations) {
			return contentDisplay()
		}
	}


	const contentDisplay = () => {
		return (
			<div className="inbox-sidebar-wrapper">
				<div className="inbox-sidebar-search-wrapper">
					<label htmlFor="search-inbox">
						<SearchIcon />
					</label>
					<input type="search" name="search-inbox" id="search-inbox" placeholder="Search" />
				</div>
				<div className="d-flex justify-content-between mb-3" style={{ margin: "0 15px 0 17px" }}>
					<h4 className="inbox-sidebar-h4">Show all</h4>
					<h4 className="inbox-sidebar-h4">Most Recent</h4>
				</div>
				<div>
					{conversations?.payload?.map((inbox) => (
						<>
							<div
								className="inbox-overview-list"
								key={inbox._id}
								style={{
									backgroundColor: inbox.phoneNumber === inboxId ? "rgba(0, 204, 167, 0.13)" : ""
								}}
								onClick={() => setInboxId(inbox.phoneNumber)}
							>
								<>
									<h2 className="inbox-sidebar-h2">{inbox.phoneNumber}</h2>
									<div className="d-flex align-items-end mt-1 mb-2">
										<h3 className="inbox-sidebar-h3" style={{ color: "#918d8d", width: "210px" }}>
											{inbox.messages[0].message}
										</h3>
										<h3 className="inbox-sidebar-h3">{`Now`}</h3>
									</div>

								</>
							</div>

						</>
					))}
				</div>

			</div>
		)
	}

	return (
		<>{handleDisplay()}</>
	)
}

export default InboxSideBar
