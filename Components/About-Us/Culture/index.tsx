import { FC, useState } from "react";
import Image from "next/image";

interface Card {
    title: string;
    description: string;
    imagePath: string;
}

const cards: Card[] = [
    {
        title: "Adventure Spirit",
        description: "We embrace the thrill of discovery and challenge, encouraging exploration beyond boundaries and comfort zones.",
        imagePath: "/adventure.jpg"
    },
    {
        title: "Sunrise Optimism",
        description: "Like the amber hue of a sunrise, we approach every journey with positivity, resilience, and a fresh perspective.",
        imagePath: "/sunrise.jpg"
    },
    {
        title: "Connection & Community",
        description: "We believe travel is not just about places, but about people. We foster a culture of inclusivity and shared experiences.",
        imagePath: "/community.jpg"
    }
];

const Culture: FC = () => {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center p-8 bg-gradient-to-l from-amber-700 to-amber-400 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative group w-72 h-96 bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                    >
                        <Image src={card.imagePath} alt={card.title} layout="fill" className="object-cover" />
                        {hoveredCard === index && (
                            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
                                <h2 className="text-2xl font-bold mb-2 text-amber-300">{card.title}</h2>
                                <p>{card.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Culture;
