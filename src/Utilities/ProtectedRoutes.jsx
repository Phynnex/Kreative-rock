import { useAuthContext } from "context/AuthContext"
import React from "react"
import { Redirect, Route } from "react-router-dom"

// import { useAuthContext } from '@app/context/AuthContext';
// import { LOGIN } from '@app/routes';
// import http from '@app/services/httpService';

export default function ProtectedRoute({ path, component }) {
	const { user } = useAuthContext()
	if (user?.isAuth && user?.isAuth === true) {
		return <Route path={path} component={component} />
	} else {
		return <Redirect to="sign-in" />
	}
}
