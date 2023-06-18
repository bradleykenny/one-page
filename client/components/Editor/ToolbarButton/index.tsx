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
            className={`mr-1 h-10 self-center rounded bg-white px-3 ${
                isSelected
                    ? "bg-primary-200 hover:bg-primary-300"
                    : "bg-white hover:bg-primary-100"
            }`}
        >
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

export default ToolbarButton;
