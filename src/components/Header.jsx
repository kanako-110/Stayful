import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div>
			<h1>Stayful</h1>
			<Link to="asklist">ASK</Link>
			<Link to="asklist">HELP</Link>
			{/* 👉まだLoginしてないときだけ以下をだす */}
			<Link to="/login">LogIn</Link>
			<Link to="signup">SignUp</Link>
			{/* すでにLoginしてたときのみ以下を出す */}
			<Link to="chatlist">Mail</Link>
			{/* ドロップダウンで、以下の二つ(プロフィールかログアウト)を選択できる。そのドロップダウンより飛ぶ */}
			<Link to="profile">profile</Link>
			<Link to="signout">SignOut</Link>
		</div>
	);
};

export default Header;
