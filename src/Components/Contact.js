import React from "react";

const Contact = () => {
  return (
    <div className="mb-12">
      <div class="card w-[90vw] lg:w-[650px]    shadow-xl mx-auto bg-gradient-to-r from-primary to-secondary text-white">
        <div class="card-body">
          <h2 class="card-title text-center mx-auto">Contact Us</h2>
          <form className="flex flex-col my-6">
            <div class="form-control w-full max-w-xs mx-auto">
              <label class="label">
                <span class="label-text font-bold text-white">Name</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter Your Name"
                class="input text-white bg-transparent input-bordered w-full max-w-xs border-primary shadow-lg"
              />
            </div>
            <div class="form-control w-full max-w-xs my-2 mx-auto">
              <label class="label">
                <span class="label-text font-bold text-white">Email</span>
              </label>
              <input
                type="text"
                required
                placeholder="Enter Your Email"
                class="input text-white bg-transparent input-bordered w-full max-w-xs border-primary shadow-lg"
              />
            </div>
            <div class="form-control w-full max-w-xs my-2 mx-auto">
              <label class="label">
                <span class="label-text text-white font-bold">Message</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24 bg-transparent shadow-lg border-0"
                placeholder="Your Message"
                style={{ resize: "none" }}
                required
              ></textarea>
            </div>
            <div className="form-control w-full max-w-xs mx-auto flex justify-end my-2">
              <button className="btn btn-dark btn-outline text-white">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
