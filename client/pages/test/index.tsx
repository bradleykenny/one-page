import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import Combobox from "@src/components/Combobox";
import Input from "@src/components/Input";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";
import Head from "next/head";
import { useState } from "react";

const Test = () => {
    const [checked, setChecked] = useState(false);

    return (
        <div>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <div className="min-h-screen bg-gray-200">
                <Navbar activeTab="Projects" />
                <div className="pt-24">
                    <Sidebar />
                    <div className="z-0 mx-80 flex flex-col gap-4 rounded-lg bg-white p-6 shadow">
                        <Combobox
                            items={[
                                { label: "one", value: undefined },
                                { label: "two", value: undefined },
                                { label: "three", value: undefined },
                                { label: "four", value: undefined },
                                { label: "five", value: undefined },
                                { label: "six", value: undefined },
                                { label: "seven", value: undefined },
                                { label: "eight", value: undefined },
                            ]}
                            onClose={() => {
                                
                            }}
                        />
                        <Input
                            type="text"
                            label="Name"
                            placeholder="John Smith"
                        />
                        <Input
                            type="text"
                            label="Address"
                            placeholder="123 Example Street, STA"
                        />
                        <Input
                            type="text"
                            label="Information"
                            placeholder="Some more"
                        />
                        <Checkbox
                            checked={checked}
                            onClick={() => setChecked(!checked)}
                        />
                        <div className="grid grid-cols-4 gap-x-4">
                            <Button label="Solid" variant="solid" />
                            <Button label="Soft" variant="soft" />
                            <Button label="Ghost" variant="ghost" />
                            <Button label="Plain" variant="plain" />
                        </div>
                        <div className="flex">
                            <Button label="Submit" variant="solid" />
                        </div>
                    </div>
                    <SidebarInfo />
                </div>
            </div>
        </div>
    );
};

export default Test;
