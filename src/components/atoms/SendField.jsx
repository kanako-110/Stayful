import React from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import SendButtons from "./SendButton";
import Button from "./Button"

const WRAP = styled.form`
	display: flex;
	justify-content: center;
	width: 60%;
	margin-top: 5%;
`;

export default function SendField() {
	return (
		<React.Fragment>
			<WRAP noValidate autoComplete="off">
				<TextField
					id="standard-text"
					label="メッセージを入力"
					className="text"
					margin="normal"
					fullWidth
				/>
				<SendButtons />
			</WRAP>
		</React.Fragment>
	);
}
