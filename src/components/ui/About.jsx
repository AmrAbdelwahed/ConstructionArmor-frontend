import React from 'react';
import { Award, Shield, Zap } from 'lucide-react';
import canadaImage from '../../assets/canada.png'; // Adjust the relative path if needed
import { Instagram, Twitter, Linkedin } from 'lucide-react'; // Import icons
import { SiTiktok, SiX, SiWhatsapp } from 'react-icons/si';
import newLogo from '../../assets/ConstructionArmor.png';

const About = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-bold text-[#d11234] mb-4">
            <span className='text-black'>About</span> <br/>ARMOR STAFFING Solutions
          </h2>
          <div className="flex justify-center mt-2">
            <img src={newLogo} alt="GUARDARMOR SECURITY Logo" className="h-80 mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Award size={32} className="text-[#d11234]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Custom Recruiting Plans
            </h5>
            <p className="text-gray-600">
              Our plan to source candidates varies based on your specific requests. We work with you to find the solution you need, and don't stop until you are happy!
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Shield size={32} className="text-[#d11234]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Best Talent
            </h5>
            <p className="text-gray-600">
              We help our clients find the best talent fast and select the right fit for their business needs using the most advanced search and selection tools and methods.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Zap size={32} className="text-[#d11234]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Quality of Candidates
            </h5>
            <p className="text-gray-600">
              The quality of our candidates is an outstanding guarantee that we are able to identify and deliver to our clients the best talent available on the market
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* Contact Us Button */}
          <a 
            href="mailto:info@guardarmor.ca?subject=More%20information%20about%20Guard%20Armor%20please"
            className="inline-block px-8 py-3 bg-[#d11234] text-white font-bold rounded-lg hover:text-white hover:bg-[#ac332b] transition-colors">
            Contact Us
          </a>

          {/* Contact Information */}
          <div className="mt-6 space-y-2 text-gray-700">
            <p className="text-lg">
              Head Office: <span className="font-semibold">Oakville ON Canada <img src={canadaImage} alt="🇨🇦" className="inline-block w-5 h-3.5" /></span>
            </p>
            <p className="text-lg">
              Email Address: <span className="font-semibold">contact@ConstructionArmor.ca</span>
            </p>
            <p className="text-lg"> 
              Phone Number: <span className="font-semibold"> +1(866) 603-2179 </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#d11234] py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">            
            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/company/guard-armor-security-ltd/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            
            {/* WhatsApp */}
            <a 
              href="https://wa.me/message/UKU2H2DTWOEOO1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <SiWhatsapp size={24} />
            </a>
          </div>

          <p className="text-center text-white mt-4">
            &copy; 2021 Armor Staffing Solutions Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
