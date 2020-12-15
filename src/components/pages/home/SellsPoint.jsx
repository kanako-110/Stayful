import React from "react";
import styled from "styled-components";
import { pc, sp, tab } from "../../../media";
import translation from "../../../img/369812-PB8CJO-186.jpg";
import connect from "../../../img/3946511.jpg";
import money from "../../../img/627.jpg";
import Button from "../../atoms/Button";

const TOP_DIV = styled.div`
	height: 100vh;
	width: 100%;
	box-sizing: border-box;
	${tab`
		height: 90vh;
`}
	${sp`
		height: 80vh`}
`;
const H3 = styled.h3`
	font-size: 1.8rem;
	font-weight: bold;
	text-align: center;
	padding: 6% 0%;
	${tab`
	font-size: 1rem;
`}
	${sp`
	font-size: 0.8rem;
`}
`;

const CONTAINER = styled.div`
	display: flex;
	justify-content: space-between;
`;
const SET_DIV = styled.div`
	width: 20%;
	padding: 3%;
	text-align: center;
	border: 1px solid #a9a9a9;
`;

const IMG = styled.img`
	width: 100%;
`;

const P = styled.p`
	padding-top: 10%;
`;

const BUTTON_POSITION = styled.div`
	width: 15%;
	margin: 0 auto;
	padding-right: 10%;
	${tab`
	width: 25%;
	padding-right: 15%;
`}
	${sp`
	width: 30%;
	padding-right: 20%;
`}
`;

const BUTTON_BOX = styled.div`
	display: flex;
	justify-content: space-between;
`;

export default function SellsPoint() {
	return (
		<TOP_DIV>
			<H3>「助けてほしい人」と「助けたい人」を24時間繋げるプラットフォーム</H3>
			<CONTAINER className="ENTIRE_DIV">
				{/* ------1つ目ボックス------ */}
				<SET_DIV>
					<div>
						<h5>約10言語に対応</h5>
						<IMG src={translation} />
						<P>
							Helperは世界約30ヵ国から集合。現在約10言語に対応しています。あなたの母語で相談できるので安心して相談できます。
						</P>
					</div>
				</SET_DIV>
				{/* ------2つ目ボックス------ */}
				<SET_DIV>
					<div>
						<h5>24時間繋がる</h5>
						<IMG src={connect} />
						<P>
							世界中でHelperが待機しています。あなたの相談をみたHelperが反応し、メッセージ１つですぐ相談が開始できます。
						</P>
					</div>
				</SET_DIV>
				{/* ------3つ目ボックス------ */}
				<SET_DIV>
					<div>
						<h5>リーズナブルな価格</h5>
						<IMG src={money} />
						<P>
							企業とではなく、個人のHelperと直接契約するため、比較的リーズナブルに対応してもらうことができます。
						</P>
					</div>
				</SET_DIV>
			</CONTAINER>
			{/* ------Button------- */}
			<BUTTON_POSITION>
				<BUTTON_BOX>
					<div>
						<Button text="今すぐ始める" link="/login" marginTop="2%" />
					</div>
					<div>
						<Button text="詳しく見る" link="/about" marginTop="2%" />
					</div>
				</BUTTON_BOX>
			</BUTTON_POSITION>
		</TOP_DIV>
	);
}
