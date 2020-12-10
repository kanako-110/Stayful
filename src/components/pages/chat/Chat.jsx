import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { delete_message } from "../../../reducks/chat/action";
import { fetch_messages } from "../../../reducks/chat/action";
import firebase from "../../../firebase/firebase";
import Faker from "faker";
import Button from "../../atoms/Button";
import SendField from "../../atoms/SendField";
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone";
import styled from "styled-components";
import { CropPortrait } from "@material-ui/icons";

const H3 = styled.h6`
	text-align: center;
	padding-bottom: 5%;
	color: #f5b47a;
	font-size: 2.5rem;
	font-family: Questrial, sans-serif;
`;

const IMG_TEXT_WRAPPER = styled.div`
	display: flex;
	width: 100%;
`;

const MESSAGE_BOX = styled.div`
	width: 100%;
	// background-color: #c0c0c0;
`;

const MESSAGE_INNER = styled.div`
	margin-top: 2%;
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const TEXT_BOX = styled.div`
	height: 50px;
	width: 100%;
	padding-left: 3%;
	padding-bottom: 1%;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
`;

const NAME = styled.p`
  // width: 10%;
	display: inline-block;
	font-size: 0.9rem;
	padding-bottom: 1%;
	&:hover {
		color: "#333333";
		background-color: rgb(57 38 19 / 7%);
	}
`;

const TEXT = styled.p`
	font-size: 1.1rem;
	padding-bottom: 1%;
`;

const TIME = styled.p`
	font-size: 0.6rem;
	// padding-bottom: 1%;
`;

export default function Chat() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const messages = useSelector((state) => state.messages);
	const avatar = Faker.image.people();

	useEffect(() => {
		firebase
			.firestore()
			.collection("messages")
			.where("pageId", "==", id)
			.orderBy("createdAt", "asc")
			.get()
			.then((data) => {
				const messageData = data.docs.map((doc) => {
					return {
						createdAt: new Date(doc.data().createdAt.seconds * 1000),
						displayName: doc.data().displayName,
						getday: doc.data().getday,
						messageId: doc.data().messageId,
						text: doc.data().text,
						pageId: id,
					};
				});
				dispatch(fetch_messages(messageData));
			});
	}, []);

	const onTrash_click = (message) => {
		// ----画面上からmessage消す------//
		dispatch(delete_message(message));

		//----firebaseから消す-----//
		firebase
			.firestore()
			.collection("messages")
			.doc(message.messageId)
			.delete()
			.then(function () {
				console.log("Document successfully deleted!");
			})
			.catch(function (error) {
				console.error("Error removing document: ", error);
			});
	};

	const history = useHistory();
	const onUser_click = (displayName) => {
		console.log(displayName);
		history.push(`/yourprofile/${displayName}`);
	};

	const messageTime = (message) => {
		return (
			<TIME>
				{message.createdAt.getFullYear()}/{message.createdAt.getMonth() + 1}/
				{message.createdAt.getDate()} {message.createdAt.getHours()}:
				{message.createdAt.getMinutes()}
			</TIME>
		);
	};

	return (
		<div className="COLOR_POSITION" style={{ height: "150vh" }}>
			<div className="ENTIRE_DIV">
				<H3>Chat</H3>
				{messages.map((message) => {
					return (
						<MESSAGE_BOX key={message.messageId}>
							<MESSAGE_INNER>
								<IMG_TEXT_WRAPPER>
									<div>
										<img src={avatar} width="50" height="50" />
									</div>

									<TEXT_BOX>
										<span>

										<NAME onClick={() => onUser_click(message.displayName)}>
											{message.displayName}
										</NAME>
										</span>
										<TEXT> {message.text} </TEXT>
										{messageTime(message)}
									</TEXT_BOX>
								</IMG_TEXT_WRAPPER>

								<div style={{ textAlign: "center" }}>
									<DeleteTwoToneIcon
										color="action"
										style={{ height: "50px" }}
										onClick={() => onTrash_click(message)}
									/>
								</div>
							</MESSAGE_INNER>
							<hr style={{ borderTop: "1px solid #756e57" }} />
						</MESSAGE_BOX>
					);
				})}

				<SendField />
				<Button text="解決した" marginTop="2%" left="75%" />
				<Button text="レビュー" marginTop="2%" left="86%" />
			</div>
		</div>
	);
}
