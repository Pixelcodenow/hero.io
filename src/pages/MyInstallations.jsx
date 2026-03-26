import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
  }, []);

  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter(app => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.error("App Uninstalled Successfully!");
  };

  return (
    <div className="max-w-6xl mx-auto p-8 min-h-[70vh]">
      <h1 className="text-5xl font-bold text-center mt-10">Your Installed Apps</h1>
      <p className="text-center text-gray-500 mt-4 mb-12">Explore All Trending Apps on the Market developed by us</p>

      <h2 className="text-2xl font-bold mb-6">{installedApps.length} Apps Found</h2>

      <div className="space-y-4">
        {installedApps.length > 0 ? (
          installedApps.map(app => (
            <div key={app.id} className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border">
              <div className="flex items-center gap-6">
                <img src={app.image} className="w-16 h-16 rounded-xl" alt="" />
                <div>
                  <h3 className="text-xl font-bold">{app.title}</h3>
                  <div className="flex gap-4 text-emerald-500 text-sm font-medium mt-1">
                    <span>↓ {app.downloads}</span>
                    <span>★ {app.ratingAvg}</span>
                    <span>{app.size} MB</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => handleUninstall(app.id)}
                className="bg-emerald-400 text-white px-6 py-2 rounded-lg font-bold hover:bg-red-500 transition"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl">
             <p className="text-xl text-gray-400 font-medium">No apps installed yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyInstallations;