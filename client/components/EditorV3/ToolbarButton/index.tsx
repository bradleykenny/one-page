import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    onClick: () => void;
    isSelected: boolean;
    icon: IconProp;
}

const ToolbarButton = (props: Props) => {
    const { onClick, isSelected, icon } = props;

    return (
        <button
            onClick={onClick}
            className={`bg-white mr-1 px-3 h-10 self-center rounded ${
                isSelected
                    ? "bg-orange-200 hover:bg-orange-300"
                    : "bg-white hover:bg-orange-100"
            }`}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default ToolbarButton;
