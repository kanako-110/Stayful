import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const BUTTON = styled.button`
	position: absolute;
	color: #5f9ea0 !important;
	text-transform: uppercase;
	font-size: 1rem;
	font-weight: bold;
	background: #ffffff;
	padding: 15px;
	border: 3px solid #5f9ea0 !important;
	border-radius: 6px;
	display: inline-block;
	transition: all 0.3s ease 0s;
	opacity: 0.5;
	&:hover {
		background: #ffffff;
		opacity: 1;
	}
`;

export default function Button({ text, link, top, left }) {
	return (
		<Link to={link}>
			<BUTTON style={{ top: top, left: left }}>{text}</BUTTON>
			{/* //componentごとに変える */}
		</Link>
	);
}

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		"& > *": {
// 			margin: theme.spacing(1),
// 		},
//   },

// }));

// export default function Button() {
// 	const classes = useStyles();

// 	return (
// 		<div className={classes.root}>
// 			<Button variant="outlined">Default</Button>
// 			<Button variant="outlined" color="primary">
// 				Primary
// 			</Button>
// 			<Button variant="outlined" color="secondary">
// 				Secondary
// 			</Button>
// 			<Button variant="outlined" disabled>
// 				Disabled
// 			</Button>
// 			<Button variant="outlined" color="primary" href="#outlined-buttons">
// 				Link
// 			</Button>
// 		</div>
// 	);
// }
