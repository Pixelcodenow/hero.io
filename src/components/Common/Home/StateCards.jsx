const StateCards = () => {
  const stats = [
    { label: "Total Downloads", value: "29.6M", sub: "21% More Than Last Month" },
    { label: "Total Reviews", value: "906K", sub: "46% More Than Last Month" },
    { label: "Active Apps", value: "132+", sub: "31 More Will Launch" },
  ];

  return (
    <section className="bg-purple-600 py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-white text-center">
        {stats.map((stat, index) => (
          <div key={index} className="border-r border-purple-400 last:border-0">
            <p className="text-sm opacity-80 mb-1">{stat.label}</p>
            <h2 className="text-5xl font-bold mb-2">{stat.value}</h2>
            <p className="text-xs opacity-70">{stat.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StateCards;