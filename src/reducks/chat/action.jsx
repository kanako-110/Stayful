export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const fetch_messages = (messageAllData) => {
	return {
		type: FETCH_MESSAGES,
		payload: messageAllData,
	};
};

export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const create_message = (message) => {
	return {
		type: CREATE_MESSAGE,
		payload: message,
	};
};

export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const delete_message = (message) => {
	return {
		type: DELETE_MESSAGE,
		payload: message,
	};
};
