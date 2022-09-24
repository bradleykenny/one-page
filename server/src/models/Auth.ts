export interface LoginRequest {
	email: string;
	password: string;
}

export interface RegisterRequest {
	email: string;
	firstName: string;
	lastName: string;
	password: string;
}

export interface AuthModel {
	id: string;
	email: string;
	password: string;
}

export interface AuthenticatedRequest {
	user: {
		username: string;
		iat: number;
	};
}
