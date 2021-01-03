import React, { useContext, useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
`;

const ChatList = () => {
	const messages = useSelector((state) => state.messages);
	const asks = useSelector((state) => state.asks);
	const user = useContext(AuthContext);
	const [title, set_title] = useState();

	useEffect(() => {
		if (user) {
			const thisUserMessages = messages.filter(
				(message) => message.userId === user.uid
			);
			set_title(
				thisUserMessages.map((thisUserMessage) => {
					console.log(thisUserMessage.askTitle)
					return thisUserMessage.askTitle;
				})
			);
		}
	}, [user]);

	console.log(title);

	return (
		<div className="ENTIRE_DIV" style={{ paddingTop: "10%", height: "100vh" }}>
			<H3> MAIL LIST</H3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ width: "40%" }}>
					<TITLE>タイトル</TITLE>
					<p>メールのタイトル名ここに。</p>
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
};

export default ChatList;
