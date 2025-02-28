import React from "react";
import { FiPlay } from "react-icons/fi";

const PlayButtonImage = () => {
    return (
        <div className="relative w-full h-full mx-auto">
            {/* Background Image */}
            <img
                src="./video.png" // Replace with your image
                alt="Thumbnail"
                className="w-full h-full object-cover rounded-lg"
            />

            {/* Play Icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-10 rounded-lg transition-all duration-300 hover:bg-opacity-10 cursor-pointer">
                <div className="p-8 rounded-full bg-[#ff710b]">
                    <FiPlay className="text-white text-4xl" />
                </div>
            </div>
        </div>
    );
};

export default PlayButtonImage;
