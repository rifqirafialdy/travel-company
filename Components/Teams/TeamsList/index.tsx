"use client"
import { FC, useState } from "react";
import Image from "next/image";

const TeamsList: FC = () => {
    const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

    const divisions = [
        { name: "Operations", head: "Chris Evans", members: ["David Brown", "Emma Carter"] },
        { name: "Guide", head: "Liam Wong", members: ["Sophie Turner", "Olivia Green"] },
        { name: "Product Development", head: "Eve Adams", members: ["Frank White", "Isabella Moore"] },
        { name: "Customer Relations", head: "Amy Watson", members: ["Brian Cho", "Nina Patel"] },
        { name: "Finance", head: "James Lee", members: ["Rachel Kim", "Tommy Wells"] },
        { name: "Marketing", head: "Alice Smith", members: ["Bob Johnson", "Diana Black"] },
        { name: "Human Resources", head: "Megan Fox", members: ["Daniel Craig", "Laura Perry"] }
    ];

    return (
        <div className="w-full min-h-screenp-8 pt-20 flex flex-col items-center text-white">
           

         

            {/* Divisions Section */}
            <div className="w-full max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Divisions</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {divisions.map((division) => (
                        <button
                            key={division.name}
                            className="px-4 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-900"
                            onClick={() => setSelectedDivision(division.name)}
                        >
                            {division.name}
                        </button>
                    ))}
                </div>
                {selectedDivision && (
                    <div className="bg-white text-amber-700 p-4 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold mb-2">{selectedDivision} Division</h3>
                        <p><strong>Head of Division:</strong> {divisions.find(div => div.name === selectedDivision)?.head}</p>
                        <ul>
                            {divisions.find(div => div.name === selectedDivision)?.members.map(member => (
                                <li key={member}>{member}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamsList;
