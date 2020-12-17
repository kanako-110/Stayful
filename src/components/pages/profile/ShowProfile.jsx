import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthService";
import firebase from "../../../firebase/firebase";
import Button from "../../atoms/Button";
import styled from "styled-components";
import { sp, tab } from "../../../media";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TranslateIcon from "@material-ui/icons/Translate";
import PublicIcon from "@material-ui/icons/Public";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(15),
		height: theme.spacing(15),
	},
	rootTxt: {
		fontSize: "1rem",
		"&$disabled": {
			color: "#343334",
		},
	},
	disabled: {},
	margin: {
		margin: theme.spacing(1),
	},
}));

const TOP_DIV = styled.div`
	${tab`
padding-top: 5%;
`}
	${sp`
	padding-top: 13%;
`}
`;

const PROFILE_EDITBOX = styled.div`
	display: flex;
	justify-content: space-between;
`;

const H3 = styled.h3`
	padding-bottom: 3%;
	color: #f5b47a;
	font-size: 1.3rem;
`;

const PROFILE_BOX = styled.div`
	height: 55vh;
	margin: auto;
	padding: 1% 2%;
`;

const BUTTON_POSITION = styled.div`
	float: right;
	margin-top: 5%;
	margin-right: 25%;
	${tab`
		margin-right: 45%;
 `}
	${sp`
		margin-right: 55%;
	`}
`;

export default function ShowProfile() {
	const classes = useStyles();
	const user = useContext(AuthContext);
	const history = useHistory();
	const [profilesData, setProfilesData] = useState([]);

	useEffect(() => {
		if (user) {
			firebase
				.firestore()
				.collection("userProfile")
				.where("userId", "==", user.uid)
				.get()
				.then((data) => {
					const response = data.docs.map((doc) => {
						return doc.data();
					});
					setProfilesData(response);
				});
		}
	}, [user]);

	const editButton = () => {
		if (user && profilesData[0] && user.uid === profilesData[0].userId) {
			return (
				<BUTTON_POSITION onClick={onButton_click}>
					<Button text="プロフィールを編集する" />
				</BUTTON_POSITION>
			);
		}
	};

	const onButton_click = () => {
		history.push(`/editprofile/${user.displayName}`);
	};

	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<TOP_DIV className="ENTIRE_DIV">
				<PROFILE_EDITBOX>
					<div>
						<Avatar src="/broken-image.jpg" className={classes.large} />
					</div>
					<div style={{ width: "80%" }}>
						<H3>プロフィール</H3>
						<PROFILE_BOX>
							<form>
								<TextField
									className={classes.margin}
									disabled
									name="displayName"
									id="input-with-icon-textfield"
									label="ユーザーネーム"
									style={{ width: "60%" }}
									InputProps={{
										classes: {
											root: classes.rootTxt,
											disabled: classes.disabled,
										},
										startAdornment: (
											<InputAdornment position="start">
												<AccountCircle />
											</InputAdornment>
										),
									}}
									value={user ? user.displayName : ""}
								/>
								<br />
								<TextField
									className={classes.margin}
									disabled
									name="language"
									id="input-with-icon-textfield"
									label="話せる言語"
									style={{ width: "60%" }}
									InputProps={{
										classes: {
											root: classes.rootTxt,
											disabled: classes.disabled,
										},
										startAdornment: (
											<InputAdornment position="start">
												<TranslateIcon />
											</InputAdornment>
										),
									}}
									// プロフィール投稿内容があるときのみ、それを表示。ないなら""
									value={
										profilesData
											? profilesData.map((profileData) => {
													return profileData.language;
											  })
											: ""
									}
								/>
								<br />
								<TextField
									className={classes.margin}
									disabled
									id="input-with-icon-textfield"
									name="country"
									label="精通している国 (住んだことのある国や、旅行したことのある国など)"
									style={{ width: "60%" }}
									InputProps={{
										classes: {
											root: classes.rootTxt,
											disabled: classes.disabled,
										},
										startAdornment: (
											<InputAdornment position="start">
												<PublicIcon />
											</InputAdornment>
										),
									}}
									value={
										profilesData
											? profilesData.map((profileData) => {
													return profileData.country;
											  })
											: ""
									}
								/>

								<TextField
									disabled
									id="outlined-full-width"
									name="comment"
									label="ひとこと"
									style={{ width: "70%", marginTop: "2%" }}
									multiline
									rows={5}
									variant="outlined"
									InputProps={{
										classes: {
											root: classes.rootTxt,
											disabled: classes.disabled,
										},
									}}
									value={
										profilesData
											? profilesData.map((profileData) => {
													return profileData.comment;
											  })
											: ""
									}
								/>
							</form>
							<span>{editButton()}</span>
						</PROFILE_BOX>
					</div>
				</PROFILE_EDITBOX>
			</TOP_DIV>
		</div>
	);
}
