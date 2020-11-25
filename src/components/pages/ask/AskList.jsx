import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import Button from "../../atoms/Button";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

const TOP_DIV = styled.div`
	padding-top: 10%;
	height: 100vh;
	background-color: #faebd7;
`;

const H2 = styled.h2`
	color: #f5b47a;
	font-size: 2rem;
	position: absolute;
	left: 38%;
`;

const SEARCH_BOX = styled.div`
	width: 27%;
	height: auto;
	padding: 1%;
	background-color: #ffffff;
`;

const LIST_CONTAINER = styled.div`
	width: 53%;
	position: absolute;
	left: 38%;
	top: 37%;
`;

const ASK_BOX = styled.div`
	background-color: #ffffff;
	width: 100%;
	height: 15vh;
	padding: 5% 3%;
`;

const TITLE = styled.h6`
	font-size: 1.3rem;
	padding-bottom: 2%;
	&:hover {
		color: #696969;
	}
`;

const AskList = (props) => {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const history = useHistory()
	const onlist_click = () => {
		history.push('/askdetails/lid')
	}

	return (
		<TOP_DIV className="ENTIRE_DIV">
			<H2>相談する</H2>
			{/* ////検索ボックス///// */}
			<SEARCH_BOX>
				{/* 1 条件 */}
				<form className={classes.root} noValidate autoComplete="off">
					<TextField
						id="outlined-basic"
						label="条件で絞る"
						variant="outlined"
					/>
				</form>
				{/* 2カテゴリ */}
				<FormControl
					variant="outlined"
					className={classes.formControl}
					style={{ width: "25ch" }}
				>
					<InputLabel id="demo-simple-select-outlined-label">
						カテゴリ
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={age}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>お金</MenuItem>
						<MenuItem value={20}>携帯登録</MenuItem>
						<MenuItem value={30}>制度</MenuItem>
					</Select>
				</FormControl>
				{/* 3国で絞る */}
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">
						国で絞る
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={age}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>アメリカ</MenuItem>
						<MenuItem value={20}>イギリス</MenuItem>
						<MenuItem value={30}>カナダ</MenuItem>
					</Select>
				</FormControl>
				{/* 4言語 */}
				<FormControl variant="outlined" className={classes.formControl}>
					<InputLabel id="demo-simple-select-outlined-label">
						言語で絞る
					</InputLabel>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={age}
						onChange={handleChange}
						label="Age"
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>英語</MenuItem>
						<MenuItem value={20}>ドイツ語</MenuItem>
						<MenuItem value={30}>韓国語</MenuItem>
					</Select>
				</FormControl>
			</SEARCH_BOX>

			{/*----- 編集・投稿ボタン----- */}
			<Button text="投稿する" link="/askdetails/:id" top="25%" left="86%" />
			<Button
				text="自分の投稿を編集する"
				link="/editask"
				top="25%"
				left="65%"
			/>

			{/* -----ask一覧 ------ */}
			<LIST_CONTAINER>
				<ASK_BOX >
					<TITLE onClick={onlist_click}>アメリカでの銀行の作り方にこまっています</TITLE>
					<br />
					<p>
						アメリカカルフォルニア州に住んでいます。銀行でアカウントを作りたいのですが、制度自体や言語が分からず困っています。チャットで制度について日本語で話してくれる方、現地の人に私の事情を説明してくれる方探しています。
					</p>
				</ASK_BOX>
			</LIST_CONTAINER>
		</TOP_DIV>
	);
};

export default withRouter(AskList);
