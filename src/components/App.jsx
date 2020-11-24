import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../firebase/AuthService";
import LoggedInRoute from '../firebase/LoggedInRoute'
import Header from "./module/Header";
import Home from "./pages/home";
import AskList from "./pages/ask/AskList";
import Footer from "./module/Footer";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/signup/SignUp";
import ChatList from "./pages/chat/ChatList";
import Chat from "./pages/chat/Chat";
import Profile from "./Profile";
import SignOut from "./SignOut";
import About from "./pages/about/About";
import EditAsk from "./pages/ask/EditAsk";
import PostAsk from "./pages/ask/PostAsk";
import AskDetails from "./pages/ask/AskDetails";
import AboutHelper from "./pages/about/AboutHelper";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					{/* <Box paddingLeft="4%" paddingRight="1%" width="100%" boxSizing= "border-box"> */}
					{/* 1つのコンポーネントのみ返すように設定 */}
					<div>
						<LoggedInRoute path="/" exact component={Home} />
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
		</AuthProvider>
	);
};

export default App;
