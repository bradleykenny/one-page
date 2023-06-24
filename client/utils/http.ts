import axios, { AxiosRequestConfig } from "axios";
import { apiVariables } from "config/APIs";
import jwt from "jsonwebtoken";
import { GetServerSidePropsContext } from "next";
import { getServerSession } from "next-auth";

import { authOptions } from "@src/pages/api/auth/[...nextauth]";

interface GetRequestConfig extends AxiosRequestConfig {
    urlVariables?: Record<string, string>;
}

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

async function getApiData<T>(
    context: GetServerSidePropsContext,
    apiSlug: string,
    config?: GetRequestConfig
) {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const session = await getServerSession(
        context.req,
        context.res,
        authOptions
    );
    const { token } = session["token"];

    let headers = {};
    if (token) {
        headers = {
            ...config?.headers,
            Authorization: `Bearer ${token}`,
        };
    }

    const decodedJwt = jwt.decode(token);
    const userId = decodedJwt?.["username"];
    apiSlug = apiSlug.replace(apiVariables.userId, userId);

    // TODO: apply GET params to slug
    // const urlVariables = Object.keys(config.urlVariables);
    // urlVariables?.forEach((variable) => {
    //     // apiSlug.replace(variable, config.urlVariables[variable]);
    // });

    const apiResponse = await axios.get<T>(apiUrl.concat(apiSlug), {
        headers,
        ...config,
    });

    return apiResponse.data;
}

export { get, getApiData };
