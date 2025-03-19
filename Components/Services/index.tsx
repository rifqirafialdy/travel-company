import Link from "next/link";
import { FC } from "react";

const ServicesHead: FC = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-l from-amber-700 to-amber-400 p-8 pt-20 flex flex-col gap-8 text-center md:text-left md:flex-row lg:justify-between items-center">
            <div className="flex flex-col gap-4 max-w-3xl">
                <h1 className="uppercase text-4xl md:text-6xl lg:text-8xl font-headline font-bold text-amber-50">Services</h1>
                <p className=" font-general text-lg md:text-xl lg:text-2xl text-white">
                    At Wanderlust, we provide exceptional travel experiences tailored to your desires. 
                    Whether you're looking for a private, curated tour, a local guide to show you hidden gems, 
                    a hassle-free open trip, or a customized travel plan, we have you covered.
                </p>
            <div className="flex flex-col gap-4 mt-8 md:mt-0 text-white text-lg">
                <h2 className="font-bold text-xl md:text-2xl ">Our Services:</h2>
                <ul className="font-general list-disc list-inside space-y-2">
                <ul className="font-general list-disc list-inside space-y-2">
    <li>
        <Link href="/Services/private-tour">Private Tour</Link>
    </li>
    <li>
        <Link href="/Services/local-guide">Local Guide</Link>
    </li>
    <li>
        <Link href="/Services/open-trip">Open Trip</Link>
    </li>
    <li>
        <Link href="/Services/personal-planner">Personal Planner</Link>
    </li>
</ul>

                </ul>
            </div>
            </div>
            
        </div>
    );
}

export default ServicesHead;
