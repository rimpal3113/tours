// src/components/MeetTeam.jsx
import React from "react";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    experience: "15+ years in adventure travel, passionate about sustainable tourism.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    experience: "Expert in logistics and customer experience, ensures seamless journeys.",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Amit Patel",
    role: "Lead Guide",
    experience: "Certified mountain guide with expertise in Himalayan treks.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    name: "Maya Singh",
    role: "Cultural Specialist",
    experience: "Anthropologist specializing in cultural immersion experiences.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
];

const MeetTeam = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our diverse team of travel experts brings years of experience and passion to every journey.
          </p>
        </div>

        {/* Team Members */}
        <div className="grid md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.experience}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTeam;
