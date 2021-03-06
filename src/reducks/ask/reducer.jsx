import * as Actions from "./action";
import initialState from "../store/initialState.jsx";

export const AskReducer = (state = initialState, action) => {
	switch (action.type) {
		case Actions.FETCH_ASKS:
			return action.payload;
		case Actions.CREATE_ASK:
			return [...state, action.payload];
		default:
			return state;
	}
};
