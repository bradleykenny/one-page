import { faArrowRight, faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCompletion } from "ai/react";

const AiChat = () => {
    const { completion, input, isLoading, handleInputChange, handleSubmit } =
        useCompletion({
            api: `${process.env.NEXT_PUBLIC_API_URL}/ai/message`,
        });

    return (
        <div className="fixed bottom-0 right-[22rem] left-80 rounded-t-lg border-purple-700 bg-gradient-to-br from-indigo-200 to-pink-200 px-4 pt-3 pb-0 shadow backdrop-blur-3xl">
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
                    <div className="absolute right-6 top-6 rounded-[5px] bg-gradient-to-br from-indigo-500 to-pink-400 p-0.5">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="rounded-[3px] bg-white py-1 px-3 text-indigo-500 hover:bg-transparent hover:text-white">
                            <FontAwesomeIcon
                                icon={isLoading ? faHourglass1 : faArrowRight}
                            />
                        </button>
                    </div>
                </div>
                <div className="max-h-72 w-full overflow-scroll whitespace-pre-wrap px-2 pt-4 pb-6">
                    {completion}
                    {isLoading ? (
                        <FontAwesomeIcon icon={faHourglass1} opacity={0.3} />
                    ) : null}
                </div>
            </form>
        </div>
    );
};

export default AiChat;
