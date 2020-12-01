import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";

const CONTAINER = styled.div`
  position: absolute;
  left: 38%;
  top: 34%;
  width: 53%;
`;

const ASK_BOX = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 15vh;
	padding: 5% 3%;
	margin-bottom: 8%;
`;

const TITLE = styled.h6`
	font-size: 1.3rem;
	padding-bottom: 2%;
	&:hover {
		color: #696969;
	}
`;

export default function PostedAsk() {
	const [asks, setAsks] = useState([]);

	const history = useHistory();
	const onTitle_click = () => {
		history.push("/askdetails/lid");
	};

	useEffect(() => {
		firebase
			.firestore()
			.collection("ask")
			.get()
			.then((data) => {
				const ASK_DATA = data.docs.map((doc) => {
					return doc.data();
				});
				setAsks(ASK_DATA);
			});
	}, []);

	return (
		<>
			<CONTAINER>
				{asks.map((ask) => {
					return (
						<ASK_BOX>
							<TITLE onClick={onTitle_click}>{ask.title}</TITLE>
							<br />
							<p>{ask.detail}</p>
						</ASK_BOX>
					);
				})}
			</CONTAINER>
		</>
	);
}
