import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Props {
    isSelected?: boolean;
    title: string;
}

const NavProfile = (props: Props) => {
    const { isSelected } = props;

    const [title, setTitle] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("token");
        const decoded = jwt.decode(token);

        setTitle(decoded?.["username"]);
    }, []);

    const router = useRouter();

    const sharedStyles =
        "px-3 py-1 inline-block rounded-lg cursor-pointer mb-0 border transition ease-in-out shadow ml-auto";

    const handleClick = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <a
            className={`${sharedStyles} flex items-center text-indigo-800 hover:border-indigo-200 hover:bg-indigo-50 focus:bg-indigo-100`}
            href="#"
            onClick={handleClick}
        >
            <div className="-m-2 mr-2 flex rounded-md bg-indigo-200 p-1">
                <FontAwesomeIcon
                    icon={faUser}
                    className="inline-block h-[18px] w-[18px] self-center justify-self-center"
                />
            </div>
            <p className="mb-0 inline-block">{title}</p>
        </a>
    );
};

export default NavProfile;
