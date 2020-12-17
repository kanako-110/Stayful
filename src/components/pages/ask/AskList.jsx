import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthService";
import Button from "../../atoms/Button";
import CategoryBox from "../../atoms/CategoryBox";
import SelectCountryBox from "../../atoms/SelectCountryBox";
import PostedAsk from "./PostedAsk";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { pc, sp, tab } from "../../../media";

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
	${tab`
padding-top: 3%
`}
	${sp`
padding-top: 10%;

`}
`;

const H3 = styled.h3`
	padding-bottom: 3%;
	color: #f5b47a;
	font-size: 2rem;
	${sp`
			font-size:1.5rem;
		`}
`;

const WRAPPER = styled.div`
	display: flex;
	justify-content: space-between;
`;

const SEARCH_BOX = styled.div`
	width: 27% !important;
	height: auto;
	${sp`
			width: 30%;
		`}
`;

const RIGHT_WRAPPER = styled.div`
	width: 60%;
`;

const TEXTFIELD = styled(TextField)`
	width: 100%;
	${sp`
	font-size: 0.8rem;
`}
`;

const BUTTON_WRAPPER = styled.div`
margin-left: 85%;
`;


const AskList = () => {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};

	const history = useHistory();

	const user = useContext(AuthContext);
	const onPost_click = () => {
		if (user) {
			history.push("postask");
		} else {
			history.push("login");
		}
	};

	return (
		<div className="COLOR_POSITION" style={{ height: "230vh" }}>
			<TOP_DIV className="ENTIRE_DIV">
				<H3>相談する</H3>
				<WRAPPER>
					{/* ------検索ボックス----- */}

					<SEARCH_BOX>
						{/* 1 条件 */}
						<form className={classes.root} noValidate autoComplete="off">
							<TEXTFIELD
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

					{/*----- 右側　編集・投稿ボタン----- */}
					<RIGHT_WRAPPER>
						<BUTTON_WRAPPER onClick={onPost_click}>
							<Button text="投稿する" />
						</BUTTON_WRAPPER>

						{/* -----ask一覧 ------ */}
						<PostedAsk />
					</RIGHT_WRAPPER>
				</WRAPPER>
			</TOP_DIV>
		</div>
	);
};

export default AskList;
