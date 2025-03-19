"use client"
import { FC, ReactNode } from "react";

interface ServiceCardProps {
    children: ReactNode;
}

const ServiceCard: FC<ServiceCardProps> = ({ children }) => {
    return (
        <div className="bg-white text-gray-700 p-6 rounded-2xl shadow-md font-general">
            {children}
        </div>
    );
};

export default ServiceCard;
