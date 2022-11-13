interface Props {
    children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
    const { children } = props;

    return (
        <div className="shadow-sm bg-white w-6/12 mx-auto rounded-lg px-8 py-6 hover:shadow-md transition ease-in-out duration-400">
            {children}
        </div>
    );
};

export default Card;
