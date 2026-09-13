import type { ITech } from "../types/tech";

interface IYourStackProps {
    addToStack: ITech[];
}

const YourStack = ({ addToStack }: IYourStackProps) => {
    return (
        <div className="border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-bold">Your Stack</h2>

            <p className="text-gray-400 mt-1">{addToStack.length === 0 ? "No technologies selected yet." : `${addToStack.length} ${addToStack.length === 1 ? "technology" : "technologies"} selected.`}</p>

            <div className="border border-dashed border-gray-300 rounded-xl py-10 mt-6 text-center">
                <p className="text-gray-400">Your stack is empty.</p>
            </div>
        </div>
    );
};

export default YourStack;