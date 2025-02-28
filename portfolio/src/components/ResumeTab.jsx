import React, { useState } from "react";
import AboutMe from "./ResumeTab/AboutMe";
import Experience from "./ResumeTab/Experience";
import Education from "./ResumeTab/Education";
import Skills from "./ResumeTab/Skills";
import Awards from "./ResumeTab/Awards";
import { GoArrowUpRight } from "react-icons/go";

// Tab Data
const tabs = [
    {
        name: "About Me",
        content: (
            <div>
                <AboutMe />
            </div>
        ),
    },
    {
        name: "Experience",
        content: (
            <div>
                <Experience />
            </div>
        ),
    },
    {
        name: "Education",
        content: (
            <div>
                <Education />
            </div>
        ),
    },
    {
        name: "Skills",
        content: (
            <div>
                <Skills />
            </div>
        ),
    },
    {
        name: "Awards",
        content: (
            <div>
                <Awards />
            </div>
        ),
    },
];

export default function ResumeTab() {
    const [activeTab, setActiveTab] = useState(tabs[0].name);

    return (
        <div className="">
            <div className="flex gap-16 bg-gray-100 px-32 py-16">
                {/* Left Sidebar Tabs */}
                <div className="w-2/6 border-gray-300">
                    <h1 className="text-xl font-semibold text-[#ff710b]">Resume</h1>
                    <p className="text-6xl font-semibold py-4">All over my details find here...</p>
                    <ul className="flex flex-col space-y-3">
                        {tabs.map((tab) => (
                            <li
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`cursor-pointer px-6 py-4 text-[16px] font-medium transition-all flex justify-between items-center
                          ${activeTab === tab.name ? "bg-black text-white rounded-lg" : "text-gray-700 hover:bg-gray-200 bg-white rounded-lg"}`
                                }
                            >
                                {tab.name} <span><GoArrowUpRight className="text-2xl" /></span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Content Area */}
                <div className="w-4/6 py-6 pl-16">
                    {tabs.map((tab) => (
                        activeTab === tab.name && (
                            <div key={tab.name} className="text-gray-800 text-lg">
                                {/* <h2 className="text-2xl font-bold mb-4">{tab.name}</h2> */}
                                <div>{tab.content}</div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
