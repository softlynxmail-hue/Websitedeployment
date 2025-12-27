export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-extrabold mb-6">Contact Us</h2>

      <form className="bg-white p-8 rounded-xl shadow space-y-6">
        <input className="w-full p-3 border rounded" placeholder="Name" />
        <input className="w-full p-3 border rounded" placeholder="Email" />
        <textarea className="w-full p-3 border rounded" rows="4" placeholder="Message" />
        <button className="bg-primary text-white px-6 py-3 rounded hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
