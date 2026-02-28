import React from 'react';

// --- Team Member Data ---
// Easily add, remove, or edit team members here without touching the UI code.
const teamMembers = [
  {
    id: 1,
    roleTitle: "President",
    name: "Kavinga Ranthilaka",
    roleSubtitle: "President",
    imageSrc: "/src/assets/hod.jpg",
    email: "ranthilakakavinga@gmail.com",
    phone: "0752158937"
  },
  {
    id: 2,
    roleTitle: "Vice President-Education ",
    name: "Ushan Karunarathne",
    roleSubtitle: "Vice President-Education",
    imageSrc: "/src/assets/hod.jpg",
    email: "karunarathnaushan22@gmail.com",
    phone: "0778270975"
  },
  {
    id: 3,
    roleTitle: "Secretary",
    name: "Venuri Mettananda",
    roleSubtitle: "Secretary",
    imageSrc: "/src/assets/hod.jpg",
    email: "mettanandavenuri@gmail.com",
    phone: "0764112703"
  },
  {
    id: 4,
    roleTitle: "Secretary",
    name: "Vihanga Rathnayake",
    roleSubtitle: "Secretary",
    imageSrc: "/src/assets/hod.jpg",
    email: "vihangasan221@gmail.com",
    phone: "0713537688"
  }, {
    id: 5,
    roleTitle: "Threasurer",
    name: "Maleesha Kalubowila",
    roleSubtitle: "Threasurer",
    imageSrc: "/src/assets/hod.jpg",
    email: "maleeshakalubowila@gmail.com",
    phone: "07769795732"
  },
  {
    id: 6,
    roleTitle: "Threasurer",
    name: "Tharushi Dilshika",
    roleSubtitle: "Threasurer",
    imageSrc: "/src/assets/hod.jpg",
    email: "tharushidilshika@gmail.com",
    phone: "0742912852"
  }
];

// --- Individual Card Component ---
const TeamCard = ({ member, index }) => {
  return (
    <div
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
    </div>
  );
};

// --- Main Leadership Team Component ---
const LeadershipTeam = () => {
  return (
    <section id="leadership" className="relative py-24 px-4 overflow-hidden min-h-screen flex items-center justify-center">

      {/* Main Container */}
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 
               bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent 
               drop-shadow-[0_0_20px_rgba(255,165,0,0.3)] text-center">
            Contact Us
          </h2>
          <p className="text-lg text-gray-300 font-light">
            Get in touch with our executive board members.
          </p>
        </div>

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