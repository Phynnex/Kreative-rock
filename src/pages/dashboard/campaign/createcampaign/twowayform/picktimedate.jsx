import React from "react"
import arrowdownIcon from "assets/images/arrowdown.svg"
import { SelectTimeBody, TimerBodyBtn, TimerBtn } from "./picktimeStyles"
import { Img } from "globalStyles/style"
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
    outline: "none",
  },
  input2: {
    width: "400px",
    outline: "none",
  },
}));


function Picktimedate() {
	const classes = useStyles();
	return (
    <SelectTimeBody>
      <TimerBodyBtn>
        <TimerBtn>
          <form className={classes.container} noValidate>
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
                className: classes.input,
              }}
              InputProps={{ disableUnderline: true }}
            />
          </form>
        </TimerBtn>
        <TimerBtn>
          <TextField
            id="time"
            type="time"
            defaultValue="07:30"
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
              className: classes.input2,
            }}
            InputProps={{ disableUnderline: true }}
          />
        </TimerBtn>
      </TimerBodyBtn>
    </SelectTimeBody>
  );
}

export default Picktimedate
