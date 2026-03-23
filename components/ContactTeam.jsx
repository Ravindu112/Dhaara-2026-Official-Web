import React from "react";
import Image from "next/image";
const kImage = '/assets/Images/ContactUs/k.webp';
const vImage = '/assets/Images/ContactUs/v.webp';
const v2Image = '/assets/Images/ContactUs/v2.webp';
const tImage = '/assets/Images/ContactUs/t.webp';
const uImage = '/assets/Images/ContactUs/u.webp';
const mImage = '/assets/Images/ContactUs/m.webp';


// --- Team Member Data ---
const teamMembers = [
  {
    id: 1,
    roleTitle: "President",
    name: "Kavinga Ranthilake",
    roleSubtitle: "President",
    imageSrc: kImage,
    email: "ranthilakakavinga@gmail.com",
    phone: "0752158937",
  },
  {
    id: 2,
    roleTitle: "Vice President-Education",
    name: "Ushan Karunarathna",
    roleSubtitle: "Vice President-Education",
    imageSrc: uImage,
    email: "karunarathnaushan22@gmail.com",
    phone: "0778270975",
  },
  {
    id: 3,
    roleTitle: "Secretary",
    name: "Venuri Mettananda",
    roleSubtitle: "Secretary",
    imageSrc: vImage,
    email: "mettanandavenuri@gmail.com",
    phone: "0764112703",
  },
  {
    id: 4,
    roleTitle: "Secretary",
    name: "Vihanga Rathnayake",
    roleSubtitle: "Secretary",
    imageSrc: v2Image,
    email: "vihangasan221@gmail.com",
    phone: "0713537688",
  },
  {
    id: 5,
    roleTitle: "Treasurer",
    name: "Maleesha Kalubowila",
    roleSubtitle: "Treasurer",
    imageSrc: mImage,
    email: "maleekalubovila@gmail.com",
    phone: "0769795732",
  },
  {
    id: 6,
    roleTitle: "Treasurer",
    name: "Tharushi Dilshika",
    roleSubtitle: "Treasurer",
    imageSrc: tImage,
    email: "tharushidilshika@gmail.com",
    phone: "0742912852",
  },
];

// --- Individual Card ---
const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center bg-slate-900/60 backdrop-blur-md border border-slate-700/50 
                    rounded-xl p-4 md:p-8 shadow-xl transition-all duration-300 
                    hover:scale-105 hover:shadow-amber-500/20">

      {/* Role */}
      <h3 className="text-[10px] md:text-lg font-bold text-white mb-3 md:mb-6 uppercase tracking-wider text-center">
        {member.roleTitle}
      </h3>

      {/* Profile Image */}
      <div className="flex justify-center w-full mb-3 md:mb-4">
        <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full 
                        bg-gradient-to-r from-amber-400 to-orange-500 overflow-hidden shadow-md">
          <div className="absolute inset-[3px] md:inset-[4px] rounded-full overflow-hidden bg-slate-900 z-10">
            <Image
              src={member.imageSrc}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Name */}
      <h4 className="text-xs md:text-xl font-bold text-gray-100 text-center">
        {member.name}
      </h4>

      <p className="text-[10px] md:text-sm text-amber-500 font-semibold mb-3 md:mb-4 text-center">
        {member.roleSubtitle}
      </p>

      <div className="w-full h-px bg-slate-700/50 mb-3 md:mb-6"></div>

      {/* Contact */}
      <div className="w-full space-y-2 md:space-y-3">

        {/* Email */}
        <a
          href={`mailto:${member.email}`}
          className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-200"
        >
          <svg
            className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-3 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <span className="text-[9px] md:text-sm truncate">
            {member.email}
          </span>
        </a>

        {/* Phone */}
        <a
          href={`tel:${member.phone.replace(/[^0-9+]/g, "")}`}
          className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-200"
        >
          <svg
            className="w-3 h-3 md:w-5 md:h-5 mr-2 md:mr-3 text-amber-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="text-[9px] md:text-sm">
            {member.phone}
          </span>
        </a>
      </div>
    </div>
  );
};

// --- Main Component ---
const LeadershipTeam = () => {
  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 px-3 md:px-6 overflow-hidden min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl md:text-5xl font-black uppercase tracking-tight mb-4 md:mb-6
                         bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-sm md:text-lg text-gray-300 font-light">
            Get in touch with our executive board members.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LeadershipTeam;