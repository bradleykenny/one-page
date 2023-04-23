import Head from "next/head";

import { useState } from "react";

import Button from "@src/components/Button";
import Checkbox from "@src/components/Checkbox";
import Combobox from "@src/components/Combobox";
import Input from "@src/components/Input";
import Layout from "@src/components/Layout";
import Navbar from "@src/components/NavBar";
import Sidebar from "@src/components/Sidebar";
import SidebarInfo from "@src/components/SidebarInfo";

const Test = () => {
    const [checked, setChecked] = useState(false);

    const comboboxData = [
        { value: "1", label: "Wade Cooper" },
        { value: "2", label: "Arlene Mccoy" },
        { value: "3", label: "Devon Webb" },
        { value: "4", label: "Tom Cook" },
        { value: "5", label: "Tanya Fox" },
        { value: "6", label: "Hellen Schmidt" },
    ];
    const [cbSelection, setCbSelection] = useState(undefined);
    const handleCbChange = (item: any) => {
        setCbSelection(item);
    };

    return (
        <div>
            <Head>
                <title>one:page | home</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <div className="z-0 flex flex-col gap-4 rounded-lg bg-white p-6 shadow">
                    <Input type="text" label="Name" placeholder="John Smith" />
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
                    <Combobox
                        value={cbSelection}
                        items={comboboxData}
                        onChange={handleCbChange}
                    />
                </div>
            </Layout>
        </div>
    );
};

export default Test;
