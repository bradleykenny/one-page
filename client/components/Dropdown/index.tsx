interface IProps {
    children: JSX.Element | JSX.Element[];
}

const Dropdown = (props: IProps) => {
    const { children } = props;
    
    return <div>{children}</div>;
};

export default Dropdown;
