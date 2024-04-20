import { IconDefinition, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    label: string;
    icon?: IconDefinition;
}

const Badge = (props: Props) => {
    const { label, icon } = props;

    if (!label) {
        return null;
    }

    return (
        <div className="flex items-center rounded-full border border-gray-300 bg-gray-200 py-1 px-2 pl-1 text-sm text-gray-600 shadow-sm">
            {icon ? (
                <FontAwesomeIcon
                    icon={icon}
                    className="mx-2 h-4 w-4 text-gray-500"
                />
            ) : null}
            {label}
        </div>
    );
};

export default Badge;
