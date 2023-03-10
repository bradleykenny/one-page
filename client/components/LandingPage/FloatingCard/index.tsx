import { faAnchor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createRef, useEffect } from "react";

interface Props {
    title: string;
    description: string;
}

const FloatingCard = (props: Props) => {
    const { title, description } = props;

    const ref = createRef<HTMLDivElement>();

    let bounds;

    const rotateToMouse = (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const leftX = mouseX - bounds.x;
        const topY = mouseY - bounds.y;
        const center = {
            x: leftX - bounds.width / 2,
            y: topY - bounds.height / 2,
        };
        const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

        ref.current.style.transform = `
    scale3d(1.05, 1.05, 1.05)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
    };

    useEffect(() => {
        bounds = ref.current.getBoundingClientRect();

        ref.current.addEventListener("mouseenter", () => {
            document.addEventListener("mousemove", rotateToMouse);
        });

        ref.current.addEventListener("mouseleave", () => {
            document.removeEventListener("mousemove", rotateToMouse);
            ref.current.style.transform = "";
            ref.current.style.background = "";
        });
    });

    return (
        <div
            ref={ref}
            className="mr-8 inline-block w-[22rem] justify-center self-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-300 p-1 shadow transition-all ease-in-out last:mr-0 hover:shadow-xl"
            style={{
                transitionDuration: "300ms",
                transitionProperty: "transform, box-shadow",
                transitionTimingFunction: "ease-out",
                transform: "rotate3d(0)",
            }}>
            <div className="overflow-hidden rounded-xl bg-slate-50 p-6 shadow-inner ">
                <div className="-ml-10 -mt-36 mb-4 h-96 w-96 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                    <div className="h-72 w-72 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                        <div className="h-48 w-48 rounded-full bg-indigo-600/30 p-12 shadow-lg">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-indigo-600/30 shadow-lg">
                                <FontAwesomeIcon
                                    icon={faAnchor}
                                    className="h-10 text-indigo-800 drop-shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="m-0 text-gray-700">{title}</h1>
                <p className="mb-0 whitespace-normal text-gray-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FloatingCard;
