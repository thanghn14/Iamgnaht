import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 px-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/fdb90f3d-e6c5-4277-9929-8ebd8cd39609"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label for="name" className="uppercase text-sm py-2">Name</label>
            <input
              className="border-2 rounded-lg p3 flex border-gray-300 outline-0 px-3 py-2"
              type="text"
              name="name"
              id="name"
            />
          </div>
          <div className="flex flex-col">
            <label for="phone" className="uppercase text-sm py-2">Phone</label>
            <input
              className="border-2 rounded-lg p3 flex border-gray-300 outline-0 px-3 py-2"
              type="number"
              name="phone"
              id="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label for="email" className="uppercase text-sm py-2">Email</label>
          <input
            className="border-2 rounded-lg p3 flex border-gray-300 outline-0 px-3 py-2"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label for="subject" className="uppercase text-sm py-2">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300 outline-0 px-3 py-2"
            type="text"
            name="subject"
            id="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label for="message" className="uppercase text-sm py-2">Message</label>
          <textarea
            className="border-2 rounded-lg p-3 border-gray-300 outline-0 px-3 py-2"
            rows="10"
            name="message"
            id="message"
          ></textarea>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg dark:md:hover:bg-[#001b5e]/90">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
