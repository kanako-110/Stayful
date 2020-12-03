import React from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";
import Button from "../../atoms/Button";

const CONTAINER = styled.div`
	position: absolute;
	left: 38%;
	top: 30%;
	width: 56%;
`;

const ASK_BOX = styled.div`
	background-color: #ffffff;
	height: 30vh;
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

const PROFILE_BOX = styled.div`
	position: absolute;
	top: 30%;
	width: 27%;
	height: 28vh;
	background-color: #ffffff;
`;

const AskDetails = () => {
	const history = useHistory();
	const onButtonClick = () => {
		history.push("/chat");
	};
	return (
		<div className="COLOR_POSITION" style={{ height: "80vh" }}>
			<div className="ENTIRE_DIV">
				<PROFILE_BOX></PROFILE_BOX>
				<CONTAINER>
					<ASK_BOX>
						<h3>相談内容</h3>
						<p>アメリカでの銀行の作り方を教えて下さい</p>
					</ASK_BOX>
					<div style={{ width: "100%" }}>
						<Button text="メッセージでHELPする" top="110%" left="70%" link="/chat" />
					</div>
				</CONTAINER>
			</div>
		</div>
	);
};

export default AskDetails;
