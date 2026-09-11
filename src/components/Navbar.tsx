import Logo from "../assets/logo-text.png";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-gray-100">
            <div className="flex justify-between items-center container mx-auto p-4">

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

                <img src={Logo} alt="logo" />
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