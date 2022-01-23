import styled from "styled-components/macro"
import AppColors from "utils/colors"

const UserInput = styled.input`
	width: 100%;
	height: 50px;
	background: #f3f3f3;
	border: 1px solid rgba(0, 204, 167, 0.25);
	box-sizing: border-box;
	border-radius: 5px;
	&:focus {
		border: 1px solid red;
	}
`

function DetailsInuput({ label, name, type = "text", placeholder, ...rest }) {
	return (
		<div className="row mt-3 d-flex align-items-center align-content-around">
			{label && (
				<div className="col-6 col-xs-2  col-sm-12 col-md-2 ">
					<label>{label} </label>
				</div>
			)}

			<div className="col-12 col-xs-12 col-md-8 col-sm-12 ml-3">
				<UserInput {...rest} type={type} id={name} name={name} placeholder={placeholder} />
			</div>
		</div>
	)
}

export default DetailsInuput
