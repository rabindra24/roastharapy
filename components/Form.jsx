"use client";

import React from "react";
import { useState } from "react";

const Form = () => {
  const data = [
    {
      id: 1,
      value: "Webinar/ Course Selling",
    },
    {
      id: 2,
      value: "Landing Page",
    },
    {
      id: 3,
      value: "Poster Design",
    },
    {
      id: 4,
      value: "Poster Design",
    },
    {
      id: 5,
      value: "Influencer Marketing",
    },
    {
      id: 6,
      value: "Apparels Photoshoot",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
  });

  const formHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/rabindra/google_sheets/aPwFdVzxqVgaNeeb?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[formData.name, formData.email, formData.message, formData.company, formData.number],]),
        }
      );

      await response.json();
      setFormData({
        name: "",
        email: "",
        message: "",
        company: "",
        number: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative" id="contact">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-[3rem] text-2xl font-medium title-font mb-4 text-gray-900">
              READY TO GROW YOUR BUSINESS?
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Get idea about our premium Performance Marketing Services
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={formHandler} method="post" className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full border p-2 rounded-md"
                    value={formData.name}
                    required
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    name="email"
                    className="w-full border p-2 rounded-md"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="tel"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    required
                    name="Number"
                    className="w-full border p-2 rounded-md"
                    value={formData.number}
                    onChange={(e) =>
                      setFormData({ ...formData, number: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full border p-2 rounded-md"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-2 w-full hidden">
                <h6 className="mb-3">What are you loking for ?</h6>
                {/* <div className="relative ">
                  {data.map((item, idx) => (
                    <div key={idx}>
                      <label
                        htmlFor="webdesign"
                        className="leading-7 text-sm text-gray-600"
                      >
                        {item.value}
                      </label>

                      <input
                        type="checkbox"
                        id="vehicle1"
                        name="vehicle1"
                        value="Bike"
                        className="mx-2"
                      />
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full border p-2 rounded-md"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="bg-yellow-500 p-2 px-4 rounded-lg text-black">
                  Submit
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">roastharapy@email.com</a>
                <p className="leading-normal my-5">
                  
                  Near Police Station Parasia , 480441
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a className="ml-4 text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Form;
