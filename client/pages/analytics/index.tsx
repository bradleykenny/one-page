import ChartCard from "@src/components/Data/ChartCard";
import StatCard from "@src/components/Data/StatCard";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";

const Analytics = () => {
    return (
        <div className="min-h-screen bg-gray-200">
            <div className="pt-0">
                <Sidebar />
                <div className="ml-80 mr-8 pb-6 pt-4">
                    <h1 className="p-4 pl-8">My Data</h1>
                    <div className="grid grid-cols-2 gap-4">
                        <ChartCard />
                        <StatCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
