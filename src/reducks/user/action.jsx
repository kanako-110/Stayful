export const FETCH_PROFILE = "FETCH_PROFILE";
export const fetch_profile = (profileData) => {
	return {
		type: FETCH_PROFILE,
		payload: profileData,
	};
};

export const SET_PROFILE = "SET_PROFILE";
export const set_profile = (userProfile) => {
	return {
		type: SET_PROFILE,
		payload: userProfile,
	};
};
