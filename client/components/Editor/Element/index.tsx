const Element = ({ attributes, children, element }) => {
    switch (element.type) {
        case "heading":
            return <h1 {...attributes}>{children}</h1>;
        default:
            return <p {...attributes}>{children}</p>;
    }
};

export default Element;
