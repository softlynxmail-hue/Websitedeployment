export default function Services() {
  const services = [
    {
      title: "Snowflake Development",
      desc: "Design, migration, performance tuning, and cost optimization.",
    },
    {
      title: "Cloud Data Engineering",
      desc: "AWS-based scalable pipelines and modern data platforms.",
    },
    {
      title: "AI & Automation",
      desc: "AI-driven workflows, chatbots, and automation solutions.",
    },
    {
        title: "Training & Internship Programs",
        desc: "Upskill talent with hands-on training and real-world projects.",
        items: [
          "Fresher internship programs",
          "Corporate and individual trainings on Snowflake, AWS, Python, Data Engineering & Analytics, AI & ML",
        ],
      },
      {
        title: "Managed Support & Customer Care",
        desc: "Reliable support for data platforms and customer services.",
        items: [
          "Customer care & technical support",
          "Ongoing monitoring & maintenance of data pipelines",
          "Flexible support based on client requirements",
        ],
      },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-extrabold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((s, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl">
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
