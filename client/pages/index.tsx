import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="flex h-screen w-screen flex-col bg-gradient-to-br from-slate-900 to-black">
            <h1 className="mx-auto mt-40 h-auto bg-gradient-to-br from-indigo-500 to-orange-500 bg-clip-text py-4 text-center text-8xl font-black text-transparent drop-shadow-lg">
                one:page
            </h1>
            <div className="snap-x overflow-auto whitespace-nowrap p-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <div className="mr-8 inline-block w-1/4 snap-center justify-center self-center overflow-hidden rounded-xl bg-slate-800 p-4 shadow">
                        <div className="-ml-8 -mt-36 mb-4 h-96 w-96 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                            <div className="h-72 w-72 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                                <div className="h-48 w-48 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                                    <div className="h-24 w-24 rounded-full bg-indigo-600/30 shadow-lg">
                                        <FontAwesomeIcon
                                            icon={faAnchor}
                                            className="ml-6 mt-6 h-10 text-indigo-8900 drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-slate-50">Something</h1>
                        <p className="text-slate-400 whitespace-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla dapibus, nisi eu fermentum eleifend,
                            velit sapien aliquet neque, at ullamcorper arcu
                            felis ac nisl.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
