import React from "react";
import { useHistory } from "react-router-dom";

const AskDetails = () => {
	const history = useHistory();
	const onButtonClick = () => {
		history.push("/chat");
	};
	return (
		<div className="ENTIRE_DIV" style={{ paddingTop: "10%", height: "100vh" }}>
			<h3>相談内容</h3>
			<p>アメリカでの銀行の作り方を教えて下さい</p>
			<button onClick={() => onButtonClick()}>メッセージにてHELPする</button>
		</div>
	);
};

export default AskDetails;
