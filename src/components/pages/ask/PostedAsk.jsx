import Rect, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import firebase from '../../../firebase/firebase'
import styled from "styled-components";


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

export default function PostedAsk() {
  const [asks, setAsks] = useState("")


  const history = useHistory();
	const onList_click = () => {
		history.push("/askdetails/lid");
  };
  
  useEffect ( () => {
    firebase.firestore().collection('ask').get().then((data) => {
      const ASK_DATA = data.docs.map((doc) => {
        return doc.data()
      })
      console.log(ASK_DATA)
      setAsks(ASK_DATA)
    })
  },[])



  return (
    <LIST_CONTAINER>
					<ASK_BOX>
						<TITLE onClick={onList_click}>
							アメリカでの銀行の作り方にこまっています
						</TITLE>
						<br />
						<p>
							アメリカカルフォルニア州に住んでいます。銀行でアカウントを作りたいのですが、制度自体や言語が分からず困っています。チャットで制度について日本語で話してくれる方、現地の人に私の事情を説明してくれる方探しています。
						</p>
					</ASK_BOX>
				</LIST_CONTAINER>
  )
}