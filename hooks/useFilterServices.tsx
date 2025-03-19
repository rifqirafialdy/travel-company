"use client"
import { useState, useEffect } from "react";
import { useServices } from "@/contexts/ServiceContext";

interface Service {
    id: number;
    name: string;
    options: ServiceOption[];
}
interface ServiceOption {
    type: string;
    price: number;
    quota: number | null;
    perks: string[];
    itinerary: string[];
    description: string | null;
}

export const useFilteredServices = (serviceName: string) => {
    const { services, loading: servicesLoading, error } = useServices();
    const [filteredServices, setFilteredServices] = useState<Service[]>([]); 
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!servicesLoading && services) {
            const filtered = services.filter(
                service => service.name.toLowerCase() === serviceName.toLowerCase()
            );
            setFilteredServices(filtered);
            setLoading(false);
        }
    }, [services, servicesLoading, serviceName]);

    return { filteredServices, loading, error };
};
