import Head from "next/head";

import Layout from "@src/components/Layout";
import Input from "@src/components/Input";

interface Props {
}

const Search = (props: Props) => {
    return (
        <div>
            <Head>
                <title>one:page | search</title>
            </Head>
            <Layout>
                <Input type="text" placeholder="What are you looking for?" inputSize="xl" />
            </Layout>
        </div>
    );
};

export default Search;
