interface Props {
    children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
    const { children } = props;

    return (
        <div className="shadow bg-white mx-auto rounded-lg px-8 py-6 hover:shadow-md transition ease-in-out duration-400 overflow-hidden">
            {children}
        </div>
    );
};

export default Card;
