import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { pc, sp, tab } from "../../../media";
import Button from "../../atoms/Button";
import img from "../../../img/66169.jpg";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

const EYE_CATCH = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	height: 78vh;
	margin-top: 13%;
	margin-left: 4%;
	margin-right: 1%;
	align-items: center;
	${sp`
	height: 60vh;
`}
`;

const H3 = styled.h3`
	font-size: 2.2rem;
	${tab`
		font-size: 1.5rem;
		`}
	${sp`
		font-size: 1rem;
		`}
`;

const IMG = styled.img`
	height: 400px;
	width: 50%;
`;

const P = styled.p`
	padding-top: 2%;
	${sp`
	font-size: 0.7rem;
	`}
`;

const HELPER = styled.p`
	padding-top: 20%;
	font-size: 0.9rem;
	&:hover {
		text-decoration: underline;
	}
	${tab`
		padding-top: 30%;
		`}
	${sp`
		padding-top: 30%;
		font-size: 0.3rem;
		`}
`;

const CONTAINER = styled.div`
	background-color: #ffdead;
	height: 20vh;
	${sp`
		height: 15vh;
	`}
`;

const WRAPPER = styled.span`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 100%;
	padding: 0% 10%;
	box-sizing: border-box;
`;

const INNER = styled.div`
	display: flex;
	text-align: center;
	align-items: center;
`;

const TAG = styled.p`
	${sp`
	font-size: 0.5rem;
	`}
`;

const P3 = styled.p`
	width: 100%;
	font-size: 2rem;
	font-weight: bold;
	padding-top: 5px;
	display: inline-block;
	${tab`
	font-size: 1.3rem;
`}
	${sp`
	font-size: 0.7rem
`}
`;

export default function FirstView() {
	return (
		<div>
			<EYE_CATCH>
				<div>
					<H3>
						24時間いつでも相談
						<br />
						海外滞在を100%楽しもう。
					</H3>
					<P>
						海外滞在中、トラブルは付きもの。
						<br />
						Stayfulはあなたの海外滞在を24時間サポートします。
					</P>

					<Button
						type="submit"
						text="今すぐ相談する"
						marginTop="2%"
						link="/asklist"
					/>
					<Link to="/aboutHelper" style={{ color: "#333333" }}>
						<HELPER>Helperとして登録したい方はコチラ</HELPER>
					</Link>
				</div>
				<IMG src={img} alt="協力して考える人々" />
			</EYE_CATCH>

			{/* -----オレンジボックス------ */}
			<CONTAINER>
				<WRAPPER>
					{/* -----1つめ----- */}
					<INNER>
						<PermIdentityIcon style={{ fontSize: 65 }} />
						<div style={{ width: "auto" }}>
							<TAG>ユーザー数</TAG>
							<P3>2000人</P3>
						</div>
					</INNER>
					{/* -----2つめ----- */}
					<INNER>
						<PermContactCalendarIcon style={{ fontSize: 65 }} />
						<div style={{ width: "auto" }}>
							<TAG>Helper数</TAG>
							<P3>700人</P3>
						</div>
					</INNER>
					{/* -----3つめ----- */}
					<INNER>
						<EmojiObjectsIcon style={{ fontSize: 65 }} />
						<div style={{ width: "auto" }}>
							<TAG>解決数</TAG>
							<P3>400件</P3>
						</div>
					</INNER>
				</WRAPPER>
			</CONTAINER>
		</div>
	);
}
