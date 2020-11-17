import React from "react";
import { withRouter } from "react-router";

const AskDetails = (props) => {
	const onButtonClick = () => {
		props.history.push("/chat");
	};
	return (
		<div>
			<h3>相談内容</h3>
			<p>アメリカでの銀行の作り方を教えて下さい</p>
			<button onClick={() => onButtonClick()}>メッセージにてHELPする</button>
		</div>
	);
};

export default withRouter(AskDetails);
