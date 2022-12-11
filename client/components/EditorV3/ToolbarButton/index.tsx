import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    onClick: () => void;
    isSelected: boolean;
    icon: IconProp;
}

const ToolbarButton = (props: Props) => {
    const {
        onClick,
        isSelected,
        icon
    } = props;

    return (
        <button onClick={onClick}
                className={`bg-white mr-1 px-4 h-12 self-center rounded ${
                    isSelected
                        ? "bg-indigo-100 hover:bg-indigo-200"
                        : "bg-white hover:bg-indigo-100"
                }`}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default ToolbarButton;
