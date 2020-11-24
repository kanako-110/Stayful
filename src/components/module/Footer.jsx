import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const P = styled.p`
	color: #ffffff;
	line-height: 1.3rem;
`;

export default function Footer() {
	return (
		<div
			className="ENTIRE_DIV"
			style={{
				backgroundColor: "#000033",
			}}
		>
			<div
				style={{
					display: "flex",
					paddingTop: "3%",
				}}
			>
				{/*-------左側------ */}
				<div style={{ paddingRight: "5%" }}>
					<Link
						to="/about"
						style={{
							color: "#ffffff ",
							textDecoration: "none",
							lineHeight: "1.3rem",
						}}
					>
						Stayfulとは?
					</Link>
					<P>ご利用ガイド</P>
					<Link
						to="/asklist"
						style={{
							color: "#ffffff ",
							textDecoration: "none",
							lineHeight: "1.3rem",
						}}
					>
						ASK
					</Link>
					<br />

					<Link
						to="/asklist"
						style={{
							color: "#ffffff ",
							textDecoration: "none",
							lineHeight: "1.3rem",
						}}
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
