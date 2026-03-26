import { useState } from "react";
import appsData from "../data/apps.json";
import AppCard from "../components/Common/AllApps/AppCard";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  const filteredApps = appsData
    .filter(app => app.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "high-low") return b.downloads - a.downloads;
      if (sort === "low-high") return a.downloads - b.downloads;
      return 0;
    });

  return (
    <div className="max-w-7xl mx-auto p-8">
      <div className="text-center my-10">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <p className="text-gray-500 mt-2">Explore All Apps on the Market developed by us.</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-xl font-bold">({filteredApps.length}) Apps Found</h2>
        
        <div className="flex gap-4 w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Search Apps..." 
            className="border p-2 rounded-lg w-full md:w-64 focus:outline-purple-500"
            onChange={(e) => setSearch(e.target.value)}
          />
          <select onChange={(e) => setSort(e.target.value)} className="border p-2 rounded-lg bg-white">
            <option value="">Sort By Downloads</option>
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </div>
      </div>

      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredApps.map(app => <AppCard key={app.id} app={app} />)}
        </div>
      ) : (
        <div className="text-center py-20">
          <img src="/src/assets/app-not-found.png" className="mx-auto w-64" alt="Not Found" />
          <h2 className="text-2xl font-bold mt-4">OPPS!! APP NOT FOUND</h2>
        </div>
      )}
    </div>
  );
};
export default AllApps;