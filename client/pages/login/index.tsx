import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Login = () => {
    const router = useRouter();

    useEffect(() => {
        const isLoggedIn = false;
        if (isLoggedIn) {
            router.push("/home");
        }
    }, []);

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
                    <h1 className="text-center text-4xl text-white self-center justify-center opacity-40 my-5">
                        Text editing.
                    </h1>
                    <h1 className="text-center text-5xl text-white self-center justify-center opacity-70 my-5">
                        In a new way.
                    </h1>
                    <h1 className="text-center text-6xl text-white self-center justify-center my-5">
                        A Better way.
                    </h1>
                </div>
                <div className="z-0 bg-white drop-shadow-md flex justify-center m-20 ml-10 rounded-lg flex-col">
                    <div className="w-1/2 self-center bg-white rounded-md shadow mx-auto flex flex-col p-4">
                        <h1 className="text-center font-cursive text-4xl mt-3 mb-4 text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-orange-500">
                            Welcome back
                        </h1>
                        <input
                            type="text"
                            placeholder="Username"
                            className="px-2 py-2 m-2 border rounded-md focus:shadow focus:outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="px-2 py-2 m-2 border rounded-md focus:shadow focus:outline-none"
                        />
                        <button className="px-2 py-2 m-2 bg-orange-500 rounded-md text-white hover:shadow hover:bg-orange-600">
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
