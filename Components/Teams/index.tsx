import { FC } from "react";
import Image from "next/image";

const TeamsHead: FC = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 p-8 pt-20 flex flex-col items-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8">Our Team</h1>
            <div className="flex flex-col md:flex-row items-center mb-12">
                <div className="w-48 h-48 mb-6 md:mb-0 md:mr-8">
                    <Image src="/ceo.jpg" alt="CEO" width={192} height={192} className="rounded-full" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-2">John Doe</h2>
                    <p>Name: John Doe</p>
                    <p>Birthday: May 15, 1980</p>
                    <p>Favorite Place: Patagonia, Chile</p>
                    <p>Certification: MBA from Harvard Business School</p>
                </div>
            </div>

            <div className="max-w-2xl text-center mb-12">
                <p className="mb-4">Welcome to Wanderlust! As the CEO, my vision is to inspire people to explore the world and embrace new experiences. Our team is dedicated to providing you with unforgettable adventures through personalized travel experiences. Join us as we continue to create memories that last a lifetime!</p>
                <button className="mt-4 px-6 py-2 bg-amber-800 text-white rounded-full hover:bg-amber-900">Join Us</button>
            </div>
        </div>
    );
};

export default TeamsHead;
