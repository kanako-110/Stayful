import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

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
	outline:0;
}

`;

export default function Button({ text, link, top, left }) {
	const history = useHistory()
	const onButton_click =(link)=> {
		history.push(link)
	}
	return (
		<BUTTON  onClick={()=>onButton_click(link)} style={{ top: top, left: left }}>
			{text}
		</BUTTON>
	);
}
