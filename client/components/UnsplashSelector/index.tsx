import { MouseEventHandler, useEffect, useState } from "react";

import useApi from "@src/hooks/useApi";

import { UnsplashGetPhotosResponse } from "@src/models/dto/Unsplash";

interface Props {
    onImageClick: MouseEventHandler<HTMLImageElement>;
}

const UnsplashSelector = (props: Props) => {
    const { onImageClick } = props;

    const [result, setResult] = useState<UnsplashGetPhotosResponse[]>([]);

    useEffect(() => {
        const fetchImages = async () => {
            const response = await useApi(`/unsplash/get`, "GET");
            if (response?.data) {
                setResult(response.data.results);
            }
        };

        fetchImages();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-2 h-96 overflow-y-scroll">
            {result.map((str) => (
                <div className="h-40 bg-black rounded-lg cursor-pointer m-1 hover:ring hover:ring-indigo-500">
                    <img
                        src={str?.urls.regular}
                        onClick={onImageClick}
                        className="bg-cover rounded-lg h-full w-full object-cover transition-all hover:opacity-90"
                    />
                </div>
            ))}
        </div>
    );
};

export default UnsplashSelector;
