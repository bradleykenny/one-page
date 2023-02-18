import { useRouter } from "next/router";

import usePage from "@src/hooks/usePage";
import Viewer from "@src/components/Viewer";

const EditPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const { loading, page, project } = usePage(id as string);

    return (
        <div className="bg-gray-200">
            <div className="mx-80">{!loading && <Viewer page={page} />}</div>
        </div>
    );
};

export async function getServerSideProps(ctx) {
    return {
        props: {}
    }   
}

export default EditPage;
