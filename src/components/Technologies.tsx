import { use, type Dispatch, type SetStateAction } from "react";
import type { ITech } from "../types/tech";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

interface ITechnologiesProps {
    dataPromise: Promise<ITech[]>
    addToStack: ITech[]
    setAddToStack:Dispatch<SetStateAction<ITech[]>>
}

const Technologies = ({ dataPromise, addToStack, setAddToStack}: ITechnologiesProps) => {
    const tech = use(dataPromise);

    return (
        <section className="container mx-auto p-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 my-10">
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            tech.map((item: ITech) => (
                                <TechnologyCard key= {item.id} item={item} addToStack={addToStack} setAddToStack={setAddToStack}></TechnologyCard>
                            ))
                        }
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <YourStack addToStack={addToStack} setAddToStack={setAddToStack}></YourStack>
                </div>
            </div>
        </section>
    );
};

export default Technologies;