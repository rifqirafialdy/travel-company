"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Employee {
    name: string;
    position: string;
    division: string;
    isFounder: boolean;
    birthday: string;
    favoritePlace: string;
    certifications: string;
    email: string;
    phoneNumber: string;
    image: string;
    imageUrl: string;
}

interface EmployeesContextType {
    employees: Employee[];
    error: string | null;
    loading: boolean;
}

const EmployeesContext = createContext<EmployeesContextType | undefined>(undefined);

export const EmployeesProvider = ({ children }: { children: ReactNode }) => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/employees`);
                console.log(response);

                if (!response.ok) {
                    throw new Error('Failed to fetch employees');
                }

                const data = await response.json();
                console.log("Fetched data:", data);

                setEmployees(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    return (
        <EmployeesContext.Provider value={{ employees, error, loading }}>
            {children}
        </EmployeesContext.Provider>
    );
};

export const useEmployees = () => {
    const context = useContext(EmployeesContext);
    if (!context) {
        throw new Error("useEmployees must be used within an EmployeesProvider");
    }
    return context;
};
