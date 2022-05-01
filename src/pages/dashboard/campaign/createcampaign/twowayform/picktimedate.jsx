import { SelectTimeBody, TimerBodyBtn, TimerBtn } from "./picktimeStyles"
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";


const useStyles = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		// width: 200,
	},
	input: {
		width: "300px",
	},
	input2: {
		width: "300px",
	},
}));



function Picktimedate({ date, time }) {
	const classes = useStyles();


	return (
		<SelectTimeBody>
			<TimerBodyBtn>
				<TimerBtn>
					<form className={classes.container} noValidate>
						<TextField
							id="date"
							type="date"
							className={classes.textField}
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{
								className: classes.input,
								disableUnderline: true,
							}}
							onChange={e => date(e.target.value)}
						/>
					</form>
				</TimerBtn>
				<TimerBtn>
					<TextField
						id="time"
						type="time"
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							disableUnderline: true,
							step: 300, // 5 min
							className: classes.input,
						}}
						onChange={e => time(e.target.value)}
					/>
				</TimerBtn>
			</TimerBodyBtn>
		</SelectTimeBody>
	);
}

export default Picktimedate
