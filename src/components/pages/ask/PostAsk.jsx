import React from "react";
import styled from "styled-components";
import CategoryBox from "../../atoms/CategoryBox";
import SelectCountryBox from "../../atoms/SelectCountryBox";
import Button from "../../atoms/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: "25ch",
	},
}));

const H3 = styled.h3`
	position: absolute;
	left: 38%;
	color: #f5b47a;
	font-size: 2rem;
`;

const PROFILE_BOX = styled.div`
	background-color: #ffffff;
	width: 30%;
	height: 28vh;
`;

const POST_BOX = styled.div`
	position: absolute;
	left: 38%;
	top: 25%;
	height: 90vh;
	width: 53%;
	background-color: #ffffff;
`;

const PostAsk = () => {
	const classes = useStyles();

	return (
		<div className="COLOR_POSITION">
			<div className="ENTIRE_DIV">
				<H3>相談を投稿する</H3>
				{/* -----プロフィール表示----- */}
				<PROFILE_BOX></PROFILE_BOX>
				{/* -----投稿ボックス----- */}
				<POST_BOX>
					<div className={classes.root}>
						<div style={{ width: "90%", padding: "5% 0" }}>
							<TextField
								id="outlined-full-width"
								label="タイトル"
								style={{ margin: 8 }}
								placeholder="アメリカ・カルフォルニアで銀行口座をつくりたいです"
								helperText="具体的に書くと回答が来やすいです!"
								fullWidth
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
							<CategoryBox /> <br />
							<SelectCountryBox />
							<TextField
								id="outlined-full-width"
								label="タイトル"
								style={{ margin: 8 }}
								placeholder="アメリカ・カルフォルニアに住んでいます。
								銀行口座を作りたく、一度自分で行ってみたのですが....銀行員の方の言っていることが全くわかりません、、、。カルフォルニアの銀行の仕組み説明から、一緒に口座開設まで手伝ってほしいです！"
								helperText="教えてほしいことを具体的に書きましょう!"
								fullWidth
								multiline
								rows={12}
								margin="normal"
								InputLabelProps={{
									shrink: true,
								}}
								variant="outlined"
							/>
						</div>
					</div>
					<Button text="投稿する" link="/asklist" top="87%" left="75%" />
				</POST_BOX>
			</div>
		</div>
	);
};

export default PostAsk;
