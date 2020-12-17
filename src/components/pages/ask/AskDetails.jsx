import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Faker from "faker";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";
import Button from "../../atoms/Button";
import { sp, tab } from "../../../media";

const POSITION_CONTAINER = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 10%;
	${sp`
	padding-top: 30%;

	`}
`;

const ASK_BOX = styled.div`
	width: 55%;
	height: auto;
	padding: 5% 3%;
	border: 2px solid #2f2f1e;
`;

const TITLE = styled.h6`
	font-size: 1.4rem;
	padding-bottom: 7%;
	${sp`
	font-size: 1rem;
	`}
`;

const P = styled.p`
	font-size: 1.2rem;
	${tab`
	font-size: 1.1rem;
	line-height: 1.2rem;
	`}
	${sp`
	font-size: 0.9rem;
	line-height: 1rem;
	`}
`;

const PROFILE_BOX = styled.div`
	width: 27%;
	height: 28vh;
	background-color: #ffffff;
	text-align: center;
	padding: 2% 0;
`;

const BUTTON_POSITION = styled.div`
	float: right;
	margin-right: 15%;
	${tab`
	margin-right: 25%;
	`}
	${sp`
	margin-right: 30%;
	`}
`;

const AskDetails = () => {
	const { id } = useParams();
	const [askDetail, set_askDetail] = useState("");

	const user = {
		name: Faker.internet.userName(),
		avatar: Faker.image.people(),
	};

	const messageLink = `/chat/${id}`;

	useEffect(() => {
		firebase
			.firestore()
			.collection("ask")
			.get()
			.then((data) => {
				const asks = data.docs.map((doc) => {
					return doc.data();
				});
				set_askDetail(asks.find((ask) => ask.askId == id));
			});
	}, []);

	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<POSITION_CONTAINER>
					<PROFILE_BOX>
						<img
							style={{ paddingBottom: "20px" }}
							src={user.avatar}
							width="140"
							height="140"
						/>
						<p>{user.name}</p>
					</PROFILE_BOX>
					<ASK_BOX>
						<TITLE> {askDetail.title} </TITLE>
						<P> {askDetail.detail} </P>
					</ASK_BOX>
				</POSITION_CONTAINER>
				<div style={{ width: "100%" }}>
					<BUTTON_POSITION>
						<Button text="メッセージを送る" marginTop="5%" link={messageLink} />
					</BUTTON_POSITION>
				</div>
			</div>
		</div>
	);
};

export default AskDetails;
