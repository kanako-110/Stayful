import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../parts/Button";
import img from "../../img/66169.jpg";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";

const EYE_CATCH = styled.div`
	display: flex;
	justify-content: space-between;
`;
const H3 = styled.h3`
	font-size: 2.5rem;
	padding-top: 20%;
`;

const IMG = styled.img`
	height: 400px;
	padding-top: 30%;
`;

const P = styled.p`
	position: absolute;
	top: 46%;
`;

const P2 = styled.p`
	position: absolute;
	top: 63%;
	font-size: 0.9rem;
	&:hover {
		text-decoration: underline;
	}
`;

const CONTAINER = styled.div`
	background-color: #ffdead;
	height: 26%;
	width: 100vw;
	position: relative;
	left: 50%;
	right: 50%;
	margin-left: -50vw;
	margin-right: -50vw;
	box-sizing: border-box;
`;

const WRAPPER = styled.span`
	display: flex;
	justify-content: center;
`;

const INNER = styled.div`
	padding: 70px 60px;
	display: flex;
`;

const P3 = styled.p`
	font-size: 2rem;
	font-weight: bold;
	padding-top: 5px;
`;

export default function FirstView() {
	return (
		<div style={{height: "100vh"}}>
			<EYE_CATCH>
				<H3>
					24時間いつでも相談
					<br />
					海外滞在を100%で楽しもう。
				</H3>
				<div>
					<IMG src={img} alt="協力して考える人々" />
				</div>
			</EYE_CATCH>

			<P>
				海外滞在中、トラブルは付きもの。
				<br />
				Stayfulはあなたの海外滞在を24時間サポートします。
			</P>

			<Button text="今すぐ相談する" link="/asklist" top="53%" />

			<Link to="/aboutHelper" style={{ color: "#333333" }}>
				<P2>Helperとして登録したい方はコチラ</P2>
			</Link>

			<CONTAINER>
				<WRAPPER>
					<INNER>
						<PermIdentityIcon style={{ fontSize: 60 }} />
						<div>
							<p>ユーザー数</p>
							<P3>20,000人</P3>　
						</div>
					</INNER>
					<INNER>
						<PermContactCalendarIcon style={{ fontSize: 60 }} />
						<div>
							<p>Helper数</p>
							<P3>700人</P3>
						</div>
					</INNER>
					<INNER>
						<EmojiObjectsIcon style={{ fontSize: 60 }} />
						<div>
							<p>解決数</p>
							<P3>400件</P3>
						</div>
					</INNER>
				</WRAPPER>
			</CONTAINER>
		</div>
	);
}
