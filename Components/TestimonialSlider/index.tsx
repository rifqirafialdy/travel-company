"use client"

import { FC, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFilterTestimonials } from "@/hooks/useFilterTestimonials";

interface TestimonialSliderProps {
    filter: string;
}

const TestimonialSlider: FC<TestimonialSliderProps> = ({ filter }) => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const { filteredTestimonials: testimonials, error, loading } = useFilterTestimonials(filter);

    useEffect(() => {
        if (testimonials.length > 0) {
            const interval = setInterval(() => {
                setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [testimonials]);

    if (loading) return <p>Loading testimonials...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="mt-12 p-4 bg-white text-gray-700 rounded-2xl shadow-md max-w-xl text-center">
            <AnimatePresence mode="wait">
                {testimonials.length > 0 && (
                    <motion.div
                        key={currentTestimonial}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="italic mb-2">"{testimonials[currentTestimonial].content}"</p>
                        <p className="font-bold">- {testimonials[currentTestimonial].author}, {testimonials[currentTestimonial].details}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default TestimonialSlider;
