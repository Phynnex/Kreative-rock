import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useAuthContext } from "context/AuthContext"

import http from "services/httpService"

export default function ProtectedRoute({ path, component }) {
	const { user } = useAuthContext()
	if (user?.isAuth && user?.isAuth === true) {
		http.setJwt(user?.data?.token)
		return <Route path={path} component={component} />
	} else {
		return <Redirect to="sign-in" />
	}
}
