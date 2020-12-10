import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "../firebase/AuthService";
import firebase from "../firebase/firebase";
import { fetch_messages } from "../reducks/chat/action";
import { useDispatch } from "react-redux";
import LoggedInRoute from "../firebase/LoggedInRoute";
import Header from "./module/Header";
import Home from "./pages/home";
import AskList from "./pages/ask/AskList";
import Footer from "./module/Footer";
import LogIn from "./pages/login/LogIn";
import SignUp from "./pages/login/SignUp";
import ChatList from "./pages/chat/ChatList";
import Chat from "./pages/chat/Chat";
import Profile from "./Profile";
import SignOut from "./SignOut";
import About from "./pages/about/About";
import EditAsk from "./pages/ask/EditAsk";
import PostAsk from "./pages/ask/PostAsk";
import AskDetails from "./pages/ask/AskDetails";
import AboutHelper from "./pages/about/AboutHelper";
import ShowProfile from "./pages/profile/ShowProfile";
import Logout from "./pages/login/Logout";

const App = () => {
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	firebase
	// 		.firestore()
	// 		.collection("messages")
	// 		.orderBy("createdAt", "asc")
	// 		.get()
	// 		.then((data) => {
	// 			const messageData = data.docs.map((doc) => {
	// 				return {
	// 					createdAt: new Date(doc.data().createdAt.seconds * 1000),
	// 					displayName: doc.data().displayName,
	// 					getday: doc.data().getday,
	// 					messageId: doc.data().messageId,
	// 					text: doc.data().text,
	// 				};
	// 			});
	// 			dispatch(fetch_messages(messageData));
	// 		});
	// }, []);

	return (
		<AuthProvider>
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/asklist" exact component={AskList} />
					<Route path="/login" exact component={LogIn} />
					<Route path="/signup" exact component={SignUp} />
					<Route path="/chatlist" exact component={ChatList} />
					<Route path="/chat/:id" exact component={Chat} />
					<Route path="/profile" exact component={Profile} />
					<Route path="/signout" exact component={SignOut} />
					<Route path="/about" exact component={About} />
					<Route path="/editask" exact component={EditAsk} />
					<Route path="/postask" exact component={PostAsk} />
					<Route path="/askdetails/:id" exact component={AskDetails} />
					<Route path="/abouthelper" exact component={AboutHelper} />
					<Route path="/yourprofile" exact component={ShowProfile} />
					<Route path="/logout" exact component={Logout} />
				</Switch>
				<Footer />
			</Router>
		</AuthProvider>
	);
};

export default App;
