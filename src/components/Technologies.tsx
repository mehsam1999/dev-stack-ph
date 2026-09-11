import { use } from "react";
import type { ITech } from "../types/tech";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

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

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            tech.map((item: ITech) => (
                                <TechnologyCard key= {item.id} item={item}></TechnologyCard>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <YourStack></YourStack>
                </div>
            </div>
        </section>
    );
};

export default Technologies;