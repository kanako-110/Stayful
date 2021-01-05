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
`;

const ChatList = () => {
	const messages = useSelector((state) => state.messages);
	const asks = useSelector((state) => state.asks);
	const user = useContext(AuthContext);
	const [messagesData, set_messagesData] = useState([]);
	const thisUserMessages =
		user && messages.filter((message) => message.userId === user.uid);

	useEffect(() => {
		if (user) {
			firebase
				.firestore()
				.collection("messages")
				.where("userId", "==", user.uid)
				.orderBy("createdAt", "asc")
				.get()
				.then((data) => {
					const response = data.docs.map((doc) => {
						return {
							pageId: doc.data().pageId,
							askTitle: doc.data().askTitle,
						};
					});
					console.log(response);
					set_messagesData(response);
				});
		}
	}, [user]);

	console.log(messagesData);

	const mapMessages = () => {
		thisUserMessages &&
			thisUserMessages.map((thisUserMessage) => {
				return [
					{
						pageId: thisUserMessage.pageId,
						askTitle: thisUserMessage.askTitle,
					},
				];
			});
	};

	// ------------------------いままで
	const askTitle =
		thisUserMessages &&
		thisUserMessages.map((thisUserMessage) => {
			return thisUserMessage.askTitle;
		});
	const withOutDuplicate_askTitles =
		mapMessages() &&
		mapMessages().filter(function (x, i, self) {
			return self.indexOf(x) === i;
		});
	console.log(withOutDuplicate_askTitles);

	const renderTitle = () => {
		if (withOutDuplicate_askTitles) {
			for (let i = 0; i < withOutDuplicate_askTitles.length; i++) {
				return <p> {withOutDuplicate_askTitles[i]} </p>;
			}
		}
	};

	renderTitle();

	// set_title( thisUserMessages && thisUserMessages.map((thisUserMessage) => {
	// 					return thisUserMessage.askTitle}))

	// useEffect(() => {
	// 	if (thisUserMessages && thisUserMessages.length > 0) {
	// 		set_title(
	// 			thisUserMessages.map((thisUserMessage) => {
	// 				return thisUserMessage.askTitle;
	// 			})
	// 		);
	// 	}
	// }, [user]);

	// console.log(title);

	return (
		<div className="ENTIRE_DIV" style={{ paddingTop: "10%", height: "100vh" }}>
			<H3> MAIL LIST</H3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<div style={{ width: "40%" }}>
					<TITLE>タイトル</TITLE>
					{thisUserMessages &&
						thisUserMessages.map((thisUserMessage) => {
							return <p> {thisUserMessage.askTitle} </p>;
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
};

export default ChatList;
