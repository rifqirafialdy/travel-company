"use client"
import { FC } from "react";
import { motion } from "framer-motion";
import services from "@/Constants/services";
import Link from "next/link";
const ServiceSection: FC = () => {
    return (
        <section className="bg-white min-h-screen p-4 md:p-6 lg:p-8 lg:pt-20 flex flex-col md:flex-row justify-between items-center">
           <div className=" block md:hidden flex-col justify-center items-start w-full max-w-md mt-8 md:mt-0 md:pl-10">
                <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl font-headline mb-4">Introduction to Our Service</h1>
                <p className="font-general text-gray-700 mb-4">We provide amazing travel experiences to breathtaking destinations around the world. Explore our carefully curated trips and discover your next adventure with us.</p>
              
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-2 w-full max-w-md md:max-w-lg h-[500px] relative overflow-hidden">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative w-full h-full overflow-hidden"
                    >
                        <motion.div
                            className="absolute backdrop-brightness-50 inset-0 flex flex-col items-center justify-center text-white p-4"
                            initial={{ opacity: 1 }}
                            whileHover={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2 className="font-title uppercase text-2xl font-bold">{service.title}</h2>
                        </motion.div>

                        <motion.img
                            src={service.src}
                            alt={service.title}
                            className="w-full h-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.4 }}
                        />

                        <motion.div
                            className="absolute inset-0 bg-amber-300 text-white text-center flex flex-col items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.4 }}
                        >
                            <p className="font-general text-sm mb-2">{service.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>

            <div className="hidden md:flex flex-col justify-center items-start w-full max-w-md mt-8 md:mt-0 md:pl-10">
                <h1 className="text-3xl font-bold md:text-5xl lg:text-7xl font-headline mb-4 text-amber-300">Introduction to Our Service</h1>
                <p className="font-general text-gray-700 mb-4">We provide amazing travel experiences to breathtaking destinations around the world. Explore our carefully curated trips and discover your next adventure with us.</p>
                <Link href="/Services">
                        <motion.button 
                            className="font-general px-6 py-3 mt-4 border-amber-200 border-2 text-gray-700 font-bold rounded-lg hover:text-amber-50 hover:bg-amber-200 transition duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More....
                        </motion.button>
                    </Link>
            </div>
        </section>
    );
};

export default ServiceSection;
