import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
	color: #ffffff;
`;

export default function Footer() {
	return (
		<div style={{paddingLeft: "4%", paddingRight: "4%", backgroundColor: "#2f4f4f" }}>
			<div
				style={{
					display: "flex",
					height: "15vh",
					paddingTop: "3%",
				}}
			>
				{/*-------左側------ */}
				<div style={{ paddingRight: "5%" }}>
					<Link
						to="/about"
						style={{ color: "#ffffff ", textDecoration: "none" }}
					>
						Stayfulとは?
					</Link>
					<P>ご利用ガイド</P>
					<Link
						to="/asklist"
						style={{ color: "#ffffff ", textDecoration: "none" }}
					>
						ASK
					</Link>

					<br />

					<Link
						to="/asklist"
						style={{ color: "#ffffff ", textDecoration: "none" }}
					>
						HELP
					</Link>
					<P>お知らせ</P>
					<P>ミッションとビジョン</P>
				</div>

				{/*-------- 右側-------- */}
				<div>
					<P>ご利用規約</P>
					<P>プライバシーポリシー</P>
					<P>お問い合わせ</P>
					<P>アンケート</P>
					<P>Twitter</P>
				</div>
			</div>
			<div>
				<P style={{ textAlign: "center", paddingBottom: "1%" }}>© Stayful </P>
			</div>
		</div>
	);
}
