import { useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import appsData from "../data/apps.json";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installed.find(a => a.id === app?.id)) setIsInstalled(true);
  }, [app]);

  const handleInstall = () => {
    const installed = JSON.parse(localStorage.getItem("installedApps")) || [];
    localStorage.setItem("installedApps", JSON.stringify([...installed, app]));
    setIsInstalled(true);
    toast.success("App Installed Successfully!");
  };

  if (!app) return <div className="text-center p-20 text-3xl font-bold">App Not Found!</div>;

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white mt-10 rounded-xl shadow-sm">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img src={app.image} className="w-48 h-48 rounded-3xl shadow-lg" alt="" />
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-purple-600 font-semibold mb-6">Developed by {app.companyName}</p>
          
          <div className="flex gap-10 border-b pb-6 mb-6">
            <div><p className="text-gray-400">Downloads</p><p className="text-2xl font-bold">{app.downloads}</p></div>
            <div><p className="text-gray-400">Rating</p><p className="text-2xl font-bold">{app.ratingAvg}</p></div>
            <div><p className="text-gray-400">Reviews</p><p className="text-2xl font-bold">{app.reviews}</p></div>
          </div>

          <button 
            disabled={isInstalled}
            onClick={handleInstall}
            className={`px-10 py-3 rounded-lg font-bold text-white transition ${isInstalled ? "bg-gray-400 cursor-not-allowed" : "bg-emerald-400 hover:bg-emerald-500"}`}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-bold mb-4">Ratings</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer>
            <BarChart layout="vertical" data={app.ratings}>
              <XAxis type="number" hide />
              <YAxis dataKey="name" type="category" width={60} />
              <Tooltip cursor={{fill: 'transparent'}} />
              <Bar dataKey="count" fill="#f97316" radius={[0, 10, 10, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p className="text-gray-600 leading-relaxed">{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;