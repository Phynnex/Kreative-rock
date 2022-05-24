import styled from "styled-components/macro"
import timerGridBg from "assets/images/scheduletimebg.svg"
import media from "utils/media"
import AppColors from "utils/colors"

// Add List Section
export const AddListContainer = styled.div`
	width: 35%;
	height: 330px;
	background: #f9fcff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	background-image: url(${timerGridBg});
	background-repeat: no-repeat;
	background-size: 300px 100px;
	background-position: 160% 100%;
	${media.smallDesktopMinimum`
	width: 70%;
    height: 380px;
	background-position: 122% 100%;  
    `}
	${media.tablet`
	width: 70%;
	background-position: 138% 100%;  
    `}
	${media.mobile`
	width: 95%;
    height: 350px;
	background-position: 310% 100%;  
    `}
`
export const ListItemsDiv = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 10%;
	border-radius: 10px;
	${media.smallDesktopMinimum`
	padding: 40px 10%;
    `}
	${media.tablet`
	padding: 40px 10%;
    `}
	${media.mobile`
	padding: 40px 5%;
    `}
`

export const AddListInput = styled.input`
	width: ${({ w }) => (w ? w : "100%")};
	height: 50px;
	outline: none;
	margin-top: 18px;
	padding: 0px 10px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	${media.mobile`
	width: ${({ mw }) => (mw ? mw : "100%")};
	`}
`

// Create Contact Section
export const CreateContactContainer = styled.div`
	width: 40%;
	background: #f9fcff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	${media.smallDesktopMinimum`
	width: 70%;
    
	background-position: 122% 100%;  
    `}
	${media.tablet`
	width: 70%;
	background-position: 138% 100%;  
    `}
	${media.mobile`
	width: 95%;
	background-position: 310% 100%;  

    `}
`

export const AddContactDiv = styled.form`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px 5%;
	border-radius: 10px;
	${media.smallDesktopMinimum`
	padding: 40px 10%;
    `}
	${media.tablet`
	padding: 40px 10%;
    `}
	${media.mobile`
	padding: 40px 5%;
    `}
`
export const HalfAddInputDiv = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
export const CountrySelect = styled.div`
	position: relative;
	height: 50px;
	width: 20%;
	margin-top: 18px;
	border: none;
	display: flex;
	color: ${AppColors.lightBlack};
	/* box-sizing: border-box; */
	border-radius: 5px;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	${media.tablet`
   width:20%;
  `}
	${media.mobile`
   width:25%;
   margin-left: 0px;
  `}

  select {
		font-size: 14px;
		height: 100%;
		width: 100%;
		padding: 0em 1em 0em 1em;
		background: transparent;
		color: ${AppColors.lightBlack};
		border: none;
		outline: none;
		border-radius: 3px;
		appearance: none;
		option {
			color: ${AppColors.lightBlack};
			background: transparent;
			border: none;
		}
	}
	div {
		position: absolute;
		right: 2%;
		color: ${AppColors.white};
		background: #f1f1f1;

		height: 100%;
		width: 2em;
		pointer-events: none;
		display: flex;
		align-items: center;
	}

	${media.mobile`
    select {
        padding: 0em 2px 0em 2px;
    }
    `}
`

// Import Contacts Section
export const ImportContactContainer = styled.div`
	width: 40%;
	height: 370px;
	background: #f9fcff;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	border-radius: 10px;
	background-image: url(${timerGridBg});
	background-repeat: no-repeat;
	background-size: 300px 100px;
	background-position: 140% 100%;
	${media.smallDesktopMinimum`
	width: 70%;
    height: 380px;
	background-position: 122% 100%;  
    `}
	${media.tablet`
	width: 70%;
	background-position: 138% 100%;  
    `}
	${media.mobile`
	width: 95%;
	background-position: 310% 100%;  
    height: 400px;
    `}
`
export const UploadFileDIv = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: #f1f1f1;
	border: 1px solid rgba(0, 204, 167, 0.7);
	box-sizing: border-box;
	border-radius: 5px;
	h6 {
		font-weight: bold;
		margin-left: 10px;
		color: #b6b6b6;
	}
	${media.mobile`
    h6 {
		font-weight: bold;
		margin-left: 10px;
		color: #b6b6b6;
        font-size: 12px;
	}
	z-index:1;
	&:hover:{
		opacity:0.8
	}
    `}
`
export const UploadFilePicker = styled.div`
	width: 35%;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0px 10px;
	gap: 10px;
	color: ${AppColors.white};
	background: #00cca7;
	border-radius: 10px;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	cursor: pointer;
	${media.mobile`
    width: 39%;
    font-spacing:2px;
	font-size: 13px;
    `}
`



