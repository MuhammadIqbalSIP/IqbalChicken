"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faInbox,
  faPhone,
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// navbar play
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-neutral-900 bg-opacity-75 p-4 border-b-2 border-yellow-300 fixed top-0 left-0 right-0 z-[999]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white font-bold italic text-2xl hover:underline">
            Iqbal<span className="text-yellow-300">Chicken</span>
          </h1>
          <ul className={`hidden md:flex ml-4 space-x-4 text-white size-6`}>
            <li>
              <a href="#home" className="hover:underline hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:underline hover:text-yellow-300"
              >
                About
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:underline hover:text-yellow-300">
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:underline hover:text-yellow-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4 text-white">
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
          </button>
          <button className="focus:outline-none">
            <FontAwesomeIcon icon={faShoppingCart} className="w-5 h-5" />
          </button>
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faHamburger} className="w-5 h-5" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2 text-white">
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                className="block hover:underline hover:text-yellow-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block hover:underline hover:text-yellow-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="block hover:underline hover:text-yellow-300"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:underline hover:text-yellow-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
// navbar end

export default function Page() {
  return (
    <div>
      <Navbar />
      <div className="bg-[#1a1c1f]">
        {/* home play */}
        <section
          id="home"
          className="bg-cover bg-center min-h-screen flex items-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1638439430466-b2bb7fdc1d67?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <main className="p-16 leading-6">
            <h1 className="text-4xl mb-4 font-extrabold text-white">
              Mau makan enak ?<br /> tapi gak bikin kantong bolong
              <br />
              cobain deh makan di
              <span className="text-yellow-300"> IqbalChicken.</span>
            </h1>
            <p className="text-white font-light text-[1,6rem] mt-4 leading-6 mix-blend-difference">
              IqbalChicken berdiri sejak 2024.
              <br />
              yang di rintis oleh seorang anak muda bernama Iqbal
              <br />
              yang memiliki latar belakang yang cukup menyedihkan.
              <br />
              tetapi anak itu mampu bangkit dan berhasil membesarkan
              <br />
              IqbalChicken sampai saat ini.
            </p>
            <br />
            <button
              className="flex flex-wrap gap-2 text-base font-semibold text-black bg-yellow-300 py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 ease-in-out duration-300"
              onClick={() =>
                (window.location.href =
                  "https://wa.me/6281234567890?text=Halo,saya ingin memesan ayam dari IqbalChicken.")
              }
            >
              Pesan Disini
            </button>
          </main>
        </section>
        {/* home end */}

        {/* about play */}
        <section id="about" className="p-8 md:p-32 text-white">
          <h2 className="text-center text-4xl mb-12 font-extrabold">
            <span className="text-yellow-300">Tentang</span> kami
          </h2>
          <div className="md:flex">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/ayam2.jpg"
                alt="Tentang kami"
                width={500}
                height={200}
                className="rounded-md w-full"
              />
            </div>
            <div className="md:ml-8 md:w-1/2">
              <h3 className="text-3xl mb-4 font-semibold">
                Kenapa harus cobain Iqbal
                <span className="text-yellow-300">Chicken</span>?
              </h3>
              <p className="mb-3 text-[1,3rem] font-thin leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae
              </p>
              <p className="mb-3 text-[1,3rem] font-thin leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae
              </p>
            </div>
          </div>
        </section>
        {/* about end */}

        {/* menu play */}
        <section id="menu" className="p-8 md:p-32 text-white">
          <h2 className="text-center text-4xl mb-8 font-extrabold">
            <span className="text-yellow-300">Menu</span> kami
          </h2>
          <p className="items-center max-w-[30rem] m-auto text-[1,5rem] font-thin leading-6 text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
          <div className="flex flex-wrap justify-center">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="text-center pb-6 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 px-4"
              >
                <Image
                  src="/ayam.jpg"
                  alt="ayam geprek"
                  width={200}
                  height={200}
                  className="rounded-full w-full"
                />
                <h3 className="m-4">-Ayam Bakar-</h3>
                <p className="font-thin">RP.10.000</p>
              </div>
            ))}
          </div>
        </section>
        {/* menu end */}

        {/* contact play */}
        <section
          id="contact"
          className="p-8 md:p-24 text-white container mx-auto"
        >
          <h2 className="text-center text-4xl mb-8 font-extrabold">
            <span className="text-yellow-300">Kontak</span> kami
          </h2>
          <p className="items-center max-w-[30rem] m-auto text-[1,5rem] font-thin leading-6 text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            ante ipsum primis in faucibus orci luctus et ultrices.
          </p>
          <div className="md:flex bg-black object-cover m-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.9204153556682!2d98.47962378301557!3d3.6238197187149312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3030d5fe47534de9%3A0xc29bd66d97ec6082!2sPaya%20Roba%2C%20Kec.%20Binjai%20Bar.%2C%20Kota%20Binjai%2C%20Sumatera%20Utara%2020745!5e0!3m2!1sid!2sid!4v1719987443854!5m2!1sid!2sid"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="md:w-1/2 mb-8 md:mb-0 md:mr-4 border-2 border-yellow-300"
            ></iframe>
            <div className="p-4 md:p-8 flex flex-col justify-between md:w-1/2">
              <div>
                <h4 className="text-2xl mb-4 font-bold">Alamat</h4>
                <p className="font-thin mb-4">
                  Jl.Kentang,Griya Payaroba Block . 1 No . 11 Binjai Barat, Kota
                  Binjai, Sumatera Utara.
                </p>
              </div>
              <div>
                <h4 className="text-2xl mb-4 font-bold">Kontak</h4>
                <p className="font-thin mb-2 flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="mr-2" />
                  081275303753
                </p>
                <p className="font-thin mb-4 flex items-center">
                  <FontAwesomeIcon icon={faInbox} className="mr-2" />
                  iqbal29wiguna@gmail.com
                </p>
              </div>
              <div>
                <h4 className="text-2xl mb-4 font-bold">Follow Kami</h4>
                <div className="flex space-x-4">
                  <a href="#" className="text-white hover:text-yellow-300">
                    <FontAwesomeIcon icon={faFacebook} className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-300">
                    <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-white hover:text-yellow-300">
                    <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* contact end */}

        {/* footer play */}
        <footer className="bg-yellow-300 text-center p-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="#home"
              className="text-neutral-900 hover:text-white hover:underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-neutral-900 hover:text-white hover:underline"
            >
              About
            </a>
            <a
              href="#menu"
              className="text-neutral-900 hover:text-white hover:underline"
            >
              Menu
            </a>
            <a
              href="#contact"
              className="text-neutral-900 hover:text-white hover:underline"
            >
              Contact
            </a>
          </div>

          <div className="mt-4">
            <p className="text-neutral-900">
              Created by{" "}
              <a href="#" className="text-blue-700 hover:underline">
                Muhammad Iqbal
              </a>{" "}
              | &copy; 2024
            </p>
          </div>
        </footer>
        {/* footer end */}
      </div>
    </div>
  );
}
