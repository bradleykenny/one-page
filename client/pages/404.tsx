const custom404 = () => {
    return (
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
                <h1 className="bg-gradient-to-r from-indigo-500 to-orange-500 bg-clip-text text-8xl font-extrabold text-transparent">
                    Uh oh!
                </h1>
                <p className="text-3xl opacity-50">An error has occurred</p>
            </div>
        </div>
    );
};

export default custom404;
