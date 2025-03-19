"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface Testimonial {
    service: string;
    content: string;
    author: string;
    details: string;
}

interface TestimonialsContextType {
    testimonials: Testimonial[];
    error: string | null;
    loading: boolean;
}

const TestimonialsContext = createContext<TestimonialsContextType | undefined>(undefined);

export const TestimonialsProvider = ({ children }: { children: ReactNode }) => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchTestimonials = async () => {
           
            setLoading(true);
            setError(null);

            try {
                console.log(process.env.NEXT_PUBLIC_API_URL);
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
                console.log("Response", response);
                if (!response.ok) {
                    throw new Error('Failed to fetch testimonials');
                }

                const data = await response.json();
                setTestimonials(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    return (
        <TestimonialsContext.Provider value={{ testimonials, error, loading }}>
            {children}
        </TestimonialsContext.Provider>
    );
};

export const useTestimonials = () => {
    const context = useContext(TestimonialsContext);
    if (!context) {
        throw new Error("useTestimonials must be used within a TestimonialsProvider");
    }
    return context;
};
