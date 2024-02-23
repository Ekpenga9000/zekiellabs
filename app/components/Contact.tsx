import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className="flex justify-center mt-20 bg-primary pb-4">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold mt-5 text-white">Contact</h2>
        <p className="text-lg mt-5 text-white">
          Let's talk about how we can help you.
        </p>
        <form action="" className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-white">Name</label>
              <input type="text" id="name" className="w-full p-2 mt-1 border border-gray-300 rounded-md" />
            </div>
            <div>
              <label htmlFor="email" className="block text-white">Email</label>
              <input type="email" id="email" className="w-full p-2 mt-1 border border-gray-300 rounded-md" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="block text-white">Message</label>
            <textarea name="message" id="message" className="w-full p-2 mt-1 border border-gray-300 rounded-md"></textarea>
          </div>
          <button type="submit" className="bg-primary inline-block relative pr-9 text-white border border-solid border-y-white px-6 py-1 mt-5 rounded-md">
            Send Message <i className="bx bx-right-arrow-alt absolute top-2"></i>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact; 