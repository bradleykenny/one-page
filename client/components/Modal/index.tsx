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
        <div className="fixed inset-0 z-50 m-auto h-full w-full overflow-y-auto overflow-x-hidden bg-black/50 p-4">
            <div className="absolute left-1/2 top-1/2 h-auto w-full -translate-y-2/4 -translate-x-2/4 rounded-xl bg-white p-8 shadow md:w-2/3 md:max-w-xl max-h-[90%]">
                {children}
            </div>
        </div>
    );
};

export default Modal;
