import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../firebase/firebase";
import { AuthContext } from "../../../firebase/AuthService";
import styled from "styled-components";
import { sp, tab } from "../../../media";

const H3 = styled.div`
	padding-bottom: 3%;
	font-weight: bold;
	font-size: 2rem;
	${sp`
			font-size:1.5rem;
		`}
`;

const TITLE = styled.p`
	padding-bottom: 5%;
	font-size: 1.1rem;
	font-weight: bold;
`;

const TITLE_DETAIL = styled.p`
	padding-bottom: 5%;
`;

export default function ChatList() {
	const messages = useSelector((state) => state.messages);
	const user = useContext(AuthContext);
	const thisUserMessages =
		user && messages.filter((message) => message.userId === user.uid);

	const askTitle =
		thisUserMessages &&
		thisUserMessages.map((thisUserMessage) => {
			return thisUserMessage.askTitle;
		});

	const withOutDuplicate_askTitles =
		askTitle &&
		askTitle.filter(function (x, i, self) {
			return self.indexOf(x) === i;
		});

	return (
		<div className="ENTIRE_DIV" style={{ paddingTop: "10%", height: "100vh" }}>
			<H3> MAIL LIST</H3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ width: "40%" }}>
					<TITLE>タイトル</TITLE>
					{withOutDuplicate_askTitles &&
						withOutDuplicate_askTitles.map((askTitle) => {
							return <TITLE_DETAIL> {askTitle} </TITLE_DETAIL>;
						})}
				</div>
				<div style={{ paddingRight: "3%", textAlign: "center" }}>
					<TITLE>返信</TITLE>
					<p>3</p>
				</div>
				<div>
					<TITLE>最新更新日</TITLE>
					<p>2020/12/30</p>
				</div>
			</div>
		</div>
	);
}
