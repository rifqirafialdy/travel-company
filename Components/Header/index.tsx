"use client"
import { FC, useState } from "react";
import Link from "next/link";
import useScrollDetection from "@/hooks/useScrollDetection";
import { Menu, X } from "lucide-react";

const Header: FC = () => {
  const isScrolled = useScrollDetection(200);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className={`p-4 md:p-6 lg:p-8 lg:py-4 flex items-end justify-between fixed z-20 w-full transition-all duration-300 ${
        isScrolled ? "bg-gray-200/80 py-1 shadow-md scale-90" : ""
      }`}>
        <Link href={"/"}  className="font-title uppercase text-lg md:text-2xl lg:text-3xl tracking-widest font-semibold text-amber-300">
          Wanderlust
        </Link>

        <div className="flex items-center gap-5">
          <div className="block md:hidden">
            {isMenuOpen ? (
              <X
                className="text-gray-700 cursor-pointer"
                size={30}
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <Menu
                className="text-gray-700 cursor-pointer"
                size={30}
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          <div className={`hidden md:flex gap-5 uppercase text-lg tracking-widest ${isScrolled ? "text-gray-700" : "text-gray-200"}`}>
            <Link href="/About-Us" className="font-general hover:text-amber-200">Company</Link>
            <Link href={"/Services"} className="font-general hover:text-amber-200">Services</Link>
            <h1 className="font-general hover:text-amber-200">Teams</h1>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-amber-300 text-gray-100 flex flex-col items-center justify-center gap-10 z-10">
          <Link href="/About-Us" className="text-3xl font-general hover:text-amber-700" onClick={() => setIsMenuOpen(false)}>Company</Link>
          <h1 className="text-3xl font-general hover:text-amber-700">Services</h1>
          <h1 className="text-3xl font-general hover:text-amber-700">Teams</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
