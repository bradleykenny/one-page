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
        "px-3 py-1 inline-block rounded-lg cursor-pointer mb-0 border transition ease-in-out shadow float-right";

    const handleClick = () => {
        localStorage.removeItem("token");
        router.push("/login");
    };

    return (
        <a
            className={`${sharedStyles} hover:bg-indigo-50 hover:border-indigo-200 focus:bg-indigo-100 text-indigo-800 flex items-center`}
            href="#"
            onClick={handleClick}
        >
            <div className="rounded-md bg-indigo-200 p-1 -m-2 flex mr-2">
                <FontAwesomeIcon
                    icon={faUser}
                    className="inline-block self-center justify-self-center h-[18px] w-[18px]"
                />
            </div>
            <p className="inline-block mb-0">{title}</p>
        </a>
    );
};

export default NavProfile;
