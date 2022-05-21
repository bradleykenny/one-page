interface LoginRequest {
    email: string;
    password: string;
}

interface RegisterRequest {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
}

export {
    LoginRequest,
    RegisterRequest
}
