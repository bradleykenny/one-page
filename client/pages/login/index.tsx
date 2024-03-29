import { Chewy } from "@next/font/google";
import { getServerSession } from "next-auth";
import { getSession, signIn } from "next-auth/react";
import { cn } from "utils";

import React, { useState } from "react";

import Button from "@src/components/Button";
import Input from "@src/components/Input";

import { authOptions } from "../api/auth/[...nextauth]";

const titleFont = Chewy({ weight: "400", subsets: ["latin"] });

const Login = () => {
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

        signIn("credentials", {
            email: username,
            password,
        });
    };

    return (
        <div>
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
                <div className="z-0 m-20 ml-10 flex flex-col justify-center rounded-lg bg-gradient-to-br from-white to-white drop-shadow-md">
                    <form
                        className="z-0 mx-auto -mt-10 flex w-1/2 flex-col self-center"
                        onSubmit={handleLoginSubmit}>
                        <h1
                            className={cn(
                                "bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text pb-4 text-center text-6xl text-transparent",
                                titleFont.className
                            )}>
                            Login
                        </h1>
                        <div className="mt-4 flex flex-col gap-4">
                            <Input
                                type="text"
                                label="Username"
                                placeholder="example@mail.com"
                                required
                                autoFocus
                                onChange={handleUsernameChange}
                                autoComplete="username"
                            />
                            <Input
                                type="password"
                                label="Password"
                                placeholder="$ecret123"
                                required
                                onChange={handlePasswordChange}
                                autoComplete="current-password"
                            />
                            <Button fullWidth type="submit">
                                Login
                            </Button>
                            <a
                                href="/register"
                                className="m-auto rounded-lg py-1 px-2 text-center text-indigo-800 hover:underline">
                                Not a user? Register here
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const { req } = context;
    const session = await getServerSession(req, context.res, authOptions);
    console.log("session", session);

    if (session) {
        return {
            redirect: { destination: "/home" },
        };
    }

    return {
        props: {},
    };
}

export default Login;
