interface Props {
    isSelected?: boolean;
    title: string;
}

const NavLink = (props: Props) => {
    const { 
        isSelected,
        title
    } = props;

    const sharedStyles = "px-4 py-2 inline-block rounded-lg mr-4 cursor-pointer"
    
    if (isSelected) {
        return (
            <p className={`${sharedStyles} bg-white bg-opacity-70 drop-shadow text-indigo-800`}>{ title }</p>
        );
    }
    
    return (
        <p className={`${sharedStyles} hover:bg-white hover:bg-opacity-70 text-white text-opacity-70 hover:text-indigo-800 hover:text-opacity-100`}>{ title }</p>
    );
}

export default NavLink;
