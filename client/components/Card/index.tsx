interface Props {
    children: JSX.Element | JSX.Element[];
}

const Card = (props: Props) => {
    const { children } = props;

    return (
        <div className="duration-400 mx-auto overflow-hidden rounded-lg bg-white px-8 py-6 shadow transition ease-in-out hover:shadow-md">
            {children}
        </div>
    );
};

export default Card;
