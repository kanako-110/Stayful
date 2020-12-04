import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";
import Button from "../../atoms/Button";

const POSITION_CONTAINER = styled.div`
	display: flex;
	justify-content: space-between;
	padding-top: 10%;
`;

const ASK_BOX = styled.div`
	width: 55%;
	background-color: #ffffff;
	height: 30vh;
	padding: 5% 3%;
	margin-bottom: 8%;
`;

const TITLE = styled.h6`
	font-size: 1.4rem;
	padding-bottom: 7%;
`;

const P = styled.p `
font-size: 1.2rem;
`

const PROFILE_BOX = styled.div`
	width: 27%;
	height: 28vh;
	background-color: #ffffff;
`;

const AskDetails = () => {
	const { id } = useParams();
	const [askDetail, set_askDetail] = useState("");
	console.log(id);

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

	console.log(askDetail);

	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<POSITION_CONTAINER>
					<PROFILE_BOX></PROFILE_BOX>
					<ASK_BOX>
						<TITLE> {askDetail.title} </TITLE>
						<P> {askDetail.detail} </P>
					</ASK_BOX>
				</POSITION_CONTAINER>
				<div style={{ width: "100%" }}>
					<Button
						text="メッセージでHELPする"
						top="85%"
						left="76.5%"
						link="/chat"
					/>
				</div>
			</div>
		</div>
	);
};

export default AskDetails;
