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
            <div className="relative mx-auto mt-24 h-auto w-full rounded-xl bg-white p-8 shadow md:w-2/3 md:max-w-xl">
                {children}
            </div>
        </div>
    );
};

export default Modal;
