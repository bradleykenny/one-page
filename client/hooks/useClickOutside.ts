import { useEffect, useRef } from "react";

const useClickOutside = (callback: Function) => {
    const ref = useRef(null);
    const refCb = useRef(callback);

    useEffect(() => {
        const handler = (event) => {
            const element = ref.current;
            if (element && !element.contains(event.target)) {
                refCb.current(event);
            }
        };

        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return ref;
};

export default useClickOutside;
