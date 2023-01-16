interface Props {
    children: JSX.Element;
    visible: boolean;
}

const Modal = (props: Props) => {
    const { children, visible } = props;

    if (!visible) {
        return null;
    }

    return (
        <div className="bg-black/50 fixed m-auto z-50 w-full p-4 overflow-x-hidden overflow-y-auto inset-0 h-full">
            <div className="relative bg-white rounded-xl shadow md:w-2/3 md:max-w-xl w-full h-auto mx-auto p-8 mt-24">
                {children}
            </div>
        </div>
    );
};

export default Modal;
