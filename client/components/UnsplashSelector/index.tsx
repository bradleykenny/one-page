import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, UIEvent, useEffect, useState } from "react";

import useApi from "@src/hooks/useApi";

import { UnsplashGetPhotosResponse } from "@src/models/dto/Unsplash";
import Input from "../Input";

interface Props {
    onImageClick: MouseEventHandler<HTMLImageElement>;
}

const UnsplashSelector = (props: Props) => {
    const { onImageClick } = props;

    const [result, setResult] = useState<UnsplashGetPhotosResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchImages = async (page: number) => {
        setLoading(true);

        setTimeout(async () => {
            const response = await useApi(`/unsplash/get?page=${page}`, "GET");
            if (response?.data) {
                const newResult = result.concat(...response.data.results);
                setResult(newResult);
            }

            setLoading(false);
        }, 500);
    };

    useEffect(() => {
        fetchImages(1);
    }, []);

    const getMoreImages = async () => {
        const currentPage = result.length / 10 + 1;
        fetchImages(currentPage + 1);
    };

    const handleScroll = (e: UIEvent<HTMLDivElement>) => {
        const isBottom =
            e.currentTarget.scrollHeight - e.currentTarget.scrollTop ===
            e.currentTarget.clientHeight;

        if (isBottom) {
            getMoreImages();
        }
    };

    return (
        <div
            className="grid grid-cols-2 gap-2 h-128 overflow-y-scroll -mx-8 px-8"
            onScroll={handleScroll}>
            <div className="col-span-2 mx-1 mb-2">
                <Input
                    label="Search"
                    type="text"
                    placeholder="Background, abstract, people..."
                />
            </div>
            {result.map((str) => (
                <div className="h-40 bg-gray-500 rounded-lg cursor-pointer m-1 hover:ring hover:ring-orange-500">
                    <img
                        src={str?.urls.regular}
                        onClick={onImageClick}
                        className="bg-cover rounded-lg h-full w-full object-cover transition-all hover:opacity-70"
                    />
                </div>
            ))}
            {loading && (
                <div className="col-span-2 flex w-full justify-center items-center my-4 mb-8 text-gray-500">
                    <FontAwesomeIcon
                        icon={faCircleNotch}
                        className="animate-spin h-4"
                    />
                    <p className="m-0 ml-2">Loading</p>
                </div>
            )}
        </div>
    );
};

export default UnsplashSelector;
