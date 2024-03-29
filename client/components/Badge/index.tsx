import { IconDefinition, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
    label: string;
    icon?: IconDefinition;
}

const Badge = (props: Props) => {
    const { label, icon } = props;

    return (
        <div className="flex items-center rounded-full border border-gray-300 bg-gray-200 py-1 px-2 pl-1 text-sm text-gray-600 shadow-sm">
            {icon ? (
                <div className="mr-2 flex h-5 w-5 items-center justify-center overflow-hidden rounded-full bg-indigo-700">
                    <FontAwesomeIcon
                        icon={icon}
                        className="mt-1 h-4 w-4 text-white"
                    />
                </div>
            ) : null}
            {label}
        </div>
    );
};

export default Badge;
