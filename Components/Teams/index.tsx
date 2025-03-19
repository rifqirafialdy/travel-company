"use client";

import { FC } from "react";
import Image from "next/image";
import { useEmployees } from "@/contexts/EmployeeContext";

const TeamsHead: FC = () => {
  const { employees, loading } = useEmployees();
  const ceo = employees.find(employee => employee.position === "CEO");

  return (
    <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 p-8 pt-20 flex flex-col items-center justify-center text-white">
      {loading ? (
        <p className="text-lg">Loading...</p>
      ) : ceo ? (
        <div className="max-w-lg w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden relative">
          <div className="w-full h-80 relative">
            <Image
              src={ceo.imageUrl || "/default-ceo.jpg"}
              alt={ceo.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>

          <div className="p-6 text-center text-gray-700">
            <h2 className="text-3xl font-bold mb-2">{ceo.name}</h2>
            <p className="text-lg mb-2">
              <strong>Position:</strong> CEO
            </p>
            <p className="text-lg mb-2">
              <strong>Birthday:</strong> {ceo.birthday}
            </p>
            <p className="text-lg mb-2">
              <strong>Favorite Place:</strong> {ceo.favoritePlace}
            </p>
            <p className="text-lg mb-4">
              <strong>Certification:</strong> {ceo.certifications}
            </p>
          </div>

          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex justify-center items-center text-center text-white p-6 rounded-b-lg">
            <div>
              <p>
                <strong>Phone:</strong> {ceo.phoneNumber}
              </p>
              <p>
                <strong>Email:</strong> {ceo.email}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>No CEO found</p>
      )}

      <div className="max-w-3xl text-center mb-12 px-4 mt-12">
        <p className="text-lg md:text-xl mb-6">
          Welcome to Wanderlust! As the CEO, my vision is to inspire people to explore the world and embrace new experiences. Our team is dedicated to providing you with unforgettable adventures through personalized travel experiences. Join us as we continue to create memories that last a lifetime!
        </p>
        <button className="mt-6 px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-900 text-lg md:text-xl transition-colors">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default TeamsHead;
