"use client"

import { useState, useEffect } from "react";
import { useTestimonials } from "@/contexts/TestimonialsContext";
type Testimonial = {
    service: string;
    content: string;
    author: string;
    details: string;
};

export const useFilterTestimonials = (service: string) => {
    const { testimonials, error, loading } = useTestimonials();
    const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        if (!loading && testimonials.length > 0) {
            const filtered = testimonials.filter(
                (testimonial) => testimonial.service === service
            );
            setFilteredTestimonials(filtered);
        }
    }, [testimonials, service, loading]);

    return { filteredTestimonials, error, loading };
};
