import Logo from "../assets/logo.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-gray-200">
            <div className="flex justify-between items-center container mx-auto py-4 px-2 md:py-6">

                {/* mobile view */}
                <div className="dropdown dropdown-start md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle m-1">
                        <RxHamburgerMenu size={24} />
                    </div>

                    <ul tabIndex={-1} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a className="text-secondary">Home</a></li>
                        <li><a className="hover:text-secondary">Technologies</a></li>
                        <li><a className="hover:text-secondary">Projects</a></li>
                        <li><a className="hover:text-secondary">About</a></li>
                        <li><a className="hover:text-secondary">Contact</a></li>
                    </ul>
                </div>

                <div className="flex items-center justify-between gap-2">
                    <img src={Logo} alt="logo" />
                    <p className="text-xl font-extrabold mb-1">Dev <span className="text-secondary text-center">Stack</span></p>
                </div>
                <ul className="hidden md:flex items-center gap-4 cursor-pointer font-semibold text-gray-700">
                    <li className="text-secondary">Home</li>
                    <li className="transition-colors duration-200 hover:text-secondary">Technologies</li>
                    <li className="transition-colors duration-200 hover:text-secondary">Projects</li>
                    <li className="transition-colors duration-200 hover:text-secondary">About</li>
                    <li className="transition-colors duration-200 hover:text-secondary">Contact</li>
                </ul>
                <div className="flex gap-2">
                    <button className="btn btn-default rounded-3xl">Sign In</button>
                    <button className="btn btn-secondary rounded-3xl">Sign UP</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;