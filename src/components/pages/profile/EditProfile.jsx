import React from "react";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport
import Button from "../../atoms/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TranslateIcon from "@material-ui/icons/Translate";
import PublicIcon from "@material-ui/icons/Public";

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

export default function EditProfile() {
	const classes = useStyles();
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
							<div>
								<TextField
									className={classes.margin}
									id="input-with-icon-textfield"
									label="ユーザーネーム"
									style={{ width: "45%" }}
									InputProps={{
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
									id="input-with-icon-textfield"
									label="話せる言語"
									style={{ width: "45%" }}
									InputProps={{
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
									id="input-with-icon-textfield"
									label="精通している国"
									helperText="(住んだことのある国や、旅行したことのある国など)"
									style={{ width: "45%" }}
									InputProps={{
										startAdornment: (
											<InputAdornment position="start">
												<PublicIcon />
											</InputAdornment>
										),
									}}
								/>
								<TextField
									name="detail"
									id="outlined-full-width"
									label="ひとこと"
									helperText="(あなたの性格や、得意分野などを書いておくとAskerから高評価を得やすいです。)"
									style={{ margin: 8, width: "60%" }}
									multiline
									rows={7}
									margin="normal"
									InputLabelProps={{
										shrink: true,
									}}
									variant="outlined"
									// inputRef={register({ required: true })}
								/>
							</div>
						</EDIT_BOX>
					</div>
				</PROFILE_EDITBOX>
				<Button
					text="変更する"
					left="86%"
					marginTop="1%"
					link="/yourprofile/:name"
				/>
			</div>
		</div>
	);
}
