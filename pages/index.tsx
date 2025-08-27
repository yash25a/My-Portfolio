import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const techStack = [
    { name: "JavaScript", icon: "/images/javascript.svg" },
    { name: "React", icon: "/images/react.svg" },
    { name: "TypeScript", icon: "/images/typescript.svg" },
    { name: "Next.js", icon: "/images/nextjs.svg" },
    { name: "Tailwind CSS", icon: "/images/tailwind.svg" },
    { name: "Vue.js", icon: "/images/vue.svg" },
    { name: "Docker", icon: "/images/docker.svg" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition">
      <header className="w-full p-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">MyPortfolio</h1>
        <nav className="space-x-4">
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#tech" className="hover:text-blue-500">Tech Stack</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded bg-gray-200 dark:bg-gray-800"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="flex flex-col items-center text-center py-16" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold">👋 Hi, I'm Yash</h2>
        <p className="mt-4 text-lg max-w-xl">
          A Frontend Developer passionate about building responsive, modern web apps with 
          <span className="text-blue-500 font-semibold"> React</span>, 
          <span className="text-cyan-400 font-semibold"> Next.js</span>, and 
          <span className="text-teal-500 font-semibold"> Tailwind CSS</span>.
        </p>
        <div className="mt-6 flex gap-4" data-aos="zoom-in">
          <a href="/resume.pdf" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">📄 Resume</a>
          <a href="#contact" className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">📬 Contact</a>
        </div>
      </section>

      <section id="tech" className="py-12 w-full max-w-5xl px-4" data-aos="fade-right">
        <h3 className="text-3xl font-bold text-center mb-8">⚡ Tech Stack</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {techStack.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center space-y-2" data-aos="flip-up">
              <Image src={tech.icon} alt={tech.name} width={60} height={60} />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="py-12 w-full max-w-lg px-4" data-aos="fade-left">
        <h3 className="text-3xl font-bold text-center mb-6">📩 Contact Me</h3>
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            data-aos="fade-up"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="100"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="p-3 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            data-aos="fade-up"
            data-aos-delay="200"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            data-aos="zoom-in"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="w-full py-6 text-center border-t border-gray-300 dark:border-gray-700 mt-10">
        © {new Date().getFullYear()} Built with Next.js & Tailwind
      </footer>
    </div>
  );
}
