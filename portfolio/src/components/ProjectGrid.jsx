import React from "react";
import { Link } from "react-router-dom";

const projects = [
    { id: 1, title: "Project One", image: "./mypro2.png", link: "https://gyan-sagar-education.onrender.com/" },
    { id: 2, title: "Project Two", image: "./mypro3.png", link: "https://milanbindu-dating-app.onrender.com/" },
    { id: 3, title: "Project Three", image: "./mypro4.png", link: "https://electrohub-electro.onrender.com/" },
    { id: 4, title: "Project Four", image: "./mypro1.png", link: "https://hotel-booking-hotelgroup.onrender.com/" },
    { id: 5, title: "Project Five", image: "./project7.png", link: "https://example.com/project5" },
    { id: 6, title: "Project Six", image: "./mypro5.png", link: "https://coffeeshop-coffee.onrender.com/" },
    { id: 7, title: "Project Seven", image: "./mypro6.png", link: "https://hotel-booking-easystay.onrender.com/" },
];

const ProjectGrid = () => {
    return (
        <div className="container mx-auto px-32 py-12">
            <h2 className="text-xl font-bold text-center text-[#ff710b]">Portfolio</h2>
            <h2 className="text-6xl font-bold text-center">My Recent Work</h2>

            <div className="grid gap-6 pt-16">
                {/* Row 1 - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(0, 2).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Row 2 - 3 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {projects.slice(2, 5).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Row 3 - 2 Columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {projects.slice(5, 7).map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProjectCard = ({ project }) => {
    return (
        <Link to={project.link} target="_blank" rel="noopener noreferrer">
            <div className="relative group cursor-pointer rounded-lg overflow-hidden">
                {/* Image */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                />

                {/* Hover Effect */}
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <h3 className="text-white text-2xl font-bold">{project.title}</h3>
                </div>
            </div>
        </Link>
    );
};

export default ProjectGrid;
