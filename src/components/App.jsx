import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./header/Header";
import Home from "./home";
import AskList from "./ask/AskList";
import Footer from "./Footer";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import ChatList from "./chat/ChatList";
import Chat from "./chat/Chat";
import Profile from "./Profile";
import SignOut from "./SignOut";
import About from "./About";
import EditAsk from "./ask/EditAsk";
import PostAsk from "./ask/PostAsk";
import AskDetails from "./ask/AskDetails";
import AboutHelper from "./AboutHelper";

const App = () => {
	return (
		<Router>
			<Header />
			<Switch>
				{/* <Box paddingLeft="4%" paddingRight="1%" width="100%" boxSizing= "border-box"> */}
				{/* 1つのコンポーネントのみ返すように設定 */}
				<div
					style={{
						paddingLeft: "5%",
						paddingRight: "2%",
						boxSizing: "border - box",
					}}
				>
					<Route path="/" exact component={Home} />
					<Route path="/asklist" exact component={AskList} />
					<Route path="/login" exact component={LogIn} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="/chatlist" exact component={ChatList} />
					<Route path="/chat" exact component={Chat} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/signout" exact component={SignOut} />
					<Route path="/about" exact component={About} />
					<Route path="/editask" exact component={EditAsk} />
					<Route path="/postask" exact component={PostAsk} />
					<Route path="/askdetails/:id" exact component={AskDetails} />
					<Route path="/abouthelper" exact component={AboutHelper} />
					{/* </Box> */}
				</div>
			</Switch>
			<Footer />
		</Router>
	);
};

export default App;
