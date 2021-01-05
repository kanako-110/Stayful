import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import firebase from "../../firebase/firebase";
import shortid from "shortid";
import { AuthContext } from "../../firebase/AuthService";
import { create_message } from "../../reducks/chat/action";
// import { set_user } from "../../reducks/user/action";
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
	const { id } = useParams();
	const user = useContext(AuthContext);
	const { register, handleSubmit, errors, reset } = useForm();
	const dispatch = useDispatch();
	const [askTitle, set_askTitle] = useState();
	const asks = useSelector((state) => state.asks);
	const thisAsk = asks.filter((ask) => ask.askId == id);
	useEffect(() => {
		if (thisAsk[0] && thisAsk[0].title) {
			set_askTitle(thisAsk[0].title);
		}
	}, [thisAsk]);

	// const askTitle = thisAsk.map((mappedAsk) => {
	// 	// console.log(mappedAsk.title)
	// 	return console.log(mappedAsk.title);
	// });
	// console.log(askTitle);

	// {thisAsk &&
	// 	thisAsk.map((mappedAsk) => {
	// 		return <ASKTITLE> {mappedAsk.title} </ASKTITLE>;
	// 	})}
	// const [text, setText] = useState("")

	const onForm_submit = (e) => {
		e.preventDefault();
	};

	const onButton_click = (data) => {
		const messageId = shortid.generate();

		firebase
			.firestore()
			.collection("messages")
			.doc(messageId)
			.set({
				messageId: messageId,
				displayName: user.displayName,
				text: data.text,
				createdAt: new Date(),
				getday: new Date().getDay(),
				pageId: id,
				userId: user.uid,
				askTitle: askTitle,
			})
			.then(function () {
				console.log("Document successfully written!");
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});

		dispatch(
			create_message({
				messageId: messageId,
				displayName: user.displayName,
				text: data.text,
				createdAt: new Date(),
				getday: new Date().getDay(),
				pageId: id,
				userId: user.uid,
				askTitle: askTitle,
			})
		);
		// dispatch(set_user(user));
		// reset();
	};

	// const onButton_click = (data) => {
	// 	console.log(data);
	// 	const messageId = shortid.generate();
	// 	console.log(data.text);
	// 	console.log(askTitle);
	// 	// firebase
	// 	// 	.firestore()
	// 	// 	.collection("messages")
	// 	// 	.doc(messageId)
	// 	// 	.set({
	// 	// 		messageId: messageId,
	// 	// 		displayName: user.displayName,
	// 	// 		text: data.text,
	// 	// 		createdAt: new Date(),
	// 	// 		getday: new Date().getDay(),
	// 	// 		pageId: id,
	// 	// 		userId: user.uid,
	// 	// 		askTitle: askTitle,
	// 	// 		askTitle: thisAsk.map((mappedAsk) => {
	// 	// 			return mappedAsk.title;
	// 	// 		}),
	// 	// 	})
	// 	// 	.then(function () {
	// 	// 		console.log("Document successfully written!");
	// 	// 	})
	// 	// 	.catch(function (error) {
	// 	// 		console.error("Error writing document: ", error);
	// 	// 	});

	// 	dispatch(
	// 		create_message({
	// 			messageId: messageId,
	// 			displayName: user.displayName,
	// 			text: data.text,
	// 			createdAt: new Date(),
	// 			getday: new Date().getDay(),
	// 			pageId: id,
	// 			userId: user.uid,
	// 			// askTitle: askTitle,
	// 			// askTitle: thisAsk.map((mappedAsk) => {
	// 			// 	return mappedAsk.title;
	// 			// }),
	// 		})
	// 	);
	// 	reset();
	// };

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
