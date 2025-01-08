"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Custom404() {
  const router = useRouter();

  // Redirect to home after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/");
    }, 30000);
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-7xl font-bold text-primary">404</h1>
      <p className="text-2xl text-gray-700 mt-6">
        Oops! This page is still under construction.
      </p>
      <p className="text-lg mt-4 text-center max-w-lg">
        🚧 We&apos;re building something amazing here. In the meantime, feel free to
        reach out if you have any questions or inquiries!
      </p>
      <div className="mt-8 text-center">
        <p className="text-xl font-semibold">Reaching Out is Easy:</p>
        <p className="mt-2 text-lg">📞 <a href="tel:+27715867165" className="underline text-blue-600">071 586 7165</a></p>
        <p className="mt-1 text-lg">📧 <a href="mailto:refiloevaliant@gmail.com" className="underline text-blue-600">refiloevaliant@gmail.com</a></p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <FaLinkedin className="text-3xl text-blue-700" />
          <a
            href="https://www.linkedin.com/in/valiant-khoza-189aa5182/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-600 text-lg"
          >
            Connect with me on LinkedIn
          </a>
        </div>
      </div>
      <Link
        href="/"
        className="mt-8 bg-primary hover:bg-accent text-white px-6 py-3 rounded-full transition"
      >
        Return to Home
      </Link>
      <p className="mt-12 text-sm text-gray-500">
        Built by <span className="font-medium">Valiant Devs</span>
      </p>
    </div>
  );
}
