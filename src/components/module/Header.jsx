import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#ffffff",
		paddingRight: "2%",
		paddingLeft: "1%",
		height: "10vh",
	},
	logo: {
		fontFamily: "Questrial, sans-serif",
		fontWeight: 600,
		color: "#333333",
		textAlign: "left",
	},
	menuButton: {
		fontFamily: "Questrial, sans-serif",
		fontWeight: 700,
		size: "18px",
		marginLeft: "38px",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const headersData = [
	{
		label: "ASK",
		href: "/asklist",
	},
	{
		label: "HELP",
		href: "/asklist",
	},
	{
		label: "LOGIN",
		href: "/login",
	},
	{
		label: "SIGNUP",
		href: "/signup",
	},
	// {/* 👉まだLoginしてないときだけ以下をだす */}
	// 		{/* <Link to="/login">LogIn</Link>
	// {/*👉 すでにLoginしてたときのみ以下を出す */}
	// 			{/* <Link to="chatlist">Mail</Link> */}
	// 			{/* ドロップダウンで、以下の二つ(プロフィールかログアウト)を選択できる。そのドロップダウンより飛ぶ */}
	// 			{/* <Link to="profile">profile</Link>
	// 		<Link to="signout">SignOut</Link> */}
];

export default function Header() {
	const { header, logo, menuButton, toolbar } = useStyles();

	// 最終的にヘッダーに移っている内容
	const DISPLAY_DESKTOP = () => {
		return (
			<Toolbar className={toolbar}>
				{LOGO}
				<div>{MENU_BUTTON()}</div>
			</Toolbar>
		);
	};

	const history = useHistory();
	const LOGO_click = () => {
		history.push("/");
	};
	const LOGO = (
		<Typography
			variant="h4"
			component="h1"
			className={logo}
			onClick={() => LOGO_click()}
		>
			Stayful
		</Typography>
	);

	const MENU_BUTTON = () => {
		return headersData.map(({ label, href }) => {
			return (
				<Button
					{...{
						key: label,
						color: "#333333",
						to: href,
						component: Link,
						className: menuButton,
					}}
				>
					{label}
				</Button>
			);
		});
	};

	return (
		<div>
			<header>
				<AppBar className={header}>{DISPLAY_DESKTOP()} </AppBar>
			</header>
		</div>
	);
}
