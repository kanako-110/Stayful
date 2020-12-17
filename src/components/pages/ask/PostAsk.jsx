import React from "react";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { create_ask } from "../../../reducks/ask/action";
import shortid from "shortid";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";
import { pc, sp, tab } from "../../../media";
import CategoryBox from "../../atoms/CategoryBox";
import SelectCountryBox from "../../atoms/SelectCountryBox";
import Button from "../../atoms/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Faker from "faker";

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

const TOP_DIV = styled.div`
	${tab`
	padding-top: 5%;
`}
	${sp`
	padding-top: 10%;
`}
`;

const H3 = styled.h3`
	color: #f5b47a;
	font-size: 2rem;
	padding-bottom: 5%;
	${tab`
	font-size: 1.8rem
	`}
	${sp`
		font-size: 1.5rem;
	`}
`;

const CONTAIN_PROFILE_POSTBOX = styled.div`
	display: flex;
	justify-content: space-between;
`;

const POST_BOX = styled.div`
	height: 90vh;
`;

const ERROR = styled.p`
	color: #ff4500;
	//helperTextと同じに設定してある
	margin-left: 14px;
	margin-right: 14px;
	line-height: 1.66;
	font-size: 0.75rem;
	letter-spacing: 0.03333em;
`;

const PROFILE_BOX = styled.div`
	width: 27%;
	height: 28vh;
	text-align: center;
	padding: 2% 0;
	border: 2px solid #2f2f1e;
`;

const BUTTON_POSITION = styled.div`
	float: right;
	margin-right: 13%;
	${tab`
		margin-right: 22%;
	`}
	${sp`
		margin-right: 22%;
	`}
`;

export default function PostAsk() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const history = useHistory();
	const { register, handleSubmit, errors } = useForm();

	const user = {
		name: Faker.internet.userName(),
		avatar: Faker.image.people(),
	};

	const onForm_submit = (data) => {
		const askId = shortid.generate();

		firebase
			.firestore()
			.collection("ask")
			.doc(askId)
			.set({
				askId: askId,
				title: data.title,
				detail: data.detail,
				createdAt: new Date(),
				getday: new Date().getDay(),
			})
			.then(function () {
				dispatch(
					create_ask({
						askId: askId,
						title: data.title,
						detail: data.detail,
						createdAt: new Date(),
						getday: new Date().getDay(),
					})
				);
				console.log("Document successfully written!");
				history.push("/asklist");
			})
			.catch(function (error) {
				console.error("Error writing document: ", error);
			});
	};

	return (
		<div className="COLOR_POSITION">
			<TOP_DIV className="ENTIRE_DIV">
				<CONTAIN_PROFILE_POSTBOX>
					{/* -----プロフィール表示----- */}
					<PROFILE_BOX>
						<img
							style={{ paddingBottom: "2%", width: "70%", height: "25vh" }}
							src={user.avatar}
							// width="140"
							// height="140"
						/>
						<p>{user.name}</p>
					</PROFILE_BOX>

					{/* <PROFILE_BOX></PROFILE_BOX> */}

					{/*----- pegaTitle and PostBox----- */}
					<div style={{ width: "60%" }}>
						{/*---- ページタイトル----- */}
						<H3>相談を投稿する</H3>
						{/* -----投稿ボックス----- */}
						<POST_BOX>
							<form onSubmit={handleSubmit(onForm_submit)}>
								<div className={classes.root}>
									<div style={{ width: "100%" }}>
										{errors.title && <ERROR>タイトルを記入してください</ERROR>}
										<TextField
											name="title"
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
											inputRef={register({ required: true })}
										/>
										<CategoryBox /> <br />
										<SelectCountryBox />
										{errors.detail && <ERROR>相談内容を記入してください</ERROR>}
										<TextField
											name="detail"
											id="outlined-full-width"
											label="相談内容"
											style={{ margin: 8 }}
											placeholder="アメリカ・カルフォルニアに住んでいます。
								銀行口座を作りたく、一度自分で行ってみたのですが....銀行員の方の言っていることが全くわかりません、、、。カルフォルニアの銀行の仕組み説明から、一緒に口座開設まで手伝ってほしいです！"
											helperText="教えてほしいことを具体的に書きましょう!"
											fullWidth
											multiline
											rows={10}
											margin="normal"
											InputLabelProps={{
												shrink: true,
											}}
											variant="outlined"
											inputRef={register({ required: true })}
										/>
									</div>
								</div>
								<BUTTON_POSITION>
									<Button text="投稿する" />
								</BUTTON_POSITION>
							</form>
						</POST_BOX>
					</div>
				</CONTAIN_PROFILE_POSTBOX>
			</TOP_DIV>
		</div>
	);
}
