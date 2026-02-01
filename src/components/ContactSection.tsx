import { Mail, Phone } from 'lucide-react';
import { CONTACT_SECTION_DATA } from '@/config';

const ContactSection = () => {
  const { contactInfo } = CONTACT_SECTION_DATA;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 text-center" id='contact'>
      <h2 className="text-site-accent font-[14px] md:font-[26px] font-mono mb-4">
        {CONTACT_SECTION_DATA.sectionNumber}. {CONTACT_SECTION_DATA.title}
      </h2>
      
      <h3 className="text-5xl font-semibold text-[35px] md:text-5xl text-gray-200 mb-6">
        {CONTACT_SECTION_DATA.subtitle}
      </h3>
      
      <p className="max-w-xl text-gray-400 mb-12 text-[14px] md:text-[18px] leading-relaxed">
        {CONTACT_SECTION_DATA.description}
      </p>

      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2 text-gray-400 hover:text-site-accent transition-colors">
          <Mail className="w-5 h-5" />
          <span>{contactInfo.email}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 hover:text-site-accent transition-colors">
          <Phone className="w-5 h-5" />
          <span>{contactInfo.phone}</span>
        </div>
      </div>

      <a 
        href={`mailto:${contactInfo.email}`}
        className="inline-block px-8 py-4 border border-site-orange text-site-orange rounded 
                 hover:bg-site-orange/10 transition-colors duration-300 font-mono"
      >
        {CONTACT_SECTION_DATA.buttonText}
      </a>
    </section>
  );
};

export default ContactSection;