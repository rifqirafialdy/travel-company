import historyImages from "@/Constants/historyImage";
import useImageSlider from "@/hooks/useImageSlider";
import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const History: FC = () => {
   const index = useImageSlider(historyImages.length)

   

    return (
        <div className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between p-8 pt-20 gap-8">
            <div className="flex-1 text-white space-y-4">
                <h1 className="uppercase text-4xl md:text-5xl font-headline font-bold text-amber-50 mb-4">History</h1>
                <p className="text-lg md:text-xl leading-relaxed font-general">
                    Wanderlust was founded by three friends who met at the same university, bonded over their shared passion for outdoor activities. 
                    Their first adventure was a scuba diving expedition in North Sulawesi in 2020. The experience was breathtaking, but they quickly realized 
                    that while travel is exciting, planning and organizing trips can be a hassle.
                </p>
                <p className="text-lg md:text-xl leading-relaxed font-general">
                    After many expeditions together, they met countless adventurous spirits who hesitated to travel because of the planning involved. 
                    This inspired them to establish Wanderlust in 2022, with the mission of making travel easier for everyone with a passion for exploration.
                </p>
            </div>

            <div className="flex-1 relative flex justify-center items-center">
                <div className="w-full h-80 md:h-96 lg:h-[30rem] rounded-lg overflow-hidden shadow-lg relative">
                {historyImages.map((image, i) => (
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
                    
                        />
                    </motion.div>
                                    ))}

                </div>

              
            </div>
        </div>
    );
}

export default History;
