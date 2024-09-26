"use client";

import React, { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) {
      return;
    }

    const form = e.target as HTMLFormElement;
    const formvalues = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    setSuccessMessage("");

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(formvalues),
      }).then((Response) => {
        if (!Response.ok) {
          throw new Error("HTTP erro! Status: ${response.status}");
        }
        return Response.json();
      });

      setLoading(false);
      setSuccessMessage("thank you for contacting us!");

      form.reset();
    } catch (err) {
      console.error(err);
      alert("An error occured while sending your message...");
      setLoading(false);
    }
  };
  return (
    <div>
      <h1 className="text-3xl text-gray-800 font-extrabold text-center">
        Contactez-nous!
      </h1>
      <div>
        <h1 className="text-4xl font-bold text-white">Get in Touch</h1>
        <p className="text-sm text-gray-300 mt-4 leading-relaxed">
          Have some big idea or brand to develop and need help? Then reach out
          we'd love to hear about your project and provide help.
        </p>

        <ul className="mt-12 space-y-8">
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              viewBox="0 0 479.058 479.058"
            >
              <path
                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                data-original="#000000"
              />
            </svg>
            <a href="javascript:void(0)" className="text-white text-sm ml-4">
              info@example.com
            </a>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              viewBox="0 0 482.6 482.6"
            >
              <path
                d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                data-original="#000000"
              ></path>
            </svg>
            <a href="javascript:void(0)" className="text-white text-sm ml-4">
              +237 693633626
            </a>
          </li>
          <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16px"
              height="16px"
              fill="#fff"
              viewBox="0 0 368.16 368.16"
            >
              <path
                d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                data-original="#000000"
              ></path>
              <path
                d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                data-original="#000000"
              ></path>
            </svg>
            <a href="javascript:void(0)" className="text-white text-sm ml-4">
              123 Street 256 House
            </a>
          </li>
        </ul>
        <div className="bg-green-50 font-[sans-serif] lg:h-screen">
          <div className="grid lg:grid-cols-3 items-center max-lg:justify-center gap-6 h-full sm:p-12 p-8 max-sm:p-4">
            <div className="max-w-lg max-lg:mx-auto max-lg:text-center max-lg:mb-6">
              <h2 className="text-4xl font-extrabold text-gray-800">
                Get In Touch
              </h2>
              <p className="text-sm text-gray-600 mt-4 leading-relaxed">
                Have a specific inquiry or looking to explore new opportunities?
                Our experienced team is ready to engage with you.
              </p>

              <form
                onSubmit={onSubmit}
                className="mx-auto mt-8 bg-white rounded-lg p-6 shadow-md space-y-4"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md h-12 px-6 bg-[#f0f1f2] text-sm outline-none"
                />
                <textarea
                  placeholder="Message"
                  rows={6}
                  className="w-full rounded-md px-6 bg-[#f0f1f2] text-sm pt-3 outline-none"
                ></textarea>
                <button
                  disabled={loading}
                  type="button"
                  className="text-gray-800 bg-green-200 hover:bg-green-300 font-semibold rounded-md text-sm px-6 py-3 block w-full"
                >
                  Send Message
                </button>
                {successMessage && <p>{successMessage}</p>}
              </form>
            </div>

            <div className="z-10 relative lg:col-span-2">
              <Image
                src=""
                alt=""
                width={4}
                height={4}
                className="w-3/4 object-contain block mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
