// --------ログイン状態によって行う処理---------//
import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./AuthService";

export default function LoggedInRoute({ component: Component, ...rest }) {
	const user = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props) =>
				user ? <Component {...props} /> : <Redirect to={"/login"} />
			}
		/>
	);
}
