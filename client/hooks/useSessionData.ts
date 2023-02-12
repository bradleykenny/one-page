import jwt from "jsonwebtoken";
import { useSession } from "next-auth/react";

const useSessionData = () => {
    const { data, status } = useSession();
    const decoded = jwt.decode(data?.["token"]?.token);

    return {
        username: decoded?.["username"],
        status
    };
};

export default useSessionData;
