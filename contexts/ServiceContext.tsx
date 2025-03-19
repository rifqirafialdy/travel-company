"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ServiceOption {
    type: string;
    price: number;
    quota: number | null;
    perks: string[];
    itinerary: string[];
    description: string | null;
}

interface Service {
    id: number;
    name: string;
    options: ServiceOption[];
}

interface ServicesContextType {
    services: Service[];
    error: string | null;
    loading: boolean;
}

const ServicesContext = createContext<ServicesContextType | undefined>(undefined);

export const ServicesProvider = ({ children }: { children: ReactNode }) => {
    const [services, setServices] = useState<Service[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/services`);
                console.log(response);
                
                if (!response.ok) {
                    throw new Error('Failed to fetch services');
                }
                const data = await response.json();
                console.log("Fetched data:", data);
                
                setServices(data); 
                
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchServices();
    }, []);

    return (
        <ServicesContext.Provider value={{ services, error, loading }}>
            {children}
        </ServicesContext.Provider>
    );
};

export const useServices = () => {
    const context = useContext(ServicesContext);
    if (!context) {
        throw new Error("useServices must be used within a ServicesProvider");
    }
    return context;
};
