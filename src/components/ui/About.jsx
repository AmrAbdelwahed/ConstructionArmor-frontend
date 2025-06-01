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
          <h2 className="text-4xl font-bold text-[#f2781a] mb-4">
            About CONSTRUCTION ARMOR
          </h2>
          <div className="flex justify-center mt-2">
            <img src={newLogo} alt="GUARDARMOR SECURITY Logo" className="h-80 mt-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="mb-4">
              <Award size={32} className="text-[#f47d23]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Committed Leader in Staffing
            </h5>
            <p className="text-gray-600">
              With years experience in the security and protection industries means 
              access to a network of quality companies and experienced guards. 
              We work with organizations and customers all across North America.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Shield size={32} className="text-[#f47d23]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Responsible & Efficient Marketplace
            </h5>
            <p className="text-gray-600">
              We offer security companies on-demand access to a database of guards 
              that are pre-vetted for safety, eligibility, and availability. 
              They're all ready to protect and serve the moment you need them.
            </p>
          </div>

          <div>
            <div className="mb-4">
              <Zap size={32} className="text-[#f47d23]" />
            </div>
            <h5 className="text-xl font-bold mb-3">
              Automated Onboarding
            </h5>
            <p className="text-gray-600">
              An easy application process and automated "smart" guard matching means 
              companies can connect with the security guards they need, and it's all 
              done in real-time, with direct communication.
            </p>
          </div>
        </div>

        <div className="text-center">
          {/* Contact Us Button */}
          <a 
            href="mailto:info@guardarmor.ca?subject=More%20information%20about%20Guard%20Armor%20please"
            className="inline-block px-8 py-3 bg-[#f47d23] text-white font-bold rounded-lg hover:text-white hover:bg-orange-700 transition-colors">
            Contact Us
          </a>

          {/* Contact Information */}
          <div className="mt-6 space-y-2 text-gray-700">
            <p className="text-lg">
              Head Office: <span className="font-semibold">Toronto, Canada <img src={canadaImage} alt="🇨🇦" className="inline-block w-5 h-3.5" /></span>
            </p>
            <p className="text-lg">
              Email Address: <span className="font-semibold">info@guardarmor.ca</span>
            </p>
            <p className="text-lg"> 
              Phone Number: <span className="font-semibold"> +1(866) 603-2179 </span>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#f47d23] py-8 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-6">
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/guardarmor_security" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <Instagram size={24} />
            </a>

            {/* X (Twitter) */}
            <a 
              href="https://x.com/GuardArmorSecur" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <SiX size={24} />
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@guard.armor.securi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-200 transition-colors"
            >
              <SiTiktok size={24} />
            </a>
            
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
            &copy; 2021 Guard Armor Security Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
