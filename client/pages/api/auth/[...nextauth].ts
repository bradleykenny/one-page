import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    // Configure one or more authentication providers
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter email",
                },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Enter Password",
                },
            },
            authorize: async (credentials, req) => {
                try {
                    const { email, password } = credentials;
                    const res = await fetch(
                        "http://localhost:5001/api/v1/auth/login",
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                email,
                                password,
                            }),
                        }
                    );

                    const token = await res.json();
                    console.log("token", token);
                    if (res.ok && token) {
                        return token;
                    }

                    return null;
                } catch (e) {
                    console.error(e);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session(token) {
            return token;
        },
    },
    pages: {
        signIn: "/login",
        signOut: "/login",
    },
};

export default NextAuth(authOptions);
