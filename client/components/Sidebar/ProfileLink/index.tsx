import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";

import useSessionData from "@src/hooks/useSessionData";

interface Props {}

const ProfileLink = (props: Props) => {
    const { username } = useSessionData();
    const router = useRouter();

    const handleClick = () => {
        localStorage.removeItem("token");
        signOut({ redirect: false });
        router.push("/login");
    };

    return (
        <Link
            className="absolute bottom-0 left-0 right-0.5 ml-auto flex cursor-pointer items-center border border-r-0 bg-white py-4 px-6 text-indigo-800 transition ease-in-out hover:bg-slate-100"
            href="#"
            onClick={handleClick}>
            <div className="-m-2 mr-2 flex rounded-md bg-indigo-200 p-1">
                <FontAwesomeIcon
                    icon={faUser}
                    className="inline-block h-[18px] w-[18px] self-center justify-self-center"
                />
            </div>
            <p className="mb-0 inline-block">{username}</p>
        </Link>
    );
};

export default ProfileLink;
