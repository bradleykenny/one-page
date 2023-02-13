import axios, { AxiosRequestConfig } from "axios";
import { getServerSession } from "next-auth";

import { authOptions } from "@src/pages/api/auth/[...nextauth]";

const get = async (ctx, path: string, config?: AxiosRequestConfig) => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const session = await getServerSession(ctx.req, ctx.res, authOptions);
    const { token } = session["token"];

    let headers = {};
    if (token) {
        headers = {
            Authorization: `Bearer ${token}`,
        };
    }

    try {
        const res = await axios.get(apiUrl.concat(path), { headers });
        return res;
    } catch (e) {
        console.error(e);
    }
};

export default {
    get,
};
