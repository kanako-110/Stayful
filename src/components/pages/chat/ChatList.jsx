import React from "react";
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
