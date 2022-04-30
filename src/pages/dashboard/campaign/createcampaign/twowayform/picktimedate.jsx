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
  },
  input2: {
    width: "300px",
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
              InputProps={{
                className: classes.input,
                disableUnderline: true,
              }}
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
            InputProps={{
              disableUnderline: true,
              step: 300, // 5 min
              className: classes.input,
            }}
          />
        </TimerBtn>
      </TimerBodyBtn>
    </SelectTimeBody>
  );
}

export default Picktimedate
