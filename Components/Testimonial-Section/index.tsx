"use client"
import { FC } from "react";
import { useTestimonials } from "@/contexts/TestimonialsContext";
const TestimonialSection: FC = () => {
    const{testimonials,}=useTestimonials()
    return (
        <section className="w-screen min-h-screen py-20 px-6 md:px-12 flex flex-col gap-10 bg-gradient-to-r from-amber-300 to-amber-500">
            <h1 className="uppercase font-headline text-3xl font-bold md:text-5xl lg:text-7xl text-white mb-6 text-center">What's Our Client Said</h1>
            <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-amber-500 px-4 py-4">
                {testimonials.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className="min-w-[300px] max-w-xs bg-white p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105 border border-amber-200">
                        <h2 className=" font-headline font-bold text-xl mb-2 text-amber-600">{testimonial.author}</h2>
                        <p className="  font-general text-sm text-gray-500 mb-1 capitalize">{testimonial.service} - {testimonial.details}</p>
                        <p className="font-general text-gray-700 mt-4">"{testimonial.content}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
