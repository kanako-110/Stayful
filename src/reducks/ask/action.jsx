export const CREATE_ASK = "CREATE_ASK";
export const create_ask = (askData) => {
	return {
		type: CREATE_ASK,
		payload: askData,
	};
};