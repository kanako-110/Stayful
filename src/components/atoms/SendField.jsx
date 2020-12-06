import React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { create_message } from "../../reducks/chat/action";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
	leftIcon: {
		marginRight: theme.spacing(1),
	},
	iconSmall: {
		fontSize: 20,
	},
}));

const WRAP = styled.form`
	display: flex;
	justify-content: center;
	width: 60%;
	margin-top: 5%;
`;

const ERROR = styled.p`
	color: #ff4500;
	//helperTextと同じに設定してある
	margin-left: 14px;
	margin-right: 14px;
	line-height: 1.66;
	font-size: 0.75rem;
	letter-spacing: 0.03333em;
`;

export default function SendField() {
	const classes = useStyles();
	const { register, handleSubmit, errors } = useForm();
	const dispatch = useDispatch();

	const onForm_submit = (e) => {
		e.preventDefault();
	};

	const onButton_click = (data) => {
    console.log(data);
    dispatch(create_message(data))
	};

	return (
		<form onSubmit={onForm_submit}>
			<div>
				<TextField
					name="text"
					id="standard-text"
					label="メッセージを入力"
					margin="normal"
					fullWidth
					inputRef={register({ required: true })}
				/>
				<Button
					variant="contained"
					color="primary"
					className={classes.button}
					onClick={handleSubmit(onButton_click)}
				>
					<Icon>send</Icon>
				</Button>
			</div>
			{errors.title && <ERROR>メッセージを入力してください</ERROR>}
		</form>
	);
}
