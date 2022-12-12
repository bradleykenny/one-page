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
                className={`bg-white mr-1 px-3 h-10 self-center rounded ${
                    isSelected
                        ? "bg-slate-100 hover:bg-slate-200"
                        : "bg-white hover:bg-slate-100"
                }`}>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default ToolbarButton;
