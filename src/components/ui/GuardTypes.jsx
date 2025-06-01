import React from 'react';
import { Hammer, Wrench, HardHat, Zap, Truck, Settings } from 'lucide-react';

const WorkerTypes = () => {
  const workerCategories = [
    {
      icon: HardHat,
      title: "Street Construction & Site Work",
      color: "from-orange-500 to-orange-400",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600",
      jobs: [
        "Traffic Control",
        "General Laborer", 
        "Carpenter",
        "Concrete Finisher",
        "Layout & Form Setter",
        "Machine Operator (Excavator, Mini-Excavator, Bobcat, Loader)"
      ]
    },
    {
      icon: Truck,
      title: "Paving & Road Work",
      color: "from-blue-500 to-blue-400",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      jobs: [
        "Asphalt Worker",
        "Sidewalk Finisher",
        "Sealing Crew",
        "Curb & Gutter Finisher"
      ]
    },
    {
      icon: Settings,
      title: "Warehouse & General Labor",
      color: "from-green-500 to-green-400",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      jobs: [
        "Assembly Line Worker",
        "Shipping/Receiving",
        "RF Scanner Use",
        "Warehouse Associate",
        "Material Handler",
        "Order Picking/Packing"
      ]
    },
    {
      icon: Settings,
      title: "Machine Operators (Industrial)",
      color: "from-purple-500 to-purple-400",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      jobs: [
        "CNC Machine Operator",
        "Punch Press & Stamp Press",
        "Break Press & Robotics",
        "Glass Forming",
        "Bindery Worker",
        "Flexographic Printing"
      ]
    },
    {
      icon: Wrench,
      title: "Skilled Trades",
      color: "from-red-500 to-red-400",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      jobs: [
        "Electrician/Plumber/HVAC",
        "Hoisting Engineer (Crane Operator)",
        "Carpenter/Pipefitter/Gasfitter",
        "Machinist/Millwright",
        "Hydraulic Electrician"
      ]
    },
    {
      icon: Zap,
      title: "Welding Jobs & Construction Trades",
      color: "from-yellow-500 to-yellow-400",
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      jobs: [
        "MIG/TIG/Stick/Gas Welder",
        "Plasma Arc & Spot Welder",
        "Laser Welding",
        "Bricklayer/Stone Mason",
        "Drywaller/Painter/Roofer",
        "Heavy Equipment/Cement Finisher"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Find the Right
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#d11234] to-[#ac332b] mt-2">
                Specialized Workers
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Connect with experienced professionals across construction, manufacturing, and specialized trades. 
              Quality workers ready to tackle your next project.
            </p>
          </div>

          {/* Worker Categories Grid */}
          <div className="grid gap-8 md:gap-10">
            {/* First Row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workerCategories.slice(0, 3).map((category, index) => (
                <WorkerCard key={index} category={category} />
              ))}
            </div>
            
            {/* Second Row - 3 cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workerCategories.slice(3, 6).map((category, index) => (
                <WorkerCard key={index + 3} category={category} />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-8 py-4 shadow-lg border border-slate-200">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-slate-700 font-medium">Ready to connect with skilled workers?</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const WorkerCard = ({ category }) => {
  const Icon = category.icon;
  
  return (
    <div className="group relative">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-r ${category.color} transform rotate-1 rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-300 group-hover:rotate-2 group-hover:scale-105`}></div>
      
      {/* Main card */}
      <div className="relative bg-white p-8 rounded-3xl shadow-lg border border-slate-200 transform group-hover:-translate-y-2 transition-all duration-300 group-hover:shadow-2xl">
        {/* Icon */}
        <div className={`w-16 h-16 ${category.bgColor} rounded-2xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-8 h-8 ${category.iconColor}`} />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold text-slate-800 mb-6 group-hover:text-slate-900 transition-colors">
          {category.title}
        </h3>
        
        {/* Job list */}
        <div className="space-y-3">
          {category.jobs.map((job, jobIndex) => (
            <div key={jobIndex} className="flex items-start gap-3">
              <div className={`w-2 h-2 ${category.bgColor} rounded-full mt-2 flex-shrink-0`}></div>
              <span className="text-slate-600 leading-relaxed hover:text-slate-800 transition-colors">
                {job}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerTypes;