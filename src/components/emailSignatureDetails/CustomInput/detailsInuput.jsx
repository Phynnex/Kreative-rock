function DetailsInuput({ label, name, type = "text", placeholder, ...rest }) {
	return (
		<div className="row mt-3 d-flex align-items-center align-content-around">
			{label && (
				<div className="col-6 col-xs-2  col-sm-12 col-md-2 ">
					<label>{label} </label>
				</div>
			)}

			<div className="col-12 col-xs-12 col-md-8 col-sm-12 ml-3">
				<input
					className="w-100"
					{...rest}
					type={type}
					id={name}
					name={name}
					placeholder={placeholder}
					style={{
						height: "50px",
						background: "#F3F3F3",
						border: "1px solid rgba(0, 204, 167, 0.25)",
						boxSizing: "border-box",
						borderRadius: "5px"
					}}
				/>
			</div>
		</div>
	)
}

export default DetailsInuput
