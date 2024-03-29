import Head from "next/head";

import Input from "@src/components/Input";
import Layout from "@src/components/Layout";

interface Props {}

const Search = (props: Props) => {
    return (
        <div>
            <Head>
                <title>one:page | search</title>
            </Head>
            <Layout>
                <Input
                    type="text"
                    placeholder="What are you looking for?"
                    inputSize="xl"
                    className="w-full py-4 px-6"
                />
            </Layout>
        </div>
    );
};

export default Search;
