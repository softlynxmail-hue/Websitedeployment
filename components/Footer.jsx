export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">

        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Softlynx DataWorks Pvt Ltd
          </h3>
          <p className="text-sm">
            Seamless data journeys in the cloud with Snowflake, AWS & AI.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <p className="text-sm mb-2">contactus@softlynxdataworks.com</p>
          <address className="not-italic text-sm leading-relaxed">
            1/110D, Pendlimarri (v), Pendlimarri, <br />
            Cuddapah, Andhra Pradesh, India - 516216
          </address>
        </div>

      </div>

      <div className="text-center text-sm border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Softlynx DataWorks. All rights reserved.
      </div>
    </footer>
  );
}
