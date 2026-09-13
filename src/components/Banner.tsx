import BannerImg from "../assets/banner-stack.png"
const Banner = () => {
    return (
        <div className="grid grid-cols-1 items-center container mx-auto p-2 md:grid-cols-2">
            <div className="grid grid-cols-1 gap-4 md:gap-6">
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-center md:text-left">Build Your Ideal <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">Development Stack</span> </h1>
                <p className="md:text-xl text-gray-500 text-center md:text-left">Explore frontend, backend, database, and tooling options, <br className="hidden md:block" />compare them side by side, and put together the stack that fits your <br className="hidden md:block"/>next project.</p>
                <div className="flex gap-4">
                    <button className="btn btn-secondary bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-8 border-none">Explore Technologies</button>
                    <button className="btn btn-default text-gray-600 px-10">Learn More</button>
                </div>
            </div>
            <div>
                <img className="w-full h-auto md:ml-10" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;