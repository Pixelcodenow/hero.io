import { Link } from "react-router-dom";

const AppCard = ({ app }) => {
  return (
    <Link to={`/app/${app.id}`} className="bg-white p-4 rounded-2xl shadow-sm border hover:shadow-md transition group">
      <div className="bg-gray-200 aspect-square rounded-xl mb-4 overflow-hidden">
        <img src={app.image} className="w-full h-full object-cover group-hover:scale-105 transition" alt={app.title} />
      </div>
      <h3 className="font-bold text-lg mb-2 truncate">{app.title}</h3>
      <div className="flex justify-between items-center text-emerald-500 text-sm font-semibold">
        <span className="flex items-center gap-1">↓ {app.downloads}</span>
        <span className="flex items-center gap-1">★ {app.ratingAvg}</span>
      </div>
    </Link>
  );
};

export default AppCard;