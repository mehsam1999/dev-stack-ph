import type { ITech } from "../types/tech";

interface ITechnologyCardProps {
    item: ITech;
}

const TechnologyCard = ({ item }: ITechnologyCardProps) => {
    return (
        <div className="card bg-base-100 border border-gray-200 shadow-sm p-2">
            <div className="card-body p-3">
                <div className="flex justify-between items-center">
                    <img src={item.icon} alt={item.name} className="w-10 h-10" />
                    <span className={`badge p-4 rounded-4xl font-semibold ${item.badge === "Popular" ? "bg-blue-50 text-blue-500 border-blue-200" : item.badge === "Versatile" || item.badge === "Standard" ? "bg-green-50 text-green-500 border-green-200" : item.badge === "Fast" ? "bg-orange-50 text-orange-500 border-orange-200" : item.badge === "SSR / Edge" ? "bg-purple-50 text-purple-600 border-purple-200" : item.badge === "Top SQL" ? "bg-blue-50 text-blue-700 border-blue-200" : item.badge === "Cache" ? "bg-red-50 text-red-500 border-red-200" : item.badge === "Ubiquitous" ? "bg-yellow-50 text-yellow-600 border-yellow-200" : item.badge === "Essential" ? "bg-blue-50 text-blue-500 border-blue-200" : item.badge === "Robust" ? "bg-blue-50 text-blue-500 border-blue-200" : item.badge === "Modern" ? "bg-cyan-50 text-cyan-500 border-cyan-200" : item.badge === "Containers" ? "bg-blue-50 text-blue-500 border-blue-200" : "bg-gray-50 text-gray-500 border-gray-200"}`}>{item.badge}</span>
                </div>

                <h2 className="font-bold text-2xl">{item.name}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>

                <div className="flex justify-between items-center my-2">
                    <span className="badge badge-lg bg-gray-100">{item.category}</span>
                    <span className="text-sm">{item.difficulty}</span>
                    <span>⭐ {item.rating}</span>
                </div>

                <button className="btn btn-sm btn-neutral rounded-lg">Add to Stack</button>

            </div>
        </div>
    );
};

export default TechnologyCard;