import * as Actions from "./action";
import initialState from "../store/initialState";

export const UserProfileReducer = (state = initialState, action) => {
	switch (action.type) {
		// case Actions.SET_PROFILE:
		// 	return [...state, action.payload];
		case Actions.FETCH_PROFILE:
			return action.payload;
		default:
			return state;
	}
};
