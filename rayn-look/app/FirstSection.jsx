"use client";
import React from "react";
import { slideIn, zoomIn, fadeIn } from "@/variants";
import { motion } from "framer-motion";
import { 
  FaEye, 
  FaUserMd, 
  FaCog, 
  FaShieldAlt, 
  FaHandHoldingMedical,
  FaStethoscope
} from "react-icons/fa";
import { 
  MdVisibility, 
  MdHealthAndSafety, 
  MdPrecisionManufacturing,
  MdSupportAgent
} from "react-icons/md";
import { BsEyeFill } from "react-icons/bs";

const services = [
  {
    id: 1,
    title: "Premium Contact Lenses",
    description: "Experience unmatched comfort with our premium collection of daily, weekly, and monthly contact lenses. Each lens is crafted with advanced materials for superior breathability and moisture retention.",
    icon: <BsEyeFill className="w-8 h-8" />,
    color: "from-blue-500 to-blue-700",
    features: ["UV Protection", "High Oxygen Permeability", "Moisture Lock Technology", "All-Day Comfort"]
  },
  {
    id: 2,
    title: "Custom Prescription Fitting",
    description: "Get perfectly fitted prescription lenses tailored to your unique eye shape and vision needs. Our advanced fitting technology ensures optimal comfort and visual clarity.",
    icon: <MdPrecisionManufacturing className="w-8 h-8" />,
    color: "from-green-500 to-green-700",
    features: ["Digital Eye Mapping", "Precise Measurements", "Custom Manufacturing", "Perfect Fit Guarantee"]
  },
  {
    id: 3,
    title: "Professional Eye Consultation",
    description: "Comprehensive eye health assessments by certified professionals. We evaluate your eye health, discuss your lifestyle needs, and recommend the best lens options.",
    icon: <FaUserMd className="w-8 h-8" />,
    color: "from-purple-500 to-purple-700",
    features: ["Complete Eye Exam", "Lifestyle Assessment", "Health Monitoring", "Expert Recommendations"]
  },
  {
    id: 4,
    title: "Lens Care & Maintenance",
    description: "Expert guidance on proper lens care, cleaning techniques, and maintenance schedules. We provide comprehensive care kits and ongoing support for optimal lens performance.",
    icon: <FaHandHoldingMedical className="w-8 h-8" />,
    color: "from-orange-500 to-orange-700",
    features: ["Care Instructions", "Premium Solutions", "Maintenance Schedule", "24/7 Support"]
  },
  {
    id: 5,
    title: "Advanced Eye Health Monitoring",
    description: "Regular check-ups and monitoring services to ensure your eyes remain healthy while wearing contact lenses. Early detection and prevention of potential issues.",
    icon: <MdHealthAndSafety className="w-8 h-8" />,
    color: "from-red-500 to-red-700",
    features: ["Regular Check-ups", "Health Tracking", "Early Detection", "Preventive Care"]
  },
  {
    id: 6,
    title: "Customer Support & Education",
    description: "Comprehensive support system including lens insertion training, troubleshooting assistance, and educational resources for new and experienced users.",
    icon: <MdSupportAgent className="w-8 h-8" />,
    color: "from-indigo-500 to-indigo-700",
    features: ["Training Sessions", "24/7 Helpline", "Educational Resources", "Troubleshooting Guide"]
  }
];

const FirstSection = () => {
  return (
    <div className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(203,178,106,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Section */}
        <motion.div
          variants={slideIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center items-center mb-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-customGold to-yellow-500 rounded-full flex items-center justify-center shadow-lg shadow-customGold/30">
              <FaStethoscope className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-customGold">Premium</span> Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience world-class eye care services designed to enhance your vision and comfort
          </p>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">10,000+</div>
              <div className="text-gray-400">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">5+ Years</div>
              <div className="text-gray-400">Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">50+</div>
              <div className="text-gray-400">Lens Varieties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-customGold">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", index * 0.1 + 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: true, amount: 0.3 }}
              className="group relative"
            >
              <div className="relative h-full bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Card Header with Icon */}
                <div className={`relative h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-white"
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-2 border-white/30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-customGold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Features:</h4>
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-customGold rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-customGold/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-customGold/10 to-yellow-500/10 rounded-3xl p-8 border border-customGold/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Vision?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Book a consultation with our eye care experts and discover the perfect contact lenses for your lifestyle.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(203,178,106,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-customGold to-yellow-500 text-black px-8 py-4 rounded-full font-bold text-lg hover:shadow-customGold/50 transition-all duration-300"
              >
                Book Consultation
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-customGold text-customGold px-8 py-4 rounded-full font-bold text-lg hover:bg-customGold hover:text-black transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default FirstSection;