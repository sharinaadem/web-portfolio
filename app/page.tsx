"use client";

import Head from 'next/head'
import Image from 'next/image'
import { User, Layers, Briefcase, Mail } from 'lucide-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Sharina Adem | Creative Developer</title>
        <meta name="description" content="Sharina Adem - Web Developer & UI/UX Designer crafting digital experiences." />
      </Head>

      <header className="bg-[#551C2E] text-white font-poppins shadow-md">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-semibold tracking-tight italic font-playfair">
            <span className="text-white/90">Dev</span>
            <span className="text-white font-light">Luxe</span>
            <span className="text-[#F9D8D8] font-semibold">.SA</span>
          </h1>
          <nav className="hidden md:flex gap-8 text-sm font-medium items-center">
            <a href="#about" className="flex items-center gap-2 hover:text-[#F9D8D8] transition">
              <User className="w-4 h-4" />
              About
            </a>
            <a href="#services" className="flex items-center gap-2 hover:text-[#F9D8D8] transition">
              <Layers className="w-4 h-4" />
              Services
            </a>
            <a href="#portfolio" className="flex items-center gap-2 hover:text-[#F9D8D8] transition">
              <Briefcase className="w-4 h-4" />
              Portfolio
            </a>
            <a href="#contact" className="flex items-center gap-2 hover:text-[#F9D8D8] transition">
              <Mail className="w-4 h-4" />
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="font-poppins">

        {/* Hero Section */}
        <section className="bg-[#FFF8F9] py-20 text-center">
          <Image
            src="/images/profile.jpg"
            alt="Sharina Adem"
            width={250}
            height={250}
            className="mx-auto rounded-full border-4 border-[#551C2E] shadow-lg"
          />
          <h2 className="text-4xl md:text-6xl mt-6 font-playfair text-[#551C2E]">
  <span className="typing-effect">Hi, I'm</span>
</h2>
<h1 className="text-5xl md:text-7xl mt-2 font-extrabold text-[#292929] font-playfair">
  <span className="typing-effect typing-effect-delay">Sharina Adem</span>
</h1>


          <p className="mt-4 text-[#555555] text-lg max-w-xl mx-auto font-poppins">
            A passionate Web Developer and Graphic Designer crafting modern & beautiful experiences.
          </p>
          <a href="#contact" className="inline-block mt-6 px-8 py-3 bg-[#551C2E] text-white rounded-lg shadow hover:opacity-90 transition">
            Let's Connect
          </a>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white text-center">
          <h2 className="text-3xl font-bold text-[#551C2E] mb-6 font-playfair">About Me</h2>
          <p className="max-w-2xl mx-auto text-[#555555] text-base md:text-lg leading-relaxed font-poppins">
            I'm an Information Technology student, with a passion for writing clean code, sleek design, and meaningful user experiences. I help brands and businesses tell their story online. Here's a guide to what I can help you with: 
          </p>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-[#FFF8F9]">
          <h2 className="text-3xl font-bold text-center text-[#551C2E] mb-10 font-playfair">Services</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {['Graphic Design', 'Logo Design', 'UI/UX'].map((service, index) => (
              <div key={index} className="bg-[#551C2E] text-white text-center py-10 rounded-full w-40 h-40 mx-auto flex items-center justify-center text-xl font-semibold shadow-lg hover:scale-105 transition">
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
<section id="portfolio" className="py-20 bg-white text-center">
  <h2 className="text-3xl font-bold text-[#551C2E] mb-10 font-playfair">Portfolio</h2>
  <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {[
      { src: "/images/portfolio1.png", alt: "TaskFlow App", label: "TaskFlow App" },
      { src: "/images/portfolio2.png", alt: "Bella Swan Fanpage", label: "Bella Swan Fanpage" },
      { src: "/images/portfolio3.png", alt: "Personal Website", label: "Personal Website" },
    ].map((item, index) => (
      <div key={index} className="rounded-xl overflow-hidden shadow-lg bg-white">
        <div className="w-full h-60 relative">
          <Image
            src={item.src}
            alt={item.alt}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="py-4">
          <h3 className="text-lg font-semibold text-[#551C2E]">{item.label}</h3>
        </div>
      </div>
    ))}
  </div>
</section>



        {/* Certificates Section 
        <section id="certificates" className="py-20 bg-[#FFF8F9] text-center">
          <h2 className="text-3xl font-bold text-[#551C2E] mb-10 font-playfair">Certificates</h2>
          <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[4, 5, 6].map((item) => (
              <div key={item} className="rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={`/images/portfolio${item}.jpg`}
                  alt={`Certificate ${item}`}
                  width={400}
                  height={300}
                  className="hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </section>
        */}
        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#551C2E] font-playfair">Get In Touch</h2>
          <p className="text-center mb-8 text-gray-600 font-poppins">Have a project or just want to chat?</p>
          <div className="flex justify-center">
            <a href="mailto:sharina.adem@carsu.edu.ph" className="inline-block px-8 py-3 bg-[#551C2E] text-white rounded-lg shadow hover:opacity-90 transition">
              Email Me
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-[#292929] text-white text-center py-4 font-poppins">
        <p>&copy; {new Date().getFullYear()} Sharina Adem. All Rights Reserved.</p>
      </footer>
    </>
  );
}
