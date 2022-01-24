import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "react-phone-input-2/lib/style.css"
import reportWebVitals from "./reportWebVitals"
import { ThemeProvider } from "@material-ui/core"
import theme from "./theme/theme"
import Store from "context/store"

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<Store>
			<App />
		</Store>
	</ThemeProvider>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
