import { faAnchor, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Unbounded } from "@next/font/google";
import type { NextPage } from "next";
import { cn } from "utils";

const unbounded = Unbounded({ weight: "700", subsets: ["latin"] });

const Home: NextPage = () => {
    return (
        <div className="flex w-screen flex-col bg-gradient-to-b from-slate-100 to-orange-200">
            <h1
                className={cn(
                    "mx-auto my-40 mb-16 h-auto bg-gradient-to-br from-indigo-500 to-orange-500 bg-clip-text py-4 text-center text-7xl font-black text-transparent drop-shadow-lg",
                    unbounded.className
                )}>
                one:page
            </h1>
            <a
                className="mx-auto mb-24 rounded-full bg-indigo-500 px-8 py-4 text-white shadow-lg shadow-indigo-200 transition-all ease-in-out"
                href="/home">
                Let's go
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </a>
            <div className="mb-10 snap-x overflow-scroll whitespace-nowrap p-10 pb-0">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
                    <div className="mr-8 inline-block w-1/4 snap-center justify-center self-center overflow-hidden rounded-xl bg-slate-50 p-4 shadow last:mr-0">
                        <div className="-ml-8 -mt-36 mb-4 h-96 w-96 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                            <div className="h-72 w-72 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                                <div className="h-48 w-48 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                                    <div className="h-24 w-24 rounded-full bg-indigo-600/30 shadow-lg">
                                        <FontAwesomeIcon
                                            icon={faAnchor}
                                            className="ml-6 mt-6 h-10 text-indigo-800 drop-shadow-lg"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-gray-700">Something</h1>
                        <p className="whitespace-normal text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nulla dapibus, nisi eu fermentum eleifend,
                            velit sapien aliquet neque, at ullamcorper arcu
                            felis ac nisl.
                        </p>
                    </div>
                ))}
            </div>
            <div className="m-10 mt-0 overflow-hidden rounded-xl bg-slate-50 p-10 shadow">
                <h1 className="mb-4 inline-block border-b border-orange-300 pr-10 pb-4 font-black">
                    Some more information
                </h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis tincidunt tortor non molestie. Morbi
                    eleifend orci vitae mattis lobortis. Nunc mauris ipsum,
                    sagittis sed sapien ac, porttitor fermentum turpis.
                    Vestibulum neque nisl, hendrerit at felis eget, iaculis
                    eleifend erat. Maecenas tortor odio, sodales elementum purus
                    sed, semper sodales velit. Suspendisse risus sem, laoreet ut
                    mi eu, laoreet fermentum dolor. Vivamus lobortis tellus eu
                    odio efficitur, eu tempus lectus fermentum. Pellentesque
                    vitae mauris pellentesque, cursus elit sed, ultrices libero.
                    Nulla facilisi. Donec dictum convallis varius. Duis vitae
                    ligula quis orci placerat efficitur quis id dui. Morbi vel
                    est massa. Curabitur sed facilisis purus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. In sed lorem vel
                    nulla eleifend consequat. Vivamus pulvinar bibendum arcu eu
                    hendrerit.
                </p>
                <p className="text-gray-600">
                    Pellentesque consequat felis et orci vestibulum, ullamcorper
                    dapibus orci dictum. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    volutpat nisl a sem semper, a congue dolor sagittis. Etiam
                    eu quam nunc. Donec consequat, risus ut fringilla accumsan,
                    dui tellus rhoncus ex, et consectetur odio eros a nisl.
                    Nulla commodo tincidunt tellus, non luctus nibh efficitur
                    ac. Donec volutpat dui ut dui consectetur, vitae dictum nibh
                    laoreet.
                </p>
            </div>
            <div className="m-10 mt-0 overflow-hidden rounded-xl bg-slate-50 p-10 shadow">
                <h1 className="mb-4 inline-block border-b border-orange-300 pr-10 pb-4 font-black">
                    See more here
                </h1>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris facilisis tincidunt tortor non molestie. Morbi
                    eleifend orci vitae mattis lobortis. Nunc mauris ipsum,
                    sagittis sed sapien ac, porttitor fermentum turpis.
                    Vestibulum neque nisl, hendrerit at felis eget, iaculis
                    eleifend erat. Maecenas tortor odio, sodales elementum purus
                    sed, semper sodales velit. Suspendisse risus sem, laoreet ut
                    mi eu, laoreet fermentum dolor. Vivamus lobortis tellus eu
                    odio efficitur, eu tempus lectus fermentum. Pellentesque
                    vitae mauris pellentesque, cursus elit sed, ultrices libero.
                    Nulla facilisi. Donec dictum convallis varius. Duis vitae
                    ligula quis orci placerat efficitur quis id dui. Morbi vel
                    est massa. Curabitur sed facilisis purus. Lorem ipsum dolor
                    sit amet, consectetur adipiscing elit. In sed lorem vel
                    nulla eleifend consequat. Vivamus pulvinar bibendum arcu eu
                    hendrerit.
                </p>
            </div>
        </div>
    );
};

export default Home;
