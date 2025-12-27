export default function Home() {
  return (
    <>
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
            className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-10">
        {[
          "Snowflake migrations & optimization",
          "AWS ETL pipelines & automation",
          "AI-powered analytics & chatbots",
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow hover:shadow-xl">
            <h3 className="font-bold text-lg mb-2">{item}</h3>
            <p className="text-gray-600 text-sm">
              Enterprise-grade scalable data solutions.
            </p>
          </div>
        ))}
      </section>
    </>
  );
}


