"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import chatBot from "@public/images/chatbot.png";

interface ContactPopupProps {
  func: Function;
}

const ContactPopup = (props: ContactPopupProps) => {
  const { func } = props;

  const [msg, setMsg] = React.useState<string>(
    "Hi there👋🏾! Please provide your name, email, and message, and we will respond to you promptly. 😁"
  );
  const [formValues, setFormValues] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setMsg(
      "Please provide your name, email, and message, and we will respond to you promptly."
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setMsg("Please fill in all fields.");
      return;
    }

    if (!email.includes("@") && !email.includes(".")) {
      setMsg("Please enter a valid email address.");
      return;
    }

    try {
      const emailReq = {
        serviceId: "service_xiiuh92",
        templateId: "template_jyf4vao",
        publicKey: "ASk8RFKbvN7njRovg",
      };
      const templateParams = {
        from_name: name,
        from_email: email,
        to_name: "Omogbare",
        message,
      };

      await emailjs.send(
        emailReq.serviceId,
        emailReq.templateId,
        templateParams,
        emailReq.publicKey
      );

      const initialFormValues = { name: "", email: "", message: "" };
      setMsg("Your message has been sent. Thank you for reaching out.");
      setTimeout(() => {
        setMsg("Have a great day!");
      }, 3000);
      setFormValues(initialFormValues);
    } catch (error) {
      setMsg("An error occurred. Please try again");
    }
  };

  return (
    <section>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
        <div className="bg-white rounded-md w-11/12 md:w-1/2 lg:w-1/3">
          <div className="bg-primary p-2 rounded-sm flex items-center gap-2 relative shadow-sm">
            <Image
              src={chatBot}
              alt="chatbot"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-white text-sm font-semibold">Chatbot</span>
            <i
              onClick={() => func()}
              className="bx bx-x cursor-pointer text-2xl absolute right-2 text-white"
            ></i>
          </div>

          <div className="p-7">
            <p className="p-2 bubble text-white text-sm rounded-md mt-2">
              {msg}
            </p>
          </div>
          <form className="mt-4 p-8" id="contact-form" onSubmit={handleSubmit}>
            <div className="mb-2">
              <input
                type="text"
                name="name"
                id="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name" 
                className="w-full border outline-primary border-gray-300 rounded-sm text-xs p-2"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border outline-primary border-gray-300 rounded-sm text-xs p-2"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="message"
                id="message"
                value={formValues.message}
                onChange={handleChange}
                placeholder="Compose message..."
                className="w-full border outline-primary border-gray-300 rounded-sm p-2 text-xs"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPopup;
