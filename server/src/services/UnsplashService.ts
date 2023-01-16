import axios from "axios";
import configs from "../configs";

const getPhotos = async () => {
	const { UNSPLASH_URL } = configs;
	
    return axios.get(`${UNSPLASH_URL}/search/photos?query=backgrounds&orientation=landscape`, {
		headers: {
			Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
		},
	});
};

export default {
	getPhotos,
};
