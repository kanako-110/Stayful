import * as Actions from "./action";
import initialState from "../store/initialState";

export const MessageReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.FETCH_MESSAGES:
			return action.payload;
		case Actions.CREATE_MESSAGE:
			return [...state, action.payload];
			case Actions.DELETE_MESSAGE:
			return state.filter((message) => message !== action.payload);
		default:
			return state;
	}
};
