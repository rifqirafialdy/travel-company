import { FC } from "react";

const Footer: FC = () => {
    return (
        <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-2xl text-amber-200 font-bold mb-4">WanderLust Travel</h2>
                    <p>Your trusted travel partner for amazing experiences around the world.</p>
                </div>

                <div>
                    <h3 className="text-xl text-amber-200 font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#" className="hover:text-amber-200">Home</a></li>
                        <li><a href="#" className="hover:text-amber-200">Company</a></li>
                        <li><a href="#" className="hover:text-amber-200">Services</a></li>
                        <li><a href="#" className="hover:text-amber-200">Teams</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl text-amber-200 font-semibold mb-4">Contact Us</h3>
                    <p>Email: contact@wanderlusttravel.com</p>
                    <p>Phone: +123 456 7890</p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className="hover:text-amber-200">Facebook</a>
                        <a href="#" className="hover:text-amber-200">Instagram</a>
                        <a href="#" className="hover:text-amber-200">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center border-t border-gray-700 pt-4">
                <p>© 2025 WanderLust Travel. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
