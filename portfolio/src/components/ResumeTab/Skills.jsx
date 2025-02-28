import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";


const Skills = () => {
    const skills = [
        { name: "React JS", image: "./react.png", proficiency: "90%" },
        { name: "Express JS", image: "./express.png", proficiency: "70%", rounded: true },
        { name: "Node JS", image: "./nodejs.png", proficiency: "75%" },
        { name: "MongoDB", image: "./images.png", proficiency: "95%", rounded: true },
        { name: "GraphQL", image: "./GraphQL.png", proficiency: "60%" },
        { name: "Redux", image: "./Redux.png", proficiency: "80%" },
        { name: "CSS", image: "./extension.png", proficiency: "100%" },
        { name: "REST API", image: "./ds.png", proficiency: "80%" },
        { name: "Github", image: "./git.png", proficiency: "70%" }
    ];

    return (
        <div>
            <h1 className='text-2xl font-medium mb-8'>Skills</h1>
            <div className="grid grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex justify-start items-start gap-4 bg-gray-200 px-6 py-8 rounded-lg hover:bg-white">
                        <div>
                            <img src={skill.image} alt={skill.name} className={`w-12 h-12 ${skill.rounded ? "rounded-full" : ""}`} />
                        </div>
                        <div>
                            <h1 className="text-2xl font-semibold mb-3">{skill.name}</h1>
                            <p>({skill.proficiency})</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills