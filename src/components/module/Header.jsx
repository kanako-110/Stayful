import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { AuthContext } from "../../firebase/AuthService";
import SelectedMenu from "../atoms/SelectedMenu";
import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import MailImg from "../../img/envelope.png";

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

// ----未ログイン時------//
const HEADER_DATA_WITHOUT_LOGIN = [
	{
		label: "ASK",
		href: "/asklist",
	},
	{
		label: "HELP",
		href: "/asklist",
	},
	// ---未ログイン時----//
	{
		label: "LOGIN",
		href: "/login",
	},
	{
		label: "SIGNUP",
		href: "/signup",
	},
];

const handle_logout = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			console.log("ログアウトしました");
		})
		.catch((error) => {
			console.log(`ログアウト時にエラーが発生しました (${error})`);
		});
};

//-----すでにログイン済み時--------//
const HEADER_DATA_WITH_LOGIN = [
	{
		label: "ASK",
		href: "/asklist",
	},
	{
		label: "HELP",
		href: "/asklist",
	},
	//---すでにログイン済み時---//
	{
		label: "MAIL",
		// label : <img src={MailImg} style={ {height: "30px", display: "inline-block", verticalAlign: "middle"} }/>,
		// label: (
		// 	<MailOutlineIcon
		// 		fontSize="large"
		// 		style={{ display: "inline-block", verticalAlign: "middle" }}
		// 	/>
		// ),
		href: "/chatlist",
	},
	{
		label: <SelectedMenu handle_logout={handle_logout} />,
	},
];

export default function Header({}) {
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

	const user = useContext(AuthContext);
	const MENU_BUTTON = () => {
		console.log(user);
		if (user) {
			return HEADER_DATA_WITH_LOGIN.map(({ label, href }) => {
				return (
					<Button
						{...{
							key: label,
							color: "#333333",
							to: href,
							component: Link,
							className: menuButton,
							size: "large",
						}}
					>
						<div style={{ fontSize: "1.2rem" }}> {label} </div>
					</Button>
				);
			});
		}
		if (!user) {
			return HEADER_DATA_WITHOUT_LOGIN.map(({ label, href }) => {
				return (
					<Button
						{...{
							key: label,
							color: "#333333",
							to: href,
							component: Link,
							className: menuButton,
							size: "large",
						}}
					>
						<div style={{ fontSize: "1.2rem" }}> {label} </div>
					</Button>
				);
			});
		}
	};

	return (
		<div>
			<header>
				<AppBar className={header}>{DISPLAY_DESKTOP()} </AppBar>
			</header>
		</div>
	);
}
