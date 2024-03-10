import Head from "next/head";

const custom404 = () => {
    return (
        <div>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex h-full w-full flex-col items-center justify-center bg-amber-100 text-center">
                <style global jsx>{`
                    html,
                    body,
                    body > div:first-child,
                    div#__next,
                    div#__next > div {
                        height: 100%;
                    }
                `}</style>
                <h1 className="absolute z-0 text-massive text-amber-50">404</h1>
                <div className="z-10">
                    <h1 className="bg-gradient-to-br from-amber-300 to-amber-600 bg-clip-text font-cursive text-[10rem] font-extrabold text-transparent">
                        Uh oh!
                    </h1>
                    <p className="-mt-10 font-cursive text-4xl opacity-50">
                        An error has occurred
                    </p>
                </div>
            </div>
        </div>
    );
};

export default custom404;
