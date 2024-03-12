import React, { useState } from "react";

const EmailModal = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = () => {
    // Perform email sending logic here
    console.log("Email:", email);
    console.log("Message:", message);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 bg-white  ${
        showModal ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className=" rounded-2xl  w-1/2">
          <button
            className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 rounded-full p-2 transition-all duration-300"
            onClick={handleCloseModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-2xl font-semibold mb-4 text-dark_grey_p">
            Want to reach out?
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1 text-dark_grey_p"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-2xl w-full px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-lg font-semibold mb-1 text-dark_grey_p"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border border-gray-300 rounded-2xl w-full px-3 py-2 h-36 "
              ></textarea>
            </div>
            <div className="flex items-center mb-4"></div>
            <button
              type="submit"
              className="bg-blue_p text-white px-4 py-2 rounded-full"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
