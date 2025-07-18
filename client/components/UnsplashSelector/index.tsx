import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
    ChangeEvent,
    MouseEventHandler,
    UIEvent,
    useEffect,
    useState,
} from "react";

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
    const [searchTerm, setSearchTerm] = useState<string>("");

    const fetchImages = async (page: number) => {
        setLoading(true);

        setTimeout(async () => {
            const response = searchTerm
                ? await useApi({
                      route: `/unsplash/search?keyword=${searchTerm}&page=${page}`,
                      requestType: "GET",
                  })
                : await useApi({
                      route: `/unsplash/get?page=${page}`,
                      requestType: "GET",
                  });

            if (response?.data) {
                const newResult = result.concat(...response.data.results);
                setResult(newResult);
            }
        }, 500);
    };

    useEffect(() => {
        setLoading(true);
        const getData = setTimeout(() => {
            fetchImages(1);
        }, 1000);

        return () => clearTimeout(getData);
    }, [searchTerm]);

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

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setResult([]);
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            <div className="col-span-2 mx-1 mb-2">
                <Input
                    label="Search"
                    type="text"
                    placeholder="Background, abstract, people..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
            </div>
            <div
                className="-mx-8 grid h-128 grid-cols-2 gap-2 overflow-y-scroll px-8"
                onScroll={handleScroll}>
                {result.map((str) => (
                    <div className="m-1 h-40 cursor-pointer rounded-lg bg-gray-500 hover:ring hover:ring-orange-500">
                        <img
                            src={str?.urls.regular}
                            onClick={onImageClick}
                            className="h-full w-full rounded-lg bg-cover object-cover transition-all hover:opacity-70"
                        />
                    </div>
                ))}
                {loading && (
                    <div className="col-span-2 my-4 mb-8 flex w-full items-center justify-center text-gray-500">
                        <FontAwesomeIcon
                            icon={faCircleNotch}
                            className="h-4 animate-spin"
                        />
                        <p className="m-0 ml-2">Loading</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UnsplashSelector;
