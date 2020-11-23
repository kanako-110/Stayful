import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div style={{display: "flex", backgroundColor: "#2f4f4f", height:"25vh"}}>
			<div>
				<Link to="/about">Stayfulとは?</Link>
				<p>ご利用ガイド</p>
				<Link to="/asklist">ASK</Link>
				<Link to="/asklist">HELP</Link>
				<p>お知らせ</p>
				<p>ミッションとビジョン</p>
			</div>
			<div>
				<p>ご利用規約</p>
				<p>プライバシーポリシー</p>
				<p>お問い合わせ</p>
				<p>アンケート</p>
				<p>Twitter</p>
			</div>
		</div>
	);
};

export default Footer;
