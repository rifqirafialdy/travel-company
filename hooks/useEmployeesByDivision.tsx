import { useState, useEffect } from "react";
import { useEmployees } from "@/contexts/EmployeeContext";
export const useEmployeesByDivision = (selectedDivision: string | null) => {
    const { employees, loading } = useEmployees(); 
    const [filteredEmployees, setFilteredEmployees] = useState<any[]>([]);

    useEffect(() => {
        if (!selectedDivision || loading) return; 
        const filtered = employees.filter(employee => employee.division === selectedDivision);
        setFilteredEmployees(filtered);
    }, [selectedDivision, employees, loading]); 
    return filteredEmployees;
};
