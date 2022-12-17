import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "@src/components/Modal";
import useApi from "@src/hooks/useApi";
import { useRouter } from "next/router";
import { MouseEventHandler, useState } from "react";

interface Props {
    showModal: boolean;
    handleShowModal: MouseEventHandler<HTMLDivElement>;
}

const CreateProjectModal = (props: Props) => {
    const { showModal, handleShowModal } = props;

    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(e.target.value);
    };

    const handleSubmit = async () => {
        const response = await useApi("project", "POST", {
            name,
            description,
        });

        const { id } = response.data;
        if (response && id) {
            // router.push(`/project/${id}`);
            router.push(`/projects`);
        }
    };

    return (
        <Modal visible={showModal}>
            <div className="flex flex-col">
                <div className="flex flex-row justify-between mb-2 items-center">
                    <h2 className="my-0">Create a new project</h2>
                    <div
                        className="flex top-4 bg-gray-200 hover:bg-indigo-200 focus:bg-gray-300 cursor-pointer w-6 h-6 rounded-lg text-gray-500 hover:text-indigo-500 items-center justify-center"
                        onClick={handleShowModal}>
                        <FontAwesomeIcon icon={faClose} />
                    </div>
                </div>
                <p className="mb-2">
                    To get started, we just need a few pieces of information.
                </p>
                <input
                    type="text"
                    value={name}
                    onChange={handleNameChange}
                    className="py-3 px-4 my-2 border rounded-md focus:outline-2 focus:outline-orange-500"
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="py-3 px-4 my-2 border rounded-md focus:outline-2 focus:outline-orange-500"
                    placeholder="Description"
                />
                <button
                    className="p-3 mt-2 bg-orange-500 rounded-md text-white hover:shadow hover:bg-orange-600"
                    onClick={handleSubmit}>
                    Get started
                </button>
            </div>
        </Modal>
    );
};

export default CreateProjectModal;
