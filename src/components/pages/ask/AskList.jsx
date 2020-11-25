import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import styled from "styled-components";

const TOP_DIV = styled.div`
	padding-top: 10%;
	height: 100vh;
`;

const AskList = (props) => {
	// 投稿を押したらその投稿に飛ぶ。importとexportにwithRouterも追加
	const onDivClick = () => {
		props.history.push("/askdetails/:id");
	};

	return (
		<div className="ENTIRE_DIV">
		<TOP_DIV>
			<h2>相談する</h2>
			<Link to="editask">自分の投稿を編集</Link>
			<br />
			<Link to="postask">投稿する</Link>
			<button onClick={() => onDivClick()}>
				アメリカで銀行をつくりたいです
			</button>
			　{/* onClickでその投稿ページ(askDetails)に行く */}
		</TOP_DIV>
		</div>
	);
};

export default withRouter(AskList);
