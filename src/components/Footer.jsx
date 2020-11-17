import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<hr />
			<Link to="/about">Stayfulとは?</Link>
			<p>ご利用ガイド</p>
			<Link to="/asklist">ASK</Link>
			<Link to="/asklist">HELP</Link>
			<p>ミッションとビジョン</p>
			<p>ご利用規約</p>
			<p>プライバシーポリシー</p>
			<p>お問い合わせ</p>
			<p>アンケート</p>
		</div>
	);
};

export default Footer;
