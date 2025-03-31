import React from 'react';
import Button from "../common/Button/Button";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-[800px] mx-auto">
        {/* Card Container */}
        <div className="bg-black/40 backdrop-blur-sm border border-[#CBFC58]/20 rounded-2xl p-6 md:p-10 shadow-2xl">
          <div className="space-y-12">
            {/* Heading */}
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#CBFC58] to-white bg-clip-text text-transparent mb-4">
                Contact Us
              </h1>
              <p className="text-gray-300 text-xl md:text-2xl lg:text-3xl max-w-xl mx-auto">
                Get in touch with us for any queries or support
              </p>
            </div>

            {/* Form */}
            <form className="space-y-8 max-w-2xl mx-auto">
              {/* Name Input */}
              <div>
                <label className="block text-[#CBFC58] text-xl md:text-2xl font-medium mb-3">
                  Name<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-black/50 border-2 border-[#CBFC58]/30 rounded-lg py-4 px-5 text-lg md:text-xl lg:text-2xl
                           focus:outline-none focus:border-[#CBFC58] transition-colors placeholder:text-gray-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-[#CBFC58] text-xl md:text-2xl font-medium mb-3">
                  Email<span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-black/50 border-2 border-[#CBFC58]/30 rounded-lg py-4 px-5 text-lg md:text-xl lg:text-2xl
                           focus:outline-none focus:border-[#CBFC58] transition-colors placeholder:text-gray-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-[#CBFC58] text-xl md:text-2xl font-medium mb-3">
                  Message<span className="text-red-500 ml-1">*</span>
                </label>
                <textarea
                  required
                  rows="4"
                  className="w-full bg-black/50 border-2 border-[#CBFC58]/30 rounded-lg py-4 px-5 text-lg md:text-xl lg:text-2xl
                           focus:outline-none focus:border-[#CBFC58] transition-colors placeholder:text-gray-500 resize-none"
                  placeholder="Enter your message"
                ></textarea>

                 {/* Submit Button */}
              
              </div>
<div className="flex justify-center pt-6">
                <Button label="Send Message" />
              </div>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;