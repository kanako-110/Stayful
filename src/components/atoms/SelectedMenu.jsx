import React from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	paper: {
		marginRight: theme.spacing(2),
	},
}));

export default function SelectedMenu() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	const anchorRef = React.useRef(null);

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen);
	};

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
	};

	const onLogoutClick = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return;
		}
		setOpen(false);
		handle_logout();
	};

	function handleListKeyDown(event) {
		if (event.key === "Tab") {
			event.preventDefault();
			setOpen(false);
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open);
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus();
		}

		prevOpen.current = open;
	}, [open]);

	const handle_logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log("ログアウトしました");
			})
			.catch((error) => {
				console.log(`ログアウト時にエラーが発生しました (${error})`);
			});
	};

	return (
		<div className={classes.root}>
			<div>
				<Button
					ref={anchorRef}
					aria-controls={open ? "menu-list-grow" : undefined}
					aria-haspopup="true"
					onClick={handleToggle}
				>
					<MoreVertIcon
						fontSize="large"
						style={{ display: "inline-block", verticalAlign: "middle" }}
					/>
				</Button>
				<Popper
					open={open}
					anchorEl={anchorRef.current}
					role={undefined}
					transition
					disablePortal
				>
					{({ TransitionProps, placement }) => (
						<Grow
							{...TransitionProps}
							style={{
								transformOrigin:
									placement === "bottom" ? "center top" : "center bottom",
							}}
						>
							<Paper>
								<ClickAwayListener onClickAway={handleClose}>
									<MenuList
										autoFocusItem={open}
										id="menu-list-grow"
										onKeyDown={handleListKeyDown}
									>
										<Link
											to="/yourprofile/:name"
											style={{
												color: "#333333",
												textDecoration: "none",
											}}
										>
											<MenuItem onClick={handleClose}>Profile</MenuItem>
										</Link>
										<Link
											to="/logout"
											style={{
												color: "#333333 ",
												textDecoration: "none",
											}}
										>
											<MenuItem onClick={onLogoutClick}>Logout</MenuItem>
										</Link>
									</MenuList>
								</ClickAwayListener>
							</Paper>
						</Grow>
					)}
				</Popper>
			</div>
		</div>
	);
}
