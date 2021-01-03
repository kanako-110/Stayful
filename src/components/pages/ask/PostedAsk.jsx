import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetch_asks } from "../../../reducks/ask/action";
import firebase from "../../../firebase/firebase";
import styled from "styled-components";
import { sp, tab } from "../../../media";

const CONTAINER = styled.div`
	margin-top: 15% !important;
	${tab`
		margin-top: 22%!important;
	`}
	${sp`
		margin-top: 25% !important;
	`}
`;

const ASK_BOX = styled.div`
	border: 2px solid #2f2f1e;
	height: 15vh;
	padding: 5% 3%;
	margin-bottom: 8%;
	${sp`
		height: 10vh;
`}
`;

const TITLE = styled.h6`
	font-size: 1.3rem;
	padding-bottom: 2%;
	&:hover {
		color: #696969;
	}
	${sp`
	font-size:0.9rem;
`}
`;

const DETAIL = styled.p`
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	${tab`

	`}
	${sp`
		font-size: 0.8rem;
		-webkit-line-clamp: 2;
 	`}
`;

export default function PostedAsk() {
	const asks = useSelector((state) => state.asks);
	const history = useHistory();
	const onTitle_click = (askId) => {
		history.push(`/askdetails/${askId}`);
	};

	return (
		<CONTAINER>
			{asks &&
				asks.map((ask) => {
					console.log(asks)
					console.log(ask)
					return (
						<ASK_BOX key={ask.askId}>
							<TITLE onClick={() => onTitle_click(ask.askId)}>
								{ask.title}
							</TITLE>
							<br />
							<DETAIL>{ask.detail}</DETAIL>
						</ASK_BOX>
					);
				})}
		</CONTAINER>
	);
}
