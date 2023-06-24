import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import Card from "../Card";

const RecentPages = () => {
    return (
        <div className="flex gap-4 overflow-scroll pb-4">
            <div className="w-full">
                    <Link href={"/pages/new"}>
                        <div className="group flex h-full w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-slate-400 bg-gradient-to-br from-slate-50 to-slate-200 text-gray-800 shadow transition-all ease-in-out hover:border-0 hover:from-indigo-500 hover:to-orange-500 hover:text-white hover:shadow-lg">
                            <p className="text-md group m-0 font-semibold">
                                New page
                            </p>
                            <span className="ml-2 transition-all group-hover:translate-x-1">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </span>
                        </div>
                    </Link>
            </div>
            <div className="w-60">
                <Card>
                    <h2>Hello</h2>
                </Card>
            </div>
            <div className="w-60">
                <Card>
                    <h2>Hello</h2>
                </Card>
            </div>
            <div className="w-60">
                <Card>
                    <h2>Hello</h2>
                </Card>
            </div>
            <div className="w-60">
                <Card>
                    <h2>Hello</h2>
                </Card>
            </div>
            <div className="w-60">
                <Card>
                    <h2>Hello</h2>
                </Card>
            </div>
        </div>
    );
};

export default RecentPages;
