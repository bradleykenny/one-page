import { TimedFields } from "../models/Common";

const initialiseTimeFields = (): TimedFields => {
	const currentTime = Date.now();
	return {
		updatedAt: currentTime,
		createdAt: currentTime,
	};
};

export default {
	initialiseTimeFields,
};
