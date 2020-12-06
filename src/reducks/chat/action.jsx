export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const create_message = (messageData) => {
	return {
		type: CREATE_MESSAGE,
		payload: messageData,
	};
};