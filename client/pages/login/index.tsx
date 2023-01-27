import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

import Button from "@src/components/Button";
import Input from "@src/components/Input";
import useApi from "@src/hooks/useApi";

const Login = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const isLoggedIn = localStorage.getItem("token");
        if (isLoggedIn) {
            router.push("/home");
        }
    }

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleLoginSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const response = await useApi("auth/login", "POST", {
            email: username.trim(),
            password: password.trim(),
        });

        if (response) {
            localStorage.setItem("token", response?.data?.token);
            router.push("/home");
        }
    };

    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="grid h-screen grid-cols-2 bg-gray-200">
                <div className="z-10 m-20 mr-10 flex flex-col justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-orange-500 drop-shadow-md">
                    <h1 className="my-2 justify-center self-center text-center text-3xl text-white opacity-40">
                        Create.
                    </h1>
                    <h1 className="my-2 justify-center self-center text-center text-4xl text-white opacity-70">
                        Distribute.
                    </h1>
                    <h1 className="my-2 justify-center self-center text-center text-5xl text-white">
                        Start today.
                    </h1>
                </div>
                <div className="z-0 m-20 ml-10 flex flex-col justify-center rounded-lg bg-white drop-shadow-md">
                    <div className="absolute h-full w-full bg-login-bg bg-cover opacity-5 grayscale"></div>

                    <form
                        className="z-0 mx-auto -mt-10 flex w-1/2 flex-col self-center"
                        onSubmit={handleLoginSubmit}>
                        <h1 className="mb-5 bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-center font-cursive text-6xl text-transparent">
                            Welcome back!
                        </h1>
                        <div className="mt-4 flex flex-col gap-4">
                            <Input
                                type="text"
                                label="Username"
                                placeholder="example@mail.com"
                                required
                                onChange={handleUsernameChange}
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="secret123"
                                required
                                onChange={handlePasswordChange}
                            />
                            <Button label="Login" />
                            <a
                                href="/register"
                                className="m-auto rounded-lg py-1 px-2 text-center text-indigo-800 hover:bg-indigo-50">
                                Not a user? Register here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
