import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link href="/" className="flex items-center gap-3">
          <Logo />
          <span className="font-bold text-xl text-primary">
            DataWorks
          </span>
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </div>

        <Link
          href="/contact"
          className="bg-primary text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
