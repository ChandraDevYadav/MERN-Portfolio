import React, { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import AboutMe from "../ResumeTab/AboutMe";
import Experience from "../ResumeTab/Experience";
import Education from "../ResumeTab/Education";
import Skills from "../ResumeTab/Skills";
import Awards from "../ResumeTab/Awards";

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
        <div className="bg-gray-100 px-32 py-16">
            <h1 className="text-xl font-semibold text-[#ff710b] text-center">Resume</h1>
            <p className="text-6xl font-semibold py-4 text-center">
                All over my details find here...
            </p>

            {/* Tabs Row - Centered */}
            <div className="flex justify-center items-center py-8 space-x-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.name}
                        onClick={() => setActiveTab(tab.name)}
                        className={`cursor-pointer px-6 py-2 text-lg font-medium transition-all flex items-center gap-2 rounded-lg 
                        ${activeTab === tab.name ? "bg-black text-white" : "text-gray-700 hover:bg-gray-200 bg-white"}`}
                    >
                        {tab.name} <GoArrowUpRight className="text-xl" />
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-6 text-gray-800 text-lg">
                {tabs.map((tab) => activeTab === tab.name && (
                    <div key={tab.name}>
                        {tab.content}
                    </div>
                ))}
            </div>
        </div>
    );
}
