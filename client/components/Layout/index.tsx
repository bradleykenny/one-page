import Sidebar from "@src/components/Sidebar";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const Layout = (props: Props) => {
    const { children } = props;

    return (
        <div>
            <div className="fixed h-full w-72">
                <Sidebar />
            </div>
            <div className="ml-72 p-8">{children}</div>
        </div>
    );
};

export default Layout;
