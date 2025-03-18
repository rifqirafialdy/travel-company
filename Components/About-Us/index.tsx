"use client"
import { FC, useState } from "react";
import History from "./History";
import Founders from "./Founders";
import Culture from "./Culture";
const AboutUsContent: FC = () => {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const renderContent = () => {
        switch (activeSection) {
            case "History":
                return <History />;
            case "Founders":
                return <Founders />;
            case "Culture":
                return <Culture />;
            default:
                return null;
        }
    };

    if (activeSection) {
        return (
            <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 flex flex-col items-center justify-center relative">
                {renderContent()}
                <div 
                    className=" bottom-8 flex items-center justify-center bg-white w-16 h-16 rounded-full cursor-pointer shadow-lg hover:bg-amber-200 transition-all"
                    onClick={() => setActiveSection(null)}
                >
                    <span className="text-3xl text-amber-700 font-bold">X</span>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 flex flex-col md:flex-row md:gap-8 items-center justify-center p-20">
            <div className="w-40 h-40 lg:w-120 lg:h-120 bg-white rounded-full flex items-center justify-center shadow-lg mb-12">
                <h1 className="font-title uppercase text-xl md:text-4xl lg:text-6xl tracking-widest font-semibold text-amber-300">
                    Wanderlust
                </h1>
            </div>
            <div className="flex flex-col gap-8">
                <h1
                    className="uppercase text-2xl md:text-4xl lg:text-6xl font-headline font-bold text-amber-50 hover:text-amber-200 cursor-pointer"
                    onClick={() => setActiveSection("History")}
                >
                    History
                </h1>
                <h1
                    className="uppercase text-2xl md:text-4xl lg:text-6xl font-headline font-bold text-amber-50 hover:text-amber-200 cursor-pointer"
                    onClick={() => setActiveSection("Founders")}
                >
                    Founders
                </h1>
                <h1
                    className="uppercase text-2xl md:text-4xl lg:text-6xl font-headline font-bold text-amber-50 hover:text-amber-200 cursor-pointer"
                    onClick={() => setActiveSection("Culture")}
                >
                    Culture
                </h1>
            </div>
        </div>
    );
};

export default AboutUsContent;
