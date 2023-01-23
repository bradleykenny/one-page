import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";
import { useRouter } from "next/router";

import { faClose, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "@src/components/Button";
import Input from "@src/components/Input";
import Modal from "@src/components/Modal";
import Select from "@src/components/Select";
import UnsplashSelector from "@src/components/UnsplashSelector";

import useApi from "@src/hooks/useApi";
import ImageSelector from "@src/components/ImageSelector";

interface Props {
    showModal: boolean;
    handleShowModal: MouseEventHandler<HTMLDivElement>;
}

const CreateProjectModal = (props: Props) => {
    const { showModal, handleShowModal } = props;

    const router = useRouter();

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [showImageChooser, setShowImageChooser] = useState(false);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleDescriptionChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setDescription(e.target.value);
    };

    const handleImageSelect = (e: MouseEvent<HTMLImageElement>) => {
        setImageUrl(e.currentTarget.src);
        setShowImageChooser(false);
    };

    const handleSubmit = async () => {
        const response = await useApi("project", "POST", {
            name,
            description,
            imageUrl,
        });

        const { id } = response.data;
        if (response && id) {
            router.push(`/projects/${id}`);
        }
    };

    const handleImageChooseClick = () => {
        setShowImageChooser(!showImageChooser);
    };

    return (
        <Modal visible={showModal}>
            {!showImageChooser ? (
                <div className="flex flex-col">
                    <div className="mb-4 flex flex-row items-center justify-between border-b pb-4">
                        <h2 className="my-0">Create a new project</h2>
                        <div
                            className="top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-gray-200 text-gray-500 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-gray-300"
                            onClick={handleShowModal}
                        >
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                    <p className="mb-2">
                        To get started, we just need a few pieces of
                        information.
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-2 flex flex-col gap-4">
                            <Input
                                type="text"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="What do you want to call it?"
                                label="Name"
                            />
                            <Input
                                type="text"
                                value={description}
                                onChange={handleDescriptionChange}
                                placeholder="What's it about?"
                                label="Description"
                            />
                            <ImageSelector
                                value={imageUrl}
                                onClick={handleImageChooseClick}
                            />
                            <Select
                                options={["Public", "Private"]}
                                label="Access"
                            />
                            <Button label="Get started" variant="solid" />
                        </div>
                    </form>
                </div>
            ) : (
                <div className="-mb-8 flex flex-col">
                    <div className="mb-4 flex w-full items-center self-start border-b pb-4">
                        <div
                            className="top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-gray-200 text-gray-500 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-gray-300"
                            onClick={handleImageChooseClick}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </div>
                        <h2 className="m-0 ml-4">Select image</h2>
                    </div>
                    <UnsplashSelector onImageClick={handleImageSelect} />
                </div>
            )}
        </Modal>
    );
};

export default CreateProjectModal;
