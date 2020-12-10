import React from "react";
import Button from "../../atoms/Button"

export default function ShowProfile() {
	return (
		<div className="ENTIRE_DIV" style={{ paddingTop: "10%", height: "90vh" }}>
			あなたのプロフィール
			<Button text="プロフィールを編集する" link="/editprofile/:name" />
		</div>
	);
}
