import React from "react";

const ContactPopup = () => {
  return (
    <section>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-md w-11/12 md:w-1/2 lg:w-1/3">
          <div className="flex justify-end">
            <i className="bx bx-x cursor-pointer text-lg"></i>
          </div>
          <h2 className="text-2xl font-semibold text-center">Contact</h2>
          <form className="mt-4" id="contact-form" action="" method="post">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full border border-gray-300 rounded-md p-2"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPopup;
