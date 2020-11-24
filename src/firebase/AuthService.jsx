import React, { useEffect, useState } from "react";
import firebase from "./firebase";

const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		// ------ログイン、ログアウト時にユーザーの情報をuserの中に入れる------//
		firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
	}, []);

	return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
