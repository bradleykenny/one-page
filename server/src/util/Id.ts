import shortid from "shortid";

const generateShortId = () => {
	const chars =
		"0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
	shortid.characters(chars);
	return shortid.generate();
};

export default { generateShortId };
