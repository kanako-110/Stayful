import React from "react";
import { useSelector } from "react-redux";
import Faker from "faker";
import Button from "../../atoms/Button";
import SendField from "../../atoms/SendField";
import styled from "styled-components";

const H3 = styled.h6`
	text-align: center;
	padding-bottom: 5%;
	color: #f5b47a;
	font-size: 2.5rem;
	font-family: Questrial, sans-serif;
`;

const MESSAGE_BOX = styled.div`
	width: 100%;
	// background-color: #c0c0c0;
	height: 10vh;
`;

const MESSAGE_INNER = styled.div`
	// background-color: #ffffff;
	margin-top: 2%;
	height: auto;
	width: 50%;
	display: flex;
`;

const TEXT_BOX = styled.div`
	height: 50px;
	padding: 0px 3%;
	display: flex;
	flex-flow: column;
	justify-content: space-between;
`;

const P = styled.p`
	width: 100%;
	font-size: 0.9rem;
`;

const TEXT = styled.p`
	font-size: 1.2rem;
`;

export default function Chat() {
	const messages = useSelector((state) => state.messages);
	const avatar = Faker.image.people();
	console.log(messages.createdAt);

	const messageTime = (message) => {
		// firestoreからfetchのときはそもそも～時の形にする
		// if(-secondsがあるとき=firestoreの時間をとってきているとき)
		if (message.createdAt.seconds) {
			const firestoreTime = new Date(message.createdAt.seconds * 1000);
			console.log(
				`firestore ${firestoreTime.getFullYear()}/${
					firestoreTime.getMonth() + 1
				}/${firestoreTime.getDate()} ${firestoreTime.getHours()}:${firestoreTime.getMinutes()}`
			);


		} else {
			// reduxの時はこれでok
			const reduxTime = new Date(message.createdAt);
			console.log(
				`redux ${reduxTime.getFullYear()}/${
					reduxTime.getMonth() + 1
				}/${reduxTime.getDate()} ${reduxTime.getHours()}:${reduxTime.getMinutes()}`
			);
		}
	};


	return (
		<div className="COLOR_POSITION" style={{ height: "150vh" }}>
			<div className="ENTIRE_DIV">
				<H3>Chat</H3>
				{messages.map((message) => {
					return (
						<MESSAGE_BOX>
							<MESSAGE_INNER>
								<div>
									<img src={avatar} width="50" height="50" />
								</div>
								<TEXT_BOX>
									<P> {message.displayName} </P>
									<TEXT> {message.text} </TEXT>
									{messageTime(message)}
								</TEXT_BOX>
							</MESSAGE_INNER>
							<hr />
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
