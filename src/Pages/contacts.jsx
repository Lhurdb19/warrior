import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlinePhoneInTalk } from "react-icons/md";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"; 
import { HiOutlineChevronDoubleRight } from "react-icons/hi2";
import { FaCirclePlus } from "react-icons/fa6";
import { faqData } from "../Libs/faqData"; 
import "./Contact.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [openIndex, setOpenIndex] = useState(null);

  const handleQuestionClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="contact-container">
      {/* Contact Links */}
      <div className="contact-wrapper">
        <h2>Contact us for more information</h2>
        <div className="contact-links">
          <Link to="/about">About Us</Link>
          <Link to="/service">Service</Link>
          <Link to="/events">Events</Link>
        </div>
      </div>

      {/* Address Section */}
      <div className="address-wrapper">
        <div className="address-container">
          <span>
            <h5>Email:</h5>
            <a href="mailto:webwarrior868@gmail.com">Email Address</a>
          </span>
        </div>

        {/* Form */}
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-wrapper">
              <div className="form-input">
                <label>First Name</label>
                <input type="text" {...register("firstName", { required: true })} />
                {errors.firstName && <p className="error-text">First Name is required</p>}
              </div>

              <div className="form-input">
                <label>Last Name</label>
                <input type="text" {...register("lastName", { required: true })} />
                {errors.lastName && <p className="error-text">Last Name is required</p>}
              </div>

              <div className="form-input">
                <label>Phone</label>
                <input type="tel" {...register("phone", { required: true })} />
                {errors.phone && <p className="error-text">Phone is required</p>}
              </div>

              <div className="form-input">
                <label>Email</label>
                <input type="email" {...register("email", { required: true })} />
                {errors.email && <p className="error-text">Email is required</p>}
              </div>
            </div>

            <div className="textarea-container">
              <label>Message</label>
              <textarea {...register("message", { required: true })}></textarea>
              {errors.message && <p className="error-text">Message is required</p>}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-container">
        <span className="faq-icon-text">
          <FaCirclePlus className="faq-icon" />
          <h2>Frequently Asked Questions</h2>
        </span>

        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div 
                className="faq-question" 
                onClick={() => handleQuestionClick(index)}
              >
                <HiOutlineChevronDoubleRight className={`faq-toggle-icon ${openIndex === index ? "rotate" : ""}`} />
                <h4>{faq.question}</h4>
              </div>

              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
