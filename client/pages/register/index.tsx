import { Chewy } from "@next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useCookies } from "react-cookie";
import { cn } from "utils";

import React, { ChangeEvent, useState } from "react";

import Button from "@src/components/Button";
import Input from "@src/components/Input";
import useApi from "@src/hooks/useApi";

const titleFont = Chewy({ weight: "400", subsets: ["latin"] });

const Register = () => {
    const router = useRouter();

    const [cookies, setCookie] = useCookies(["token"]);

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

    const handleTextchange = (
        e: ChangeEvent<HTMLInputElement>,
        setState: Function
    ) => {
        setState(e.target.value);
    };

    const handleRegisterSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();

        const response = await useApi("/auth/register", "POST", {
            email: username,
            firstName,
            lastName,
            password,
        });

        if (response) {
            localStorage.setItem("token", response?.data?.token);
            setCookie("token", JSON.stringify(response?.data?.token), {
                path: "/",
            });

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
                <div className="z-0 m-20 ml-10 flex flex-col justify-center overflow-y-scroll rounded-lg bg-gradient-to-br from-white to-primary-50 drop-shadow-md">
                    <form
                        className="z-0 mx-auto -mt-10 flex w-1/2 flex-col self-center"
                        onSubmit={handleRegisterSubmit}>
                        <h1
                            className={cn(
                                "bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text pb-4 text-center text-6xl text-transparent",
                                titleFont.className
                            )}>
                            Register
                        </h1>
                        <div className="mt-4 flex flex-col gap-4">
                            <Input
                                type="text"
                                label="Username"
                                placeholder="example@mail.com"
                                required
                                onChange={(e) =>
                                    handleTextchange(e, setUsername)
                                }
                            />
                            <Input
                                type="text"
                                label="First name"
                                placeholder="John"
                                required
                                onChange={(e) =>
                                    handleTextchange(e, setFirstName)
                                }
                            />
                            <Input
                                type="text"
                                label="Last name"
                                placeholder="Smith"
                                required
                                onChange={(e) =>
                                    handleTextchange(e, setLastName)
                                }
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="$ecret123"
                                required
                                onChange={(e) =>
                                    handleTextchange(e, setPassword)
                                }
                            />
                            <Button label="Register" />
                            <a
                                href="/login"
                                className="m-auto rounded-lg py-1 px-2 text-center text-indigo-800 hover:bg-indigo-50">
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
