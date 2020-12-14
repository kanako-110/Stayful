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
`;
const H3 = styled.h3`
	${pc`

font-size: 2.5rem;
padding-top: 35%;
`}
	${tab`
font-size: 1.5rem;
padding-top: 30%;

`}
`;

const IMG = styled.img`
	height: 400px;
	padding-top: 30%;
`;

const P = styled.p`
	padding-top: 2%;
	// position: absolute;
	// top: 46%;
`;

const HELPER = styled.p`
	// position: absolute;
	// top: 63%;
	padding-top: 18%;
	font-size: 0.9rem;
	&:hover {
		text-decoration: underline;
	}
`;

const CONTAINER = styled.div`
	background-color: #ffdead;
	height: 26%;
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
	// padding: 6% 10%;
	display: flex;
	text-align: center;
	width: 25%;
	align-items: center;
`;

const P3 = styled.p`
	font-size: 2rem;
	font-weight: bold;
	padding-top: 5px;
	display: inline-block;
`;

export default function FirstView() {
	return (
		<div style={{ height: "100vh" }}>
			<div style={{ paddingLeft: "4%", paddingRight: "1%" }}>
				<EYE_CATCH>
					<div>
						<H3>
							24時間いつでも相談
							<br />
							海外滞在を100%で楽しもう。
						</H3>
						<P>
							海外滞在中、トラブルは付きもの。
							<br />
							Stayfulはあなたの海外滞在を24時間サポートします。
						</P>

						<Button
							type="submit"
							text="今すぐ相談する"
							// top="53%"
							marginTop= "2%"
							link="/asklist"
						/>
						<Link to="/aboutHelper" style={{ color: "#333333" }}>
							<HELPER>Helperとして登録したい方はコチラ</HELPER>
						</Link>
					</div>
					<div>
						<IMG src={img} alt="協力して考える人々" />
					</div>
				</EYE_CATCH>

				{/* <P>
					海外滞在中、トラブルは付きもの。
					<br />
					Stayfulはあなたの海外滞在を24時間サポートします。
				</P> */}
			</div>

			{/* -----オレンジボックス------ */}
			<CONTAINER>
				<WRAPPER>
					<INNER>
						<div>
							<PermIdentityIcon style={{ fontSize: 70 }} />
						</div>
						<div>
							<p>ユーザー数</p>
							<P3>20,000人</P3>　
						</div>
					</INNER>
					<INNER>
						<PermContactCalendarIcon style={{ fontSize: 70 }} />
						<div>
							<p>Helper数</p>
							<P3>700人</P3>
						</div>
					</INNER>
					<INNER>
						<EmojiObjectsIcon style={{ fontSize: 70 }} />
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
