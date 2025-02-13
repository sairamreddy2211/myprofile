import React from 'react';
import { Mail, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactInfo = {
    email: "sairamreddy2211@gmail.com",  // Replace with your email
    phone: "+91 7981615426"  // Replace with your phone number
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center" id='contact'>
      <h2 className="text-[#64ffda] font-mono mb-4">
        04. What's Next?
      </h2>
      
      <h3 className="text-5xl font-semibold text-gray-200 mb-6">
        Get In Touch
      </h3>
      
      <p className="max-w-xl text-gray-400 mb-12 text-lg leading-relaxed">
        Although I'm not currently looking for any new opportunities, because I am 
        too busy to save the world. My inbox is always open. Whether you have a 
        question or just want to say hi, I'll try my best to get back to you!
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors">
          <Mail className="w-5 h-5" />
          <span>{contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors">
          <Phone className="w-5 h-5" />
          <span>{contactInfo.phone}</span>
        </div>
      </div>

      <a 
        href={`mailto:${contactInfo.email}`}
        className="inline-block px-8 py-4 border border-[#64ffda] text-[#64ffda] rounded 
                 hover:bg-[#64ffda]/10 transition-colors duration-300 font-mono"
      >
        Alohomora
      </a>
    </section>
  );
};

export default ContactSection;