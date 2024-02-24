"use client";
import React from "react";
import emailjs from "@emailjs/browser"; 

const Contact = () => {
  const [errMsg, setErrMsg] = React.useState<string>("");
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
    setErrMsg("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrMsg("Please fill in all fields");
      return;
    }

    if (!email.includes("@") && !email.includes(".")) {
      setErrMsg("Please enter a valid email address");
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
      setErrMsg("Your message has been sent. Thank you for reaching out.");
      setTimeout(() => {
        setErrMsg("");
       }, 3000);
      setFormValues(initialFormValues);
    } catch (error) {
      setErrMsg("An error occurred. Please try again");
    }
  };
  return (
    <section
      id="contact"
      className="flex justify-center mt-20 px-4 bg-primary pb-4"
    >
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mt-5 text-white">Contact</h2>
        <p className="text-lg mt-5 text-white">
          Let's talk about how we can help you.
        </p>
        <form onSubmit={handleSubmit} className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-primary"
              />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-white">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              value={formValues.message}
              onChange={handleChange}
              className="w-full p-2 mt-1 border border-gray-300 rounded-md outline-primary"
            ></textarea>
          </div>
          <div className="flex justify-end mt-5 h-5">
            {errMsg && (
              <p className="text-end text-sm text-red-500 bg-white px-2 rounded-sm">{`* ${errMsg}`}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-primary inline-block relative pr-9 text-white border border-solid border-y-white px-6 py-1 mt-2 rounded-md"
          >
            Send Message{" "}
            <i className="bx bx-right-arrow-alt absolute top-2"></i>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
