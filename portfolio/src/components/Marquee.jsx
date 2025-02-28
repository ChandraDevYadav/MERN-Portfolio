import React from "react";

const images = [
    "./zil.jpeg",
    "./footerlogo.png",
    "./LOGOOO.jpg",
    "./logo.png",
    "./logo10.png"
];

const Marquee = () => {
    return (
        <div className="overflow-hidden whitespace-nowrap border-t border-b py-1 mx-24">
            <div className="flex animate-marquee space-x-6 py-8">
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Marquee ${index}`}
                        className="w-28 h-28 object-fill"
                    />
                ))}
                {/* Duplicate the images for smooth looping */}
                {images.map((img, index) => (
                    <img
                        key={`dup-${index}`}
                        src={img}
                        alt={`Marquee ${index}`}
                        className="w-28 h-28 object-fill"
                    />
                ))}
            </div>
        </div>
    );
};

export default Marquee;
