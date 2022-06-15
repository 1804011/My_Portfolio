import React, { useRef } from "react";
import emailjs from "emailjs-com";
const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const msgRef = useRef("");
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_04ptz7f",
        "template_7zs7d04",
        e.target,
        "X9Az974ExDT3f7IQb"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const msg = msgRef.current.value;
  };
  return (
    <div className="mb-12" id="contact">
      <div class="card w-[90vw] lg:w-[650px]    shadow-xl mx-auto bg-gradient-to-r from-primary to-secondary text-white">
        <div class="card-body">
          <h2 class="card-title text-center mx-auto">Contact Us</h2>
          <form className="flex flex-col my-6" onSubmit={handleSubmit}>
            <div class="form-control w-full max-w-xs mx-auto">
              <label class="label">
                <span class="label-text font-bold text-white">Name</span>
              </label>
              <input
                type="text"
                ref={nameRef}
                required
                name="name"
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
                ref={emailRef}
                required
                name="email"
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
                ref={msgRef}
                name="message"
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
