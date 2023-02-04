import { faClose, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import { ChangeEvent, MouseEvent, MouseEventHandler, useState } from "react";

import Button from "@src/components/Button";
import ImageSelector from "@src/components/ImageSelector";
import Input from "@src/components/Input";
import Modal from "@src/components/Modal";
import Select from "@src/components/Select";
import UnsplashSelector from "@src/components/UnsplashSelector";
import useApi from "@src/hooks/useApi";

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
        if (!!name && !!description) {
            const response = await useApi("project", "POST", {
                name,
                description,
                imageUrl,
            });

            const { id } = response.data;
            if (response && id) {
                router.push(`/projects/${id}`);
            }
        }
    };

    const handleImageChooseClick = () => {
        setShowImageChooser(!showImageChooser);
    };

    const handleImageDestroyClick = () => {
        setImageUrl("");
    };

    return (
        <Modal visible={showModal}>
            {!showImageChooser ? (
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between border-b pb-4">
                        <h2 className="my-0">Create a new project</h2>
                        <div
                            className="top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-gray-200 text-gray-500 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-gray-300"
                            onClick={handleShowModal}>
                            <FontAwesomeIcon icon={faClose} />
                        </div>
                    </div>
                    <div className="-mx-1 flex h-96 flex-col gap-4 overflow-y-scroll py-4 px-1">
                        <p className="m-0">
                            To get started, we just need a few pieces of
                            information.
                        </p>
                        <Input
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                            placeholder="What do you want to call it?"
                            label="Name"
                            required
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
                            onDestroy={handleImageDestroyClick}
                        />
                        <Select
                            options={["Public", "Private"]}
                            label="Access"
                        />
                    </div>
                    <div className="flex justify-end gap-2 border-t pt-4">
                        <Button label="More info" variant="soft" />
                        <Button
                            label="Get started"
                            variant="solid"
                            onClick={handleSubmit}
                        />
                    </div>
                </div>
            ) : (
                <div className="-mb-8 flex flex-col">
                    <div className="mb-4 flex w-full items-center self-start border-b pb-4">
                        <div
                            className="top-4 flex h-6 w-6 cursor-pointer items-center justify-center rounded-lg bg-gray-200 text-gray-500 hover:bg-indigo-200 hover:text-indigo-500 focus:bg-gray-300"
                            onClick={handleImageChooseClick}>
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
