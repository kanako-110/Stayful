import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthService";
import SelectedMenu from "../atoms/SelectedMenu";
import styled from "styled-components";
import {
	AppBar,
	makeStyles,
	Toolbar,
	Typography,
	Button,
} from "@material-ui/core";
import MailImg from "../../img/envelope.png";

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: "#ffffff",
		paddingRight: "2%",
		paddingLeft: "1%",
		height: "10vh",
		color: "#333333",
		fontFamily: "Questrial, sans-serif",
	},
	logo: {
		fontFamily: "Questrial, sans-serif",
		fontWeight: 600,
		color: "#333333",
		textAlign: "left",
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
}));

const BUTTON_BOX = styled.div`
	display: flex;
	justify-content: space-between;
	width: 30%;
`;

const LINK = styled.a`
	font-size: 1.1rem;
	padding: 3%;
	font-weight: bold;
	border-radius: 6px;
	color: #333333;
	text-decoration: none;
	height: 30px;
	line-height: 30px;
	&:hover {
		color: "#333333";
		background-color: rgb(23 22 22 / 7%);
	}
`;




export default function Header() {
	const { header, logo,  toolbar } = useStyles();

	// 最終的にヘッダーに移っている内容
	const DISPLAY_DESKTOP = () => {
		return (
			<Toolbar className={toolbar}>
				{LOGO}
				{MENU_BUTTON()}
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
		if (user) {
			return (
				<BUTTON_BOX>
					<LINK href="/asklist">ASK</LINK>
					<LINK href="/asklist">HELP</LINK>
					<LINK href="/chatlist">
						<img
							src={MailImg}
							style={{
								height: "30px",
							}}
						/>
					</LINK>
					<SelectedMenu  />
				</BUTTON_BOX>
			);
		
		}	else {  	// -------未ログイン時--------//
			return (
				<BUTTON_BOX>
					<LINK href="/asklist">ASK</LINK>
					<LINK href="/asklist">HELP</LINK>
					<LINK href="/login">LOGIN</LINK>
					<LINK href="/signup">SIGNUP</LINK>
				</BUTTON_BOX>
			);
		}
	};

	return (
		<div>
			<header>
				<AppBar className={header}>{DISPLAY_DESKTOP()}</AppBar>
			</header>
		</div>
	);
}
