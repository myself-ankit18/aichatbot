"use client";

import {
  MessageCircle,
  Globe,
  School,
  BookOpen,
  IndianRupee,
  Award,
  Building,
  Sun,
  Moon,
  Briefcase,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Component() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`flex flex-col min-h-screen `}>
      <header className="px-4 lg:px-6 h-14 flex items-center border-b dark:border-gray-700 bg-white dark:bg-[#000535] fixed w-[100vw] z-10 ">
        <a className="flex items-center justify-center" href="#">
          <School className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className=" ml-2 text-lg font-bold text-black dark:text-white">
            Vidya
          </span>
        </a>
        <nav className="ml-auto justify-between flex sm:gap-1">
          <a
            className="inline-block px-2 py-1 rounded hover:bg-blue-50 text-black dark:text-gray-300 dark:hover:bg-gray-800"
            href="#"
          >
            Home
          </a>
          <a
            className="inline-block px-2 py-1 rounded hover:bg-blue-50 text-black dark:text-gray-300 dark:hover:bg-gray-800"
            href="#"
          >
            About
          </a>
          <a
            className="inline-block px-2 py-1 rounded hover:bg-blue-50 text-black dark:text-gray-300 dark:hover:bg-gray-800"
            href="/components/service"
          >
            Service
          </a>
          <div
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 cursor-pointer rounded-full text-black dark:text-white mt-[0.4em]"
          >
            {darkMode ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </div>
        </nav>
      </header>
      <section className="max-w-screen-2xl h-[0.1rem] bg-slate-900 dark:bg-blue-200"></section>

      <main className="flex-1">
        <section className="w-full py-16 md:py-20 lg:py-20 xl:py-20 bg-blue-100 dark:bg-[#00021F] flex justify-center px-10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
              <div className="space-y-4 text-center md:text-left md:w-1/2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800 dark:text-blue-300">
                  Your 24/7 Guide to Technical Education in Rajasthan
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-300 md:text-xl">
                  Get instant answers about admissions, colleges, fees, and more
                  with our AI-powered chatbot - Vidya for the Department of
                  Technical Education, Government of Rajasthan.
                </p>
                <div className="space-x-4 w-max m-auto mt-2">
                  <a
                    href="#"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
                  >
                    Start Chatting
                  </a>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800"
                  >
                    Learn More
                  </a>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center pr-6">
                <img
                  src="/chatbot.svg"
                  alt="3D Chatbot"
                  className="lg:w-full md:w-[130%] w-[100%] max-w-2xl h-auto pt-2"
                  style={{
                    animation: "float 3s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl h-[0.2rem] bg-slate-900 dark:bg-blue-200"></section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900 flex justify-center"
        >
          <div className="container px-4 md:px-6 ">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  24/7 Availability
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get answers anytime, day or night, without waiting.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Multilingual Support
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Communicate in Hindi, English, or Rajasthani.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Comprehensive Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access details on admissions, colleges, courses, and more.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <IndianRupee className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Fee Structures
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get accurate information on fees for different programs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Scholarship Details
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn about available scholarships and eligibility criteria.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Briefcase className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Placement Insights
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Explore job placement opportunities and success stories.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-[#00021F] flex justify-center items-center"
        >
          <div className="container px-4 md:px-6 flex justify-center items-center flex-col">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              See It In Action
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-[100%]">
              <div className="w-full md:w-1/2 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  Chat Demo
                </h3>
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg mb-4">
                  <p className="text-gray-800 dark:text-gray-200">
                    User: What are the top engineering colleges in Rajasthan?
                  </p>
                </div>
                <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-lg">
                  <p className="text-gray-800 dark:text-gray-200">
                    Vidya: The top engineering colleges in Rajasthan include:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mt-2">
                    <li>IIT Jodhpur</li>
                    <li>MNIT Jaipur</li>
                    <li>BITS Pilani</li>
                    <li>RTU Kota</li>
                    <li>LNMIIT Jaipur</li>
                  </ul>
                </div>
              </div>
              {/* <div className="w-full md:w-1/2"> */}
              {/* <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Chatbot Interface"
                  className="w-full h-auto rounded-lg shadow-lg"
                /> */}
              {/* </div> */}
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl h-[0.2rem] bg-slate-900 dark:bg-blue-200"></section>
        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-slate-900 flex justify-center"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
              Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <BookOpen className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Comprehensive Information
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Access detailed info about courses, colleges, and admissions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <IndianRupee className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Fee Structure Clarity
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Get clear information about fees and financial aid options.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Career Guidance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Receive insights on career prospects for different courses.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Building className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                  Campus Life Info
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Learn about facilities, hostels, and campus culture.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl h-[0.2rem] bg-slate-900 dark:bg-blue-200 "></section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-[#00021F] flex justify-center">
          <div className="container px-4 md:px-6 ">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-800 dark:text-blue-300">
                Ready to Get Started?
              </h2>
              <p className="max-w-[600px] text-gray-600 dark:text-gray-300 md:text-xl">
                Start chatting with our AI assistant now and get all your
                questions about technical education in Rajasthan answered
                instantly.
              </p>
              <a
                href="#"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Launch Vidya
              </a>
            </div>
          </div>
        </section>
        <section className="max-w-screen-2xl h-[0.1rem] bg-slate-900 dark:bg-blue-200"></section>
      </main>
      <footer className="bg-white dark:bg-[#000535] py-4 flex justify-center">
        <div className="container px-4 md:px-6 text-center flex justify-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Vidya. All rights reserved.
          </p>
        </div>
      </footer>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}
