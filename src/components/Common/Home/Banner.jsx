import mobileMockup from "../../../assets/hero.png";

const Banner = () => {
  return (
    <section className="text-center py-16 px-4 bg-white">
      <h1 className="text-5xl font-extrabold text-slate-900 mb-4">
        We Build <span className="text-purple-600">Productive</span> Apps
      </h1>
      <p className="text-gray-500 max-w-2xl mx-auto mb-8">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
      </p>
      
      <div className="flex justify-center gap-4 mb-12">
        <button className="flex items-center gap-2 border px-6 py-2 rounded-xl hover:shadow-md transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
        </button>
        <button className="flex items-center gap-2 border px-6 py-2 rounded-xl hover:shadow-md transition">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
        </button>
      </div>

      <div className="relative inline-block">
        <img src={mobileMockup} alt="Mobile App" className="w-64 md:w-80 mx-auto" />
      </div>
    </section>
  );
};

export default Banner;