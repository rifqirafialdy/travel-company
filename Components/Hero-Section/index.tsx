"use client"
import Image from "next/image";
import { FC } from "react";
import useImageSlider from "@/hooks/useImageSlider";
import heroImages from "@/Constants/heroImage";
import { motion } from "framer-motion";

const HeroSection: FC = () => {
    const index = useImageSlider(heroImages.length);

    return (
        <div className="w-screen min-h-screen relative overflow-hidden">
            <div className="flex w-full h-full">
                {heroImages.map((image, i) => (
                   <motion.div
                   key={i}
                   initial={{ opacity: 0 }}
                   animate={{ opacity: i === index ? 1 : 0 }}
                   transition={{ duration: 1 }}
                   className="absolute inset-0"
               >
               
                        <Image 
                            src={image.path}
                            alt="Beautiful Landscape"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            className="brightness-60"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 flex flex-col items-start justify-end p-6 space-y-4">
                <h1 className="text-amber-50 text-2xl lg:text-5xl font-bold uppercase font-headline tracking-wide">
                    Never Stop Wandering<br />Let's Start The Journey
                </h1>
                <p className="text-amber-50 text-sm md:text-lg max-w-2xl font-general">
                    冒険の世界へ。Experience the beauty of the world. Create memories that last a lifetime through exploration and discovery.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
