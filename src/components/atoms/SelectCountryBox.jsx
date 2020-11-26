import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
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

export default function SelectCountryBox() {
	const classes = useStyles();
	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<FormControl variant="outlined" className={classes.formControl} style={{ paddingBottom:"3%"}}>
			<InputLabel id="demo-simple-select-outlined-label">国名</InputLabel>
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
	);
}
