import React from "react";
import { FaArrowTurnDown } from "react-icons/fa6";


export default function RotatingTextButton() {
    return (
        <div className="relative flex items-center justify-center w-40 h-40">
            {/* Rotating Text */}
            <div className="absolute w-32 h-32 animate-spin-slow border border-yellow-500 bg-gray-800 rounded-full py-2">
                <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        id="textPath"
                        d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                        fill="transparent"
                    />
                    <text fontSize="12" className="fill-white font-medium">
                        <textPath href="#textPath" startOffset="0%" className="leading-relaxed text-white">
                            CONTACT ME - CONTACT ME - CONTACT ME -
                        </textPath>
                    </text>
                </svg>
            </div>

            {/* Center Button */}
            <button className="absolute z-10 p-6 text-2xl bg-yellow-500 flex justify-center items-center text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-all">
                <FaArrowTurnDown />
            </button>
        </div>
    );
}
