import { useEffect,useState } from "react";
import { useEmployees } from "@/contexts/EmployeeContext";
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

export const useFounders = () => {
    const { employees } = useEmployees();
    const [founders, setFounders] = useState<Employee[]>([]);

    useEffect(() => {
        const filteredFounders = employees.filter(employee => employee.isFounder);
        setFounders(filteredFounders);
        console.log(filteredFounders);
        
    }, [employees]);

    return founders;
};
