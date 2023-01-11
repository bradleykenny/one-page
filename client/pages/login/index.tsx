import Button from "@src/components/Button";
import Input from "@src/components/Input";
import useApi from "@src/hooks/useApi";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

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
            <div className="grid grid-cols-2 h-screen bg-gray-200">
                <div className="bg-gradient-to-br from-indigo-500 to-orange-500 drop-shadow-md z-10 flex justify-center m-20 mr-10 rounded-lg flex-col">
                    <h1 className="text-center text-3xl text-white self-center justify-center opacity-40 my-5">
                        Editing.
                    </h1>
                    <h1 className="text-center text-4xl text-white self-center justify-center opacity-70 my-5">
                        Different.
                    </h1>
                    <h1 className="text-center text-5xl text-white self-center justify-center my-5">
                        Start today.
                    </h1>
                </div>
                <div className="z-0 bg-white drop-shadow-md flex justify-center m-20 ml-10 rounded-lg flex-col">
                    <div className="h-full w-full absolute bg-login-bg grayscale opacity-5 bg-cover"></div>

                    <form
                        className="w-1/2 self-center mx-auto -mt-10 flex flex-col z-0"
                        onSubmit={handleLoginSubmit}>
                        <h1 className="text-center font-cursive text-6xl mb-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">
                            Welcome back!
                        </h1>
                        <div className="flex flex-col gap-4 mt-4">
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
                                className="text-center text-indigo-800 hover:bg-indigo-50 rounded-lg py-1 px-2 m-auto">
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
