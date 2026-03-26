import { useNavigate } from "react-router-dom";
import appsData from "../../../data/apps.json";
import AppCard from "../AllApps/AppCard";

const TopApps = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8);

  return (
    <section className="max-w-7xl mx-auto py-20 px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">Trending Apps</h2>
        <p className="text-gray-500 mt-2">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {topApps.map(app => <AppCard key={app.id} app={app} />)}
      </div>

      <div className="text-center mt-12">
        <button 
          onClick={() => navigate("/apps")}
          className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-purple-700 transition"
        >
          Show All
        </button>
      </div>
    </section>
  );
};

export default TopApps;