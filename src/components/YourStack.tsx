import { RxCross1 } from "react-icons/rx";
import type { ITech } from "../types/tech";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface IYourStackProps {
    addToStack: ITech[];
    setAddToStack:Dispatch<SetStateAction<ITech[]>>
}

const YourStack = ({addToStack, setAddToStack }: IYourStackProps) => {
    const handleRemoveStack = (item: ITech) => {
        const restStack = addToStack.filter((stackItem) => stackItem.id !== item.id);
        setAddToStack(restStack);
        toast.info(`${item.name} has been removed!`)
    }
    const handleRemoveAll = () => {
        setAddToStack([]);
        toast.info("Your Stack is cleared")
    }
    return (
        <div className="border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold">Your Stack</h2>

            <p className="text-gray-400 mt-1">{addToStack.length === 0 ? "No technologies selected yet." : `${addToStack.length} ${addToStack.length === 1 ? "Technology" : "Technologies"} Selected`}</p>

            {
                addToStack.length === 0 ? (
                    <div className="border border-dashed border-gray-300 rounded-xl py-10 mt-6 text-center">
                        <p className="text-gray-400">Your stack is empty.</p>
                    </div>
                ) : (
                    <>
                        <div className="mt-6 space-y-2">
                            {
                                addToStack.map((item) => (
                                    <div key={item.id} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <img src={item.icon} alt={item.name} className="w-10 h-10" />
                                            <div>
                                                <h3 className="font-semibold">{item.name}</h3>
                                                <p className="text-xs text-gray-500">{item.category}</p>
                                            </div>
                                        </div>
                                        <button onClick={()=> handleRemoveStack(item)} className="text-gray-400 text-2xl"><RxCross1 /></button>
                                    </div>
                                ))
                            }
                        </div>

                        <button onClick={handleRemoveAll} className="btn btn-outline btn-error w-full mt-8 rounded-xl">Remove All</button>
                    </>
                )
            }
        </div>
    );
};

export default YourStack;