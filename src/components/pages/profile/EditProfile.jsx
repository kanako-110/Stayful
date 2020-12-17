import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { set_profile } from "../../../reducks/user/action";
import shortid from "shortid";
import firebase from "../../../firebase/firebase";
import { AuthContext } from "../../../firebase/AuthService";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport
import Button from "../../atoms/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TranslateIcon from "@material-ui/icons/Translate";
import PublicIcon from "@material-ui/icons/Public";
import { sp, tab } from "../../../media";


const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(15),
		height: theme.spacing(15),
	},
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
	},
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

const EDIT_BOX = styled.div`
	background-color: #ffffff;
	height: 59vh;
	margin: auto;
	padding: 1% 2%;
`;

const ERROR = styled.p`
	color: #ff4500;
	//helperTextと同じに設定してある
	margin-left: 14px;
	margin-right: 14px;
	font-size: 0.75rem;
	letter-spacing: 0.03333em;
`;

const BUTTON_POSITION = styled.div`
	margin-left: 80%;
	${sp `
		margin-left: 70%;
	`}
`;

export default function EditProfile() {
	const classes = useStyles();
	const history = useHistory();
	const user = useContext(AuthContext);
	const { register, handleSubmit, errors } = useForm();
	const [languageData, set_languageData] = useState("");
	const [countryData, set_countryData] = useState("");
	const [commentData, set_commentData] = useState("");

	// -----fetch profileData------//
	useEffect(() => {
		if (user) {
			firebase
				.firestore()
				.collection("userProfile")
				.where("userId", "==", user.uid)
				.get()
				.then((data) => {
					data.docs.map((doc) => {
						return {
							language: set_languageData(doc.data().language),
							country: set_countryData(doc.data().country),
							comment: doc.data().comment
								? set_commentData(doc.data().comment)
								: null,
						};
					});
				});
		}
	}, [user]);
	// -------------------------------

	const onForm_submit = (data) => {
		console.log(data);
		firebase
			.firestore()
			.collection("userProfile")
			.doc(user.uid)
			.set({
				userId: user.uid,
				displayName: data.displayName,
				language: data.language,
				country: data.country,
				comment: data.comment,
				createdAt: new Date(),
			})
			.then((doc) => {
				console.log("Document successfully written!");
				history.push(`/yourprofile/${user.displayName}`);
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<PROFILE_EDITBOX>
					<div>
						<Avatar src="/broken-image.jpg" className={classes.large} />
					</div>
					<div style={{ width: "80%" }}>
						<H3>プロフィールを編集する</H3>
						<EDIT_BOX>
							<form onSubmit={handleSubmit(onForm_submit)}>
								<TextField
									className={classes.margin}
									name="displayName"
									id="input-with-icon-textfield"
									label="ユーザーネーム"
									value={user ? user.displayName : ""}
									style={{ width: "60%" }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<AccountCircle />
											</InputAdornment>
										),
									}}
									inputRef={register({ required: true })}
								/>
								<br />

								<TextField
									className={classes.margin}
									name="language"
									id="input-with-icon-textfield"
									label="話せる言語"
									value={languageData}
									onChange={(e) => set_languageData(e.target.value)}
									style={{ width: "60%" }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<TranslateIcon />
											</InputAdornment>
										),
									}}
									inputRef={register({ required: true })}
								/>
								{errors.language && <ERROR>言語を入力してください</ERROR>}
								<br />
								<TextField
									className={classes.margin}
									id="input-with-icon-textfield"
									name="country"
									label="精通している国 (住んだことのある国や、旅行したことのある国など)"
									value={countryData}
									onChange={(e) => set_countryData(e.target.value)}
									style={{ width: "60%" }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<PublicIcon />
											</InputAdornment>
										),
									}}
									inputRef={register({ required: true })}
								/>
								{errors.country && <ERROR>国を入力してください</ERROR>}

								<TextField
									name="comment"
									id="outlined-full-width"
									label="ひとこと"
									helperText="(あなたの性格や、得意分野などを書いておくとAskerから高評価を得やすいです。)"
									value={commentData}
									onChange={(e) => set_commentData(e.target.value)}
									style={{ margin: 8, width: "70%" }}
									multiline
									rows={5}
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									variant="outlined"
									inputRef={register}
								/>
								<BUTTON_POSITION>
									<Button text="変更する" />
								</BUTTON_POSITION>
							</form>
						</EDIT_BOX>
					</div>
				</PROFILE_EDITBOX>
			</div>
		</div>
	);
}
