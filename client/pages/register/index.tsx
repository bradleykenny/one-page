import Button from "@src/components/Button";
import Input from "@src/components/Input";
import useApi from "@src/hooks/useApi";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
    const router = useRouter();

    if (typeof window !== "undefined") {
        const isLoggedIn = localStorage.getItem("token");
        if (isLoggedIn) {
            router.push("/home");
        }
    }

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleRegisterSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const response = await useApi("auth/register", "POST", {
            email: username,
            firstName,
            lastName,
            password,
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
                    <h1 className="my-5 justify-center self-center text-center text-3xl text-white opacity-40">
                        Editing.
                    </h1>
                    <h1 className="my-5 justify-center self-center text-center text-4xl text-white opacity-70">
                        Different.
                    </h1>
                    <h1 className="my-5 justify-center self-center text-center text-5xl text-white">
                        Start today.
                    </h1>
                </div>
                <div className="z-0 m-20 ml-10 flex flex-col justify-center overflow-y-scroll rounded-lg bg-white drop-shadow-md">
                    <div className="absolute h-full w-full bg-login-bg bg-cover opacity-5 grayscale"></div>
                    <form
                        className="z-0 mx-auto -mt-10 flex w-1/2 flex-col self-center"
                        onSubmit={handleRegisterSubmit}
                    >
                        <h1 className="mb-5 bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-center font-cursive text-6xl text-transparent">
                            Get started!
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
                                type="text"
                                label="First name"
                                placeholder="John"
                                required
                                onChange={handleFirstNameChange}
                            />
                            <Input
                                type="text"
                                label="Last name"
                                placeholder="Smith"
                                required
                                onChange={handleLastNameChange}
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="secret123"
                                required
                                onChange={handlePasswordChange}
                            />
                            <Button label="Register" />
                            <a
                                href="/login"
                                className="m-auto rounded-lg py-1 px-2 text-center text-indigo-800 hover:bg-indigo-50"
                            >
                                Already a user? Login
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
