import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from "react-router";
import Button from "../../atoms/Button";
import CategoryBox from "../../atoms/CategoryBox";
import SelectCountryBox from "../../atoms/SelectCountryBox"
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

const H3 = styled.h3`
	position: absolute;
	left: 38%;
	color: #f5b47a;
	font-size: 2rem;
`;

const SEARCH_BOX = styled.div`
	width: 27%;
	height: auto;
	padding: 1%;
	background-color: #ffffff;
`;

const LIST_CONTAINER = styled.div`
	position: absolute;
	left: 38%;
	top: 37%;
	width: 53%;
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

	const history = useHistory();
	const onlist_click = () => {
		history.push("/askdetails/lid");
	};

	return (
		<div className="COLOR_POSITION">
			<div className="ENTIRE_DIV">
				<H3>相談する</H3>
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
					<CategoryBox />
					{/* 3国で絞る */}
					<SelectCountryBox />
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
				<Button text="投稿する" link="/postask" top="25%" left="86%" />
				<Button
					text="自分の投稿を編集する"
					link="/editask"
					top="25%"
					left="65%"
				/>

				{/* -----ask一覧 ------ */}
				<LIST_CONTAINER>
					<ASK_BOX>
						<TITLE onClick={onlist_click}>
							アメリカでの銀行の作り方にこまっています
						</TITLE>
						<br />
						<p>
							アメリカカルフォルニア州に住んでいます。銀行でアカウントを作りたいのですが、制度自体や言語が分からず困っています。チャットで制度について日本語で話してくれる方、現地の人に私の事情を説明してくれる方探しています。
						</p>
					</ASK_BOX>
				</LIST_CONTAINER>
			</div>
		</div>
	);
};

export default withRouter(AskList);
