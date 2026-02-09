export default function Home() {
  const services = [
    {
      title: "Data Engineering & Cloud",
      items: [
        "Snowflake migrations & optimization",
        "AWS ETL pipelines & automation",
      ],
    },
    {
      title: "AI & Analytics",
      items: [
        "AI-powered analytics",
        "AI chatbots for web & support",
      ],
    },
    {
      title: "Training & Support",
      items: [
        "Fresher internship programs",
        "Corporate & individual trainings",
        "Customer care & technical support",
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-extrabold mb-6">
            Data Engineering • Cloud • AI
          </h1>
          <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
            We modernize data platforms using Snowflake, AWS, and AI-driven solutions.
          </p>
          <a
            href="/contact"
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-14">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-bold text-xl mb-4 text-primary">
                {service.title}
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
