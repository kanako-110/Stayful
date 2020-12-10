import React from "react";
import Avatar from "@material-ui/core/Avatar"; //ひとまずのimport
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
	large: {
		width: theme.spacing(7),
		height: theme.spacing(7),
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
}));

const EDIT_BOX = styled.div`
	background-color: #ffffff;
	width: 80%;
	height: 65vh;
	margin: auto;
`;

export default function EditProfile() {
	const classes = useStyles();
	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<h3>プロフィールを編集する</h3>
				<Avatar src="/broken-image.jpg" className={classes.large} />
				<EDIT_BOX>
					<p>name: kanako ito</p>
					<p>使える言語：　英語・スペイン語</p>
					<p>精通している国：カナダ・英語・スペイン語</p>
					<p></p>
				</EDIT_BOX>
			</div>
		</div>
	);
}
