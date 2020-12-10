export const FETCH_ASKS = "FETCH_ASKS";
export const fetch_asks = (asksData) => {
	return {
		type: FETCH_ASKS,
		payload: asksData,
	};
};

export const CREATE_ASK = "CREATE_ASK";
export const create_ask = (askData) => {
	return {
		type: CREATE_ASK,
		payload: askData,
	};
};
