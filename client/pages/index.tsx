import { faAnchor, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Gloria_Hallelujah, Unbounded } from "@next/font/google";
import type { NextPage } from "next";
import Image from "next/image";
import { cn } from "utils";

import FloatingCard from "@src/components/LandingPage/FloatingCard";

import ProjectsImage from "../public/landingPage_projects.png";

const unbounded = Unbounded({ weight: "700", subsets: ["latin"] });
const gloriaHellelujah = Gloria_Hallelujah({
    weight: "400",
    subsets: ["latin"],
});

const Home: NextPage = () => {
    return (
        <div className="flex w-screen flex-col bg-gradient-to-b from-slate-100 to-slate-300">
            <h1
                className={cn(
                    "mx-auto mt-24 h-auto py-4 text-center text-4xl font-black text-slate-500 drop-shadow-lg",
                    unbounded.className
                )}>
                ur:page
            </h1>
            <p className="mt-6 mb-16 text-center text-7xl font-black text-gray-700 drop-shadow-lg">
                {"All "}
                <span className="bg-gradient-to-r from-orange-500 to-indigo-500 bg-clip-text text-transparent">
                    your pages
                </span>
                .
                <br />
                All together.
            </p>
            <a
                className="mx-auto mb-24 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-700 px-8 py-4 text-white shadow-lg shadow-indigo-200 transition-all ease-in-out hover:to-indigo-800 hover:shadow-xl group"
                href="/login">
                Let's go
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 transition-all group-hover:translate-x-1" />
            </a>
            <div className="no-scrollbar mb-0 overflow-scroll whitespace-nowrap p-10 pb-10">
                {[1, 2, 3, 4, 5].map((n) => (
                    <FloatingCard
                        title="Something"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dapibus, nisi eu fermentum eleifend, velit sapien aliquet neque, at ullamcorper arcu felis ac nisl."
                    />
                ))}
            </div>
            <div className="m-10 mt-0 grid grid-cols-2 overflow-hidden rounded-xl shadow">
                <div className="flex flex-col justify-center bg-white p-10">
                    <h1>Heading</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris facilisis tincidunt tortor non molestie. Morbi
                        eleifend orci vitae mattis lobortis. Nunc mauris ipsum,
                        sagittis sed sapien ac, porttitor fermentum turpis.
                        Vestibulum neque nisl, hendrerit at felis eget, iaculis
                        eleifend erat.
                    </p>
                </div>
                <div className="bg-indigo-400 pt-16 pl-16">
                    <Image
                        src={ProjectsImage}
                        alt="Projects page screenshot"
                        className="rounded-tl-lg shadow-lg"
                    />
                </div>
                <div className="bg-orange-400 pt-16 pr-16">
                    <Image
                        src={ProjectsImage}
                        alt="Projects page screenshot"
                        className="rounded-tr-lg shadow-lg"
                    />
                </div>
                <div className="flex flex-col justify-center bg-white p-10">
                    <h1>Heading</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris facilisis tincidunt tortor non molestie. Morbi
                        eleifend orci vitae mattis lobortis. Nunc mauris ipsum,
                        sagittis sed sapien ac, porttitor fermentum turpis.
                        Vestibulum neque nisl, hendrerit at felis eget, iaculis
                        eleifend erat.
                    </p>
                </div>
                <div className="flex flex-col justify-center bg-white p-10">
                    <h1>Heading</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Mauris facilisis tincidunt tortor non molestie. Morbi
                        eleifend orci vitae mattis lobortis. Nunc mauris ipsum,
                        sagittis sed sapien ac, porttitor fermentum turpis.
                        Vestibulum neque nisl, hendrerit at felis eget, iaculis
                        eleifend erat.
                    </p>
                </div>
                <div className="bg-indigo-400 pt-16 pl-16">
                    <Image
                        src={ProjectsImage}
                        alt="Projects page screenshot"
                        className="rounded-tl-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="mt-10 mb-24">
                <p className="text-center text-xl font-bold text-gray-700">
                    Thanks 👋
                </p>
                <p
                    className={cn(
                        "-mt-2 -ml-4 -rotate-6 text-center text-xl font-bold text-gray-700",
                        gloriaHellelujah.className
                    )}>
                    Brad
                </p>
            </div>
        </div>
    );
};

export default Home;
