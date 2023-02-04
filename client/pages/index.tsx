import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="flex h-screen w-screen flex-col bg-gradient-to-br from-white to-slate-200">
            <h1 className="mx-auto mt-40 h-auto bg-gradient-to-br from-indigo-500 to-orange-500 bg-clip-text py-4 text-center text-8xl font-black text-transparent drop-shadow">
                one:page
            </h1>
        </div>
    );
};

export default Home;
