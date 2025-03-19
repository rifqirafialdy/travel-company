"use client"
import { FC } from "react";
import ServiceCard from "@/Components/ServiceCard";
import TestimonialSlider from "@/Components/TestimonialSlider";
import { useFilteredServices } from "@/hooks/useFilterServices";


const PrivateTour: FC = () => {
  
 const { filteredServices, loading, error } = useFilteredServices("private tour");
        
    
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;

   

    return (
        <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 p-8 flex flex-col items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Private Tours</h1>
            <p className="text-center max-w-2xl mb-8">Explore our exclusive private tours, carefully designed to offer you the best experiences at each destination. From cultural adventures to breathtaking natural landscapes, our tours have something for everyone. Book now and start your unforgettable journey!</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {filteredServices.map((service) => (
                    service.options.map((option) => (
                        <ServiceCard key={option.type}>
                            <h2 className="font-title text-2xl md:text-4xl text-amber-400 font-bold mb-2">{option.type}</h2>
                            <p className=" text-xl mb-2">{option.description}</p>
                            <p className=" text-xl mb-2">Price: ${option.price}</p>
                            <ul className="list-disc list-inside mb-4">
                                {option.itinerary.map((perk, index) => (
                                    <li key={index}>{perk}</li>
                                ))}
                            </ul>
                            <button className="mt-4 px-4 py-2 bg-amber-300 text-white rounded-full hover:bg-amber-800">Book Now</button>
                        </ServiceCard>
                    ))
                ))}
            </div>


            <button className="px-6 py-3 bg-amber-400 text-white rounded-full hover:bg-amber-900 mb-12">Request Custom Tour Quote</button>

          <TestimonialSlider filter="private tour"/>
        </div>
    );
};

export default PrivateTour;
