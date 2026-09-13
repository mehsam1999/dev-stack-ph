import FooterImg from '../assets/logo.png'
const Footer = () => {
    return (
        <footer className="border-t border-gray-200 mt-10">
            <div className="container mx-auto px-6 md:px-8 py-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <img src={FooterImg} />
                            <p className="text-xl font-extrabold mb-1">Dev <span className="text-secondary text-center">Stack</span></p>
                        </div>
                        <p className="text-gray-500">Curated tools, technologies, and resources for developers building modern software.</p>
                        <div className="flex gap-5 mt-5 text-sm text-gray-600">
                            <a href="" className="hover:text-secondary font-bold">GitHub</a>
                            <a href="" className="hover:text-secondary font-bold">Twitter</a>
                            <a href="" className="hover:text-secondary font-bold">LinkedIn</a>
                        </div>
                    </div>
                    <div className='lg:pl-30'>
                        <h3 className="font-bold mb-4">PRODUCT</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="" className="hover:text-secondary">Home</a></li>
                            <li><a href="" className="hover:text-secondary">Technologies</a></li>
                            <li><a href="" className="hover:text-secondary">Projects</a></li>
                        </ul>
                    </div>
                    <div className='lg:pl-30'>
                        <h3 className="font-bold mb-4">COMPANY</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="" className="hover:text-secondary">About</a></li>
                            <li><a href="" className="hover:text-secondary">Contact</a></li>
                            <li><a href="" className="hover:text-secondary">Careers</a></li>
                        </ul>
                    </div>
                    <div className='lg:pl-20'>
                        <h3 className="font-bold mb-4">LEGAL</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><a href="" className="hover:text-secondary">Privacy Policy</a></li>
                            <li><a href="" className="hover:text-secondary">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-secondary">Privacy</a>
                        <a href="#" className="hover:text-secondary">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;