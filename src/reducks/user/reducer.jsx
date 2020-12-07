import * as Actions from "./action";
import initialState from "../store/initialState";

export const UserReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.SET_USER:
			return action.payload;
		default:
			return state;
	}
};
