import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCompletion } from "ai/react";

import { useState } from "react";

const AiChat = () => {
    const {
        completion,
        input,
        stop,
        isLoading,
        handleInputChange,
        handleSubmit,
    } = useCompletion({
        api: `${process.env.NEXT_PUBLIC_API_URL}/ai/message`,
    });

    const [open, setOpen] = useState(true);

    return (
        <div className="fixed bottom-0 right-[22rem] left-80 rounded-t-md border-purple-700 bg-gradient-to-br from-indigo-100 via-blue-100 to-green-100 py-3 px-4 shadow">
            <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                    <div className="mt-1 w-full rounded-lg bg-gradient-to-br from-indigo-500 to-pink-400 p-0.5">
                        <input
                            type="text"
                            value={input}
                            onChange={handleInputChange}
                            placeholder="Need help? ✨"
                            className="w-full rounded-md border-none bg-white py-3 px-4 focus:outline-none focus:ring-0"
                        />
                    </div>
                    {/* <button
                        className="bg-white px-4"
                        onClick={() => setOpen((state) => !state)}>
                        <FontAwesomeIcon
                            icon={open ? faChevronDown : faChevronUp}
                            className="text-gray-500"
                        />
                    </button> */}
                </div>
                <div
                    className="max-h-72 w-full overflow-scroll whitespace-pre-wrap px-2 pt-4 pb-3"
                    style={{
                        display: !open && "none",
                    }}>
                    {completion}
                </div>
            </form>
        </div>
    );
};

export default AiChat;
