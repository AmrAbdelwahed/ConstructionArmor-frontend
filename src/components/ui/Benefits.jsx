import React from 'react';

const Benefits = () => {
  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-24">
            <span className=" text-[#d11234]">
              How You Benefit
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Construction Companies Benefits */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl">
                <div className="absolute -top-8 left-10 bg-gradient-to-r from-[#d11234] to-[#ac332b] text-white px-6 py-3 rounded-full font-semibold">
                  For Construction Companies
                </div>
                
                <div className="space-y-8 mt-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#d11234]">
                      Recruitment Solutions We Provide
                    </h3>
                    <p className="text-lg text-gray-600 border-b border-gray-100 pb-6">
                      Labour shortages are a frequent issue in construction. These shortages can result in significant project delays and financial losses. Furthermore, to compensate for the lack of workers, many construction workers work longer hours, creating safety concerns. This is particularly true for large construction projects like plazas, condos, or other large-scale buildings that rely on committed staff to see the project through to completion.
                    </p>
                  </div>
                  
                  <div className="group">
                    <p className="text-gray-600 leading-relaxed">
                      Construction Armor Staffing is here to help you find skilled contractors for your project. We'll match you with reliable, qualified, and licensed construction workers. If you are satisfied with the workers we provide, you can keep them on board for the duration of the project. Get qualified construction workers verified by an employment agency with a track record of success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Workers Benefits */}
            <div className="relative">
              <div className="relative bg-white p-10 rounded-3xl shadow-xl">
                <div className="absolute -top-8 left-10 bg-gradient-to-r from-[#d11234] to-[#ac332b] text-white px-6 py-3 rounded-full font-semibold">
                  For Construction Workers
                </div>
                
                <div className="space-y-8 mt-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#d11234]">
                      Are You a Job Seeker?
                    </h3>
                    <p className="text-lg text-gray-600 border-b border-gray-100 pb-6">
                      We're here to help you find a reputable construction company that matches your skillset. If you meet the basic skills requirement but need additional training for a specific task, we can help you with that. This will give you the necessary confidence to meet the job requirements needed on-site.
                    </p>
                  </div>
                  
                  <div className="group">
                    <h4 className="text-xl font-bold mb-3 text-[#d11234] group-hover:text-[#ac332b] transition-colors">
                      Accessible Application Process
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      To apply simply press on: (Job Seekers Start Here), fill out the application and submit it. The HR will look for a job that suits your specialty and experience and contact you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;