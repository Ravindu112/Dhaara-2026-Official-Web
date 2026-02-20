import React from 'react';
import { motion } from 'framer-motion';

// --- Team Member Data ---
// Easily add, remove, or edit team members here without touching the UI code.
const teamMembers = [
  {
    id: 1,
    roleTitle: "President",
    name: "Eleanor Fitzgerald",
    roleSubtitle: "President",
    imageSrc: "/src/assets/hod.jpg",
    description: "Leading with vision and dedication, Eleanor oversees all strategic initiatives and external relations for the association.",
    email: "president@gmail.com",
    phone: "0765434323"
  },
  {
    id: 2,
    roleTitle: "Vice President",
    name: "Dr. Aris Thorne",
    roleSubtitle: "Vice President",
    imageSrc: "/src/assets/hod.jpg",
    description: "Supporting the president and spearheading key operational projects to ensure smooth execution of our mission.",
    email: "vp@gmail.com",
    phone: "0786565453"
  },
  {
    id: 3,
    roleTitle: "Secretary",
    name: "Clara M. Davis",
    roleSubtitle: "Secretary",
    imageSrc: "/src/assets/hod.jpg",
    description: "Managing official records, communications, and ensuring compliance with all organizational bylaws and procedures.",
    email: "secretaryassociation@gmail.com",
    phone: "0708978675"
  }
];

// --- Individual Card Component ---
const TeamCard = ({ member, index }) => {
  return (
    <motion.div 
      // Animation: slide up and fade in, staggered by index
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="flex flex-col items-center bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-amber-500/20"
    >
      {/* Role Heading */}
      <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">
        {member.roleTitle}
      </h3>

      {/* Profile Image with theme accent border */}
      <div className="relative mb-4">
        <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-r from-amber-400 to-orange-500">
          <img 
            src={member.imageSrc} 
            alt={member.name} 
            className="w-full h-full rounded-full object-cover border-4 border-slate-900"
          />
        </div>
      </div>

      {/* Member Details */}
      <h4 className="text-2xl font-bold text-gray-100">{member.name}</h4>
      <p className="text-amber-500 font-semibold mb-4">{member.roleSubtitle}</p>
      <p className="text-gray-400 text-center text-sm mb-6 flex-grow">
        {member.description}
      </p>

      {/* Separator */}
      <div className="w-full h-px bg-slate-700/50 mb-6"></div>

      {/* Contact Info List */}
      <div className="w-full space-y-3">
        
        {/* Email Link */}
        <a 
          href={`mailto:${member.email}`} 
          className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-200"
        >
          {/* Email SVG Icon */}
          <svg className="w-5 h-5 mr-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
          </svg>
          <span className="text-sm truncate">{member.email}</span>
        </a>

        {/* Phone Link */}
        <a 
          href={`tel:${member.phone.replace(/[^0-9+]/g, '')}`} 
          className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-200"
        >
          {/* Phone SVG Icon */}
          <svg className="w-5 h-5 mr-3 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
          </svg>
          <span className="text-sm">{member.phone}</span>
        </a>

      </div>
    </motion.div>
  );
};

// --- Main Leadership Team Component ---
const LeadershipTeam = () => {
  return (
    <section id="leadership" className="relative py-24 px-4 overflow-hidden min-h-screen flex items-center justify-center">
      
      {/* Main Container */}
      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 
               bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent 
               drop-shadow-[0_0_20px_rgba(255,165,0,0.3)] text-center">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Get in touch with our executive board members.
          </p>
        </motion.div>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;