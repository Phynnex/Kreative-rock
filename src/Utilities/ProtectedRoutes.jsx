import React from "react"
import { Route } from "react-router-dom"

// import { useAuthContext } from '@app/context/AuthContext';
// import { LOGIN } from '@app/routes';
// import http from '@app/services/httpService';

export default function ProtectedRoute({ path, component }) {
	// const { user } = useAuthContext();
	// if (user?.isAuth && user?.isAuth === true) {
	// http.setJwt(user?.token);
	return <Route path={path} component={component} />
	// } else {
	//   // http.setJwt("")
	//   // sessionStorage.removeItem("userDetails")
	//   return <Redirect to={LOGIN} />;
	// }
}
