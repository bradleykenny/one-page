import { useEffect, useState } from "react";
import useApi from "@src/hooks/useApi";
import { UnsplashGetPhotosResponse } from "dto/Unsplash";

const UnsplashSelector = () => {
    const [result, setResult] = useState<UnsplashGetPhotosResponse[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await useApi(`/unsplash/get`, "GET");
            if (response?.data) {
                setResult(response.data.results);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="grid grid-cols-2 gap-4 h-96 overflow-y-scroll">
            {result.map((str) => (
                <div className="h-40 bg-black rounded-lg cursor-pointer">
                    <img
                        src={str?.urls.regular}
                        className="bg-cover rounded-lg h-full w-full object-cover transition-all hover:opacity-75"
                    />
                </div>
            ))}
        </div>
    );
};

export default UnsplashSelector;
