import React from "react";
import Faker from "faker";
import Button from "../../atoms/Button";
import SendField from "../../atoms/SendField";
import styled from "styled-components";

const H3 = styled.h6`
	text-align: center;
	padding-bottom: 5%;
	color: #f5b47a;
	font-size: 2.5rem;
	font-family: Questrial, sans-serif;
`;

const MESSAGE_BOX = styled.div`
	width: 100%;
	// background-color: #c0c0c0;
	height: 10vh;
`;

const MESSAGE_INNER = styled.div`
	// background-color: #ffffff;
	margin-top: 2%;
	height: auto;
	width: 50%;
	display: flex;
`;

const P = styled.p`
	padding-left: 10%;
	width: 100%;
`;

export default function Chat() {
	const avatar = Faker.image.people();

	return (
		<div className="COLOR_POSITION" style={{ height: "150vh" }}>
			<div className="ENTIRE_DIV">
				<H3>Chat</H3>
				<MESSAGE_BOX>
					<MESSAGE_INNER>
						<div>
							<img src={avatar} width="50" height="50" />
						</div>
						<div>
							<P>kanako</P>
							<P>大丈夫ですか</P>
						</div>
					</MESSAGE_INNER>
					<hr />
				</MESSAGE_BOX>
				<MESSAGE_BOX>
					<MESSAGE_INNER>
						<div>
							<img src={avatar} width="50" height="50" />
						</div>
						<div>
							<P>ito</P>
							<P>大丈夫じゃない</P>
						</div>
					</MESSAGE_INNER>
					<hr />
				</MESSAGE_BOX>
				<MESSAGE_BOX>
					<MESSAGE_INNER>
						<div>
							<img src={avatar} width="50" height="50" />
						</div>
						<div>
							<P>kanako</P>
							<P>大丈夫じゃない</P>
						</div>
					</MESSAGE_INNER>
					<hr />
				</MESSAGE_BOX>

				<SendField />
				<Button text="解決した" marginTop="2%" left="75%"/>
				<Button text="レビュー" marginTop="2%"  left="86%"/>
			</div>
		</div>
	);
}
