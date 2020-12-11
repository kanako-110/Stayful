import React, { useContext, useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthService";
import firebase from "../../../firebase/firebase";
import Button from "../../atoms/Button";
import styled from "styled-components";
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
	background-color: #ffffff;
	height: 55vh;
	margin: auto;
	padding: 1% 2%;
`;

export default function ShowProfile() {
	const classes = useStyles();
	const user = useContext(AuthContext);
	const history = useHistory();
	const { name } = useParams();
	// const link = { user ? `/editprofile/${user.displayName}`: ""};
	const [profilesData, setProfilesData] = useState([]);

	const onButton_click = () => {
		history.push(`/editprofile/${user.displayName}`);
	};

	const editButton = () => {
		if (user && user.displayName === name) {
			return (
				<div onClick={onButton_click}>
					<Button
						text="プロフィールを編集する"
						left="76%"
						marginTop="5%"
					/>
				</div>
			);
		}
	};

	useEffect(() => {
		firebase
			.firestore()
			.collection("userProfile")
			.where("displayName", "==", name)
			.get()
			.then((data) => {
				const response = data.docs.map((doc) => {
					return doc.data();
				});
				setProfilesData(response);
			});
	}, []);

	const display_deskTop = () => {
		if(setProfilesData){
				<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<PROFILE_EDITBOX>
					<div>
						<Avatar src="/broken-image.jpg" className={classes.large} />
					</div>
					<div style={{ width: "80%" }}>
						<H3>プロフィール</H3>
						{profilesData.map((profileData) => {
							return (
								<PROFILE_BOX>
									<form>
										<TextField
											className={classes.margin}
											disabled
											name="displayName"
											id="input-with-icon-textfield"
											label="ユーザーネーム"
											value={user ? user.displayName : ""}
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
										/>
										<br />
										<TextField
											className={classes.margin}
											disabled
											name="language"
											id="input-with-icon-textfield"
											label="話せる言語"
											value={profileData.language}
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
										/>
										<br />
										<TextField
											className={classes.margin}
											disabled
											id="input-with-icon-textfield"
											name="country"
											label="精通している国 (住んだことのある国や、旅行したことのある国など)"
											value={profileData.country}
											// helperText="(住んだことのある国や、旅行したことのある国など)"
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
										/>

										<TextField
											className={classes.margin}
											disabled
											id="outlined-full-width"
											name="comment"
											label="ひとこと"
											value={profileData.comment}
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
										/>
										{editButton()}
										{/* <div onClick={onButton_click}>
											<Button
												text="プロフィールを編集する"
												// link={user ? "/editprofile/ " + user.displayName : null}
												left="76%"
												marginTop="5%"
											/>
										</div > */}
									</form>
								</PROFILE_BOX>
							);
						})}
					</div>
				</PROFILE_EDITBOX>
			</div>
		</div>

		}
	}

	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<PROFILE_EDITBOX>
					<div>
						<Avatar src="/broken-image.jpg" className={classes.large} />
					</div>
					<div style={{ width: "80%" }}>
						<H3>プロフィール</H3>
						{profilesData.map((profileData) => {
							return (
								<PROFILE_BOX>
									<form>
										<TextField
											className={classes.margin}
											disabled
											name="displayName"
											id="input-with-icon-textfield"
											label="ユーザーネーム"
											value={user ? user.displayName : ""}
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
										/>
										<br />
										<TextField
											className={classes.margin}
											disabled
											name="language"
											id="input-with-icon-textfield"
											label="話せる言語"
											value={profileData.language}
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
										/>
										<br />
										<TextField
											className={classes.margin}
											disabled
											id="input-with-icon-textfield"
											name="country"
											label="精通している国 (住んだことのある国や、旅行したことのある国など)"
											value={profileData.country}
											// helperText="(住んだことのある国や、旅行したことのある国など)"
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
										/>

										<TextField
											className={classes.margin}
											disabled
											id="outlined-full-width"
											name="comment"
											label="ひとこと"
											value={profileData.comment}
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
										/>
										{/* {editButton()} */}
										<div onClick={onButton_click}>
											<Button
												text="プロフィールを編集する"
												// link={user ? "/editprofile/ " + user.displayName : null}
												left="76%"
												marginTop="5%"
											/>
										</div >
									</form>
								</PROFILE_BOX>
							);
						})}
					</div>
				</PROFILE_EDITBOX>
			</div>
		</div>
	);
}
