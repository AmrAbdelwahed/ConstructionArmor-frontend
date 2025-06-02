import React from 'react';
import { UserCheck, Clock, Shield, Globe } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Construction Industry Experts.
          </h1>
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#d52b1e' }}>
            We're Here to Help Build Teams.
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            As a leading construction recruitment agency, we understand the critical elements of successful construction projects – skilled workforce, precision, and timeliness. We offer an extensive range of services tailored to the unique needs of the construction sector. From sourcing skilled labor to senior project managers, we ensure that every placement complements your project goals and timelines.
          </p>
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-3" style={{ color: '#d52b1e' }}>Request Talent</h3>
            <p className="text-lg text-gray-700 mb-4">
              Whether it's a residential, commercial, or infrastructure project, trust Construction Armor Staffing to deliver candidates with the right experience and expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="text-lg font-bold mb-2" style={{ color: '#d52b1e' }}>For job seekers:</h4>
              <p className="text-gray-700">
                We will ensure that you land a job with a safe and reputable construction company.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-2" style={{ color: '#d52b1e' }}>Equality for all parties:</h4>
              <p className="text-gray-700">
                Construction companies and construction workers trust Construction Armor Staffing to equally serve the interests of both parties.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <UserCheck size={48} style={{ color: '#d52b1e' }} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Finding Workers,<br />Simplified</h5>
              <p className="text-gray-600">
                Our staffing solutions help construction companies maintain project timelines and quality 
                with convenient and reliable worker staffing services. If you need construction workers, 
                simply create your free account, then tell us what kind of worker you are looking for.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Clock size={48} style={{ color: '#d52b1e' }} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Find Workers<br />Quickly</h5>
              <p className="text-gray-600">
                Construction Armor instantly identifies pre-vetted construction workers that match your criteria 
                for skills and experience from our database. The search for your next construction worker 
                has never been easier.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Shield size={48} style={{ color: '#d52b1e' }} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Get Qualified<br />Workers</h5>
              <p className="text-gray-600">
                Our staffing agency carefully screens each worker candidate to verify their qualifications 
                and experience. When your company hires a construction worker from Construction Armor, they are 
                hand-picked and prepared for their first day on the job.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start">
            <div className="mb-4 sm:mb-0 sm:mr-4">
              <Globe size={48} style={{ color: '#d52b1e' }} />
            </div>
            <div>
              <h5 className="text-xl font-bold mb-2">Agile & Responsive Online Service</h5>
              <p className="text-gray-600">
                Our worker staffing services are accessible online, 24/7. Check the status of a request, 
                make new requests or view applicants anytime, anywhere. We'll support your projects 
                and supply anything from last-minute replacements to qualified long-term hires.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 w-full md:flex-row">
          {/* Companies Start Here Button */}
          <a
            href="/companies-for-hire"
            target="_blank"
            className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#d11234] rounded-lg text-center hover:text-white hover:bg-[#ac332b] transition-colors duration-300 w-full sm:w-80 sm:mx-2"
          >
            Construction Companies Start Here
          </a>
          
          {/* Construction Workers Start Here Button */}
          <a
            href="/construction-worker-register"
            target="_blank"
            className="inline-block px-8 py-4 text-xl font-bold text-white bg-[#d11234] rounded-lg text-center hover:text-white hover:bg-[#ac332b] transition-colors duration-300 w-full sm:w-80 sm:mx-2"
          >
            Construction Workers Start Here
          </a>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;