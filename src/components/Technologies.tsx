import { use } from "react";
import type { ITech } from "../types/tech";

interface ITechnologiesProps {
    dataPromise: Promise<ITech[]>
}

const Technologies = ({ dataPromise }: ITechnologiesProps) => {
    const tech = use(dataPromise);

    return (
        <section className="container mx-auto p-6">
            <div>
                <h1 className="text-3xl md:text-4xl lg:text-7xl font-extrabold text-center md:text-left">Explore the <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies</span></h1>
                <p className="text-gray-500 my-4 text-center md:text-left">Pick one technology per category to build your ideal stack.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                {
                    tech.map((item) => (
                        <div key={item.id} className="card bg-base-100 border border-gray-200 shadow-sm p-2">
                            <div className="card-body p-4">

                                <div className="flex justify-between items-center">
                                    <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                    <span className="badge badge-outline badge-info p-4 rounded-4xl font-semibold">{item.badge}</span>
                                </div>

                                <h2 className="font-bold text-2xl">{item.name}</h2>
                                <p className="text-sm text-gray-500">{item.description}</p>

                                <div className="flex justify-between items-center my-4">
                                    <span className="badge badge-lg bg-gray-100">{item.category}</span>
                                    <span className="text-sm">{item.difficulty}</span>
                                    <span>⭐ {item.rating}</span>
                                </div>
                                <button className="btn btn-sm btn-neutral rounded-lg md:p-5">Add to Stack</button>

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default Technologies;