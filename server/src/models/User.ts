interface Profile {
	firstName: string;
	lastName: string;
}

interface User {
	id: string;
	email: string;
	profile: Profile;
	pages: string[];
}

export { User };
