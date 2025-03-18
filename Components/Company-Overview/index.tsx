"use client";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const CompanyOverview: FC = () => {
    return (
        <section className="bg-white min-h-screen p-4 md:p-6 lg:p-8 pt-20 lg:pt-22 ">
            <div className="flex flex-col md:flex-row gap-20 p-4 md:items-center justify-between border-b-1 pb-20">
                <motion.h1 
                    className="font-headline text-amber-300 text-3xl font-bold md:text-5xl lg:text-7xl"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 5 }}
                    viewport={{ amount: 0.2 }}
                >
                    About Us
                </motion.h1>

                <motion.div 
                    className="flex flex-col gap-2 tracking-widest text-left font-general"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 8 }}
                    viewport={{ amount: 0.2 }}
                >
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Founded in 2025, <span className="font-bold text-amber-300 font-title uppercase tracking-widest">Wanderlust</span> was created to revolutionize the way people travel. 
                        Inspired by our own struggles with planning itineraries and finding travel companions, we designed a platform 
                        that makes travel easy, social, and enjoyable. 
                    </p>
                    <br />
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Our mission is simple: To help adventurers create meaningful experiences without the hassle of complicated planning. 
                        We provide seamless itinerary planning tools and connect like-minded travelers, making sure that no one has to explore the world alone.  
                    </p>
                    <br />
                    <p className="text-gray-700 text-lg leading-relaxed">
                        We value community, accessibility, sustainability, and the spirit of adventure. Whether you’re a solo traveler, digital nomad, or just someone seeking new experiences, 
                        <span className="font-bold text-amber-300 font-title uppercase tracking-widest"> Wanderlust</span> is here to make your journey memorable and stress-free.
                    </p>
                    <br />
                    <Link href="/about">
                        <motion.button 
                            className="font-general px-6 py-3 mt-4 border-amber-200 border-2 text-gray-700 font-bold rounded-lg hover:text-amber-50 hover:bg-amber-200 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More About Us...
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

        </section>
    );
}

export default CompanyOverview;
