const custom500 = () => {
    return (
        <div className="h-full w-full bg-amber-100 items-center flex flex-col justify-center text-center">
            <style global jsx>{`
                html,
                body,
                body > div:first-child,
                div#__next,
                div#__next > div {
                    height: 100%;
                }
            `}</style>
            <h1 className="text-massive absolute z-0 text-amber-50">404</h1>
            <div className="z-10">
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-orange-500">
                Uh oh...
            </h1>
            <p className="text-3xl">An error has occurred</p>
            </div>
        </div>
    );
};

export default custom500;
