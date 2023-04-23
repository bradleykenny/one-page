import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createRef, useEffect } from "react";

interface Props {
    title: string;
    description: string;
}

const FloatingCard = (props: Props) => {
    const { title, description } = props;

    return (
        <div className="mr-8 inline-block w-[22rem] justify-center self-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-300 p-1 shadow transition-all ease-in-out last:mr-0 hover:shadow-xl">
            <div className="overflow-hidden rounded-xl bg-white p-6">
                <div className="-ml-10 -mt-36 mb-4 h-96 w-96 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                    <div className="h-72 w-72 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                        <div className="h-48 w-48 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600/30 shadow-lg">
                                <FontAwesomeIcon
                                    icon={faBoltLightning}
                                    className="h-10 text-indigo-800 drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="m-0 text-gray-700">{title}</h1>
                <p className="mb-0 whitespace-normal text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FloatingCard;
