import React from "react";
import styled from "styled-components";
import translation from "../../img/369812-PB8CJO-186.jpg";
import connect from "../../img/3946511.jpg";
import money from "../../img/627.jpg";

export default function SellsPoint() {
	const H3 = styled.h3`
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		padding: 6% 0%;
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

	return (
		<div style={{ paddingLeft: "4%", paddingRight: "4%", height: "87vh" }}>
			<H3>「助けてほしい人」と「助けたい人」を24時間繋げるプラットフォーム</H3>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<SET_DIV>
					<div>
						<h5>約10言語に対応</h5>
						<IMG src={translation} />
						<P>
							Helperは世界約30ヵ国から集合。現在約10言語に対応しています。あなたの母語で相談できるので安心して相談できます。
						</P>
					</div>
				</SET_DIV>
				<SET_DIV>
					<div>
						<h5>24時間繋がる</h5>
						<IMG src={connect} />
						<P>
							世界中でHelperが待機しています。あなたの相談をみたHelperが反応し、メッセージ１つですぐ相談が開始できます。
						</P>
					</div>
				</SET_DIV>
				<SET_DIV>
					<div>
						<h5>リーズナブルな価格</h5>
						<IMG src={money} />
						<P>
							企業とではなく、個人のHelperと直接契約するため、比較的リーズナブルに対応してもらうことができます。
						</P>
					</div>
				</SET_DIV>
			</div>
		</div>
	);
}
