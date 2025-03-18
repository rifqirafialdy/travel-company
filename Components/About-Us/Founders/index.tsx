import { FC, useState } from "react";
import Image from "next/image";

const founders = [
    {
        name: "Sarah Wijaya",
        birthday: "March 15, 1990",
        favoritePlace: "Raja Ampat, Indonesia",
        certification: "Dive Master (PADI), Environmental Science Degree",
        image: "/teams-images/founders-2.jpg"
    },
    {
        name: "Rizky Pratama",
        birthday: "June 7, 1988",
        favoritePlace: "Mount Rinjani, Indonesia",
        certification: "Mountain Guide, Outdoor Recreation Management Degree",
        image: "/teams-images/founders-3.jpg"
    },
    {
        name: "Andi Saputra",
        birthday: "December 20, 1985",
        favoritePlace: "Ubud, Bali",
        certification: "Tourism Management Degree, Wilderness First Aid Certification",
        image: "/teams-images/founders-1.jpg"
    }
];

const Founders: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentFounder = founders[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % founders.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + founders.length) % founders.length);
    };

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center pt-20 p-8 bg-gradient-to-l from-amber-700 to-amber-400 text-white">
            <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-60 h-60 md:w-100 md:h-100 rounded-full overflow-hidden shadow-lg">
                    <Image src={currentFounder.image} alt={currentFounder.name} width={240} height={240} className="object-cover w-full h-full" />
                </div>
                <div className="text-left max-w-md p-4">
                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-headline font-bold mb-4">{currentFounder.name}</h1>
                    <p className=" font-general text-lg mb-2"><strong>Birthday:</strong> {currentFounder.birthday}</p>
                    <p className="font-general text-lg mb-2"><strong>Favorite Place:</strong> {currentFounder.favoritePlace}</p>
                    <p className="font-general text-lg mb-2"><strong>Certification:</strong> {currentFounder.certification}</p>
                </div>
            </div>
            <div className="mt-8 flex gap-4">
                <button onClick={handlePrev} className="px-4 py-2 bg-white text-amber-700 rounded-full">Previous</button>
                <button onClick={handleNext} className="px-4 py-2 bg-white text-amber-700 rounded-full">Next</button>
            </div>
        </div>
    );
};

export default Founders;
