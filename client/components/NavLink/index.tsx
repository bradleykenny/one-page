interface Props {
    isSelected?: boolean;
    title: string;
}

const NavLink = (props: Props) => {
    const { 
        isSelected,
        title
    } = props;
    
    if (isSelected) {
        return (
            <div className="px-4 py-2 bg-white bg-opacity-70 inline-block rounded-lg mr-4 drop-shadow">
                <p className="text-indigo-800">{ title }</p>
            </div>
        );
    }
    
    return (
        <div className="px-4 py-2 inline-block rounded-lg mr-4">
            <p className="text-white text-opacity-70">{ title }</p>
        </div>
    );
}

export default NavLink;
