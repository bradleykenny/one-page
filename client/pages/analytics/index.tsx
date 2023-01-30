import ChartCard from "@src/components/Data/ChartCard";
import StatCard from "@src/components/Data/StatCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";

const Analytics = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <Navbar activeTab="Projects" />
            <div className="pt-24">
                <Sidebar />
                <div className="mx-80 pb-6">
                    <h1 className="p-4 pl-8">My Data</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <ChartCard />
                        <StatCard />
                    </div>
                </div>
                <SidebarInfo />
            </div>
        </div>
    );
};

export default Analytics;
