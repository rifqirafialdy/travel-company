"use client"

import { FC, useState } from "react";
import { useEmployeesByDivision } from "@/hooks/useEmployeesByDivision";
import Image from "next/image";

const TeamsList: FC = () => {
    const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

    // Get filtered employees using the custom hook
    const filteredEmployees = useEmployeesByDivision(selectedDivision);

    const divisions = [
        "Operations", 
        "Guide", 
        "Product Development", 
        "Customer Relation", 
        "Finance", 
        "Marketing", 
        "HR"
    ];

    return (
        <div className="w-full min-h-screen p-8 pt-20 flex flex-col items-center text-white">
            <div className="w-full max-w-4xl text-center mb-12">
                <h2 className="text-3xl font-bold mb-6">Our Divisions</h2>
                <div className="flex flex-wrap justify-center gap-4 mb-6">
                    {divisions.map((division) => (
                        <button
                            key={division}
                            className="px-4 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-900"
                            onClick={() => setSelectedDivision(division)}
                        >
                            {division}
                        </button>
                    ))}
                </div>

                {selectedDivision && (
                    <div className="bg-white text-amber-700 p-4 rounded-xl shadow-md">
                        <h3 className="text-2xl font-bold mb-2">{selectedDivision} Division</h3>
                        {filteredEmployees.length === 0 ? (
                            <p>No employees in this division</p>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                {filteredEmployees.map((employee) => (
                                    <div
                                        key={employee.name}
                                        className="relative w-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
                                    >
                                        <div className="w-full h-72 relative">
                                            <Image
                                                src={employee.imageUrl || "/default-avatar.jpg"}
                                                alt={employee.name}
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-t-xl"
                                            />
                                        </div>
                                        <div className="p-4">
                                            <h4 className="text-xl font-bold">{employee.name}</h4>
                                            <p className="text-lg mb-2">{employee.position}</p>
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center text-white p-4 rounded-xl">
                                            <div>
                                                <p><strong>Phone:</strong> {employee.phone}</p>
                                                <p><strong>Email:</strong> {employee.email}</p>
                                                <p><strong>Birthday:</strong> {employee.birthday}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamsList;
