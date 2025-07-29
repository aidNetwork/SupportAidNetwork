import React, { useState } from "react";
import admin from "../assets/admin1.png";
import admin2 from "../assets/admin2.png";
import admin3 from "../assets/admin3.png";
import admin4 from "../assets/admin4.png";
import admin5 from "../assets/admin5.png";
const teamMembers = [
  {
    name: "William Nelson",
    role: "Supervisor and Interview Manager",
    bio: "William Nelson Supervisor & Interviewing Manager, Support Aid Network Organization.David Nathan, originally from Hamburg, Germany, is driven by a passion for community development and humanitarian work. With a degree in Human Resource Management and Community Development from the University of Hamburg, he began his journey with Support Aid Network (SAN) as a Project Assistant, quickly rising to Supervisor due to his leadership and dedication.Now overseeing field teams across Europe and Sub-Saharan Africa, William ensures quality service delivery to both disabled and non-disabled communities. As Interviewing Manager, he also leads SAN’s recruitment efforts, identifying and mentoring passionate individuals aligned with the organization's mission.Willaim is known for his hands-on support, site visits, and commitment to team development. For him, the real impact starts with strong teams—empowering communities, rebuilding futures, and nurturing future leaders within SAN",
    img: admin,
    email: "Williamnels170@gmail.com",
  },
  {
    name: "Meet Elizabeth",
    role: "Secretary",
    bio: "Born and raised in a small town in Oregon, Elizabeth holds academic credentials in Business Administration, Communication, and Public Administration. After gaining hands-on experience in both administration and community development, she joined the Support Aid Network Organization Program, where she now focuses on organizational management and capacity building within the Operations team. Together with colleagues across Support Aid Network, Elizabeth works to ensure communities—especially vulnerable and disadvantaged groups—receive the support they need to thrive. For her, the greatest reward is witnessing those communities benefit directly from the services and programs provided. Her educational background has been fundamental to her success. With experience in both government and non-profit sectors, Elizabeth understands how effective communication and strong administrative practices are essential for achieving organizational goals. She has led and contributed to various community development and capacity-building initiatives, consistently aiming to align every effort with the organization's mission and vision. As Secretary at Support Aid Network, Elizabeth plays a key role in delivering administrative support and strategic insight, helping to drive growth, accountability, and lasting impact within the communities they serve.",
    img: admin2,
    email: "Elizabethpacelyles@gmail.com",
  },
  {
    name: "David Nathan",
    role: "Chairman",
    
    bio: "Born and raised in a small town in Germany, David holds multiple degrees in electrical engineering, an MBA, and a PhD in cryptology. He began his journey with the Support Aid Network (SAN) Organization, contributing to community development and quality management across global operations. His background in engineering and communication has been vital in bridging technical and operational goals, including roles in Germany, Japan, and the USA. After supporting clients in automotive, aerospace, medical devices, and banking, he shifted focus to quality and compliance at SAN, eventually becoming Chairman. David is passionate about helping both disabled and non-disabled individuals through SAN’s mission. He finds the greatest reward in seeing communities regain pride through the services they receive. Today, he is a senior knowledge expert and continues to drive impact across industries and borders.",
    img: admin3,
    email: "davidnathan179@gmail.com",
  },
  {
    name: "Martin David",
    role: "Humanitarian Program Officer",
    bio: "Martin David – Humanitarian Program Officer, Support Aid Network Organization.Martin David, born in Birmingham, has always been passionate about service and community. After earning a degree in International Development from the University of Sussex, he volunteered in East Africa, coordinating health and youth programs with local NGOs.In 2019, he joined Support Aid Network (SAN), where his empathy and cultural sensitivity quickly made an impact. Starting as a Field Coordinator, he now serves as a Program Officer, managing projects focused on education, livelihoods, and food security in rural and refugee communities.Martin champions community-led solutions and works closely with local leaders to design sustainable programs. He also mentors staff and young professionals, sharing his field experience and commitment to building long-term resilience. For Martin, the goal is not just to provide aid, but to walk alongside communities as they build a better future.",
    img: admin4,
    email: "davidmartin6853@gmail.com",
  },
  {
    name: "Megan Herbert",
    role: "CEO",
    bio: "Megan Herbert, born in London, holds a degree in Economics from the London School of Economics and began his career in management consulting at McKinsey, advising global companies on strategy and growth.He later joined Support Aid Network (SAN) as Head of Strategy, driving international expansion and helping grow the organization fivefold in just four years. Rising through the ranks to COO and then CEO, Megan is known for combining innovation with sustainability.Under his leadership, SAN has launched award-winning programs, expanded into new markets, and become recognized for its inclusive culture. A mentor and public speaker, Megan advocates for purpose-driven leadership and continues to build organizations centered on people, community, and long-term impact.",
    img: admin5,
    email: "meganherbert3955@gmail.com",
  },
];

const bgColors = [
  "bg-blue-600",
  "bg-purple-400",
  "bg-pink-300",
  "bg-blue-300",
  "bg-green-300",
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const truncate = (text, maxLength = 100) =>
    text.length > maxLength ? text.slice(0, maxLength) + "..." : text;

  return (
    <section className="bg-white text-blue-900 py-20 px-6 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Our Admin Team</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Skilled professionals committed to driving success and innovation in every initiative.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div
              className={`w-52 h-52 sm:w-56 sm:h-56 rounded-full flex items-center justify-center overflow-hidden ${bgColors[index % bgColors.length]}`}
            >
              <img
                src={member.img}
                alt={`${member.name}'s profile`}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mt-4">{member.name}</h3>
            <p className="text-blue-600 text-sm font-medium mt-1">{member.role}</p>
            <p className="text-gray-700 text-sm mt-2 mb-4 px-4">
              {truncate(member.bio)}
            </p>
            <button
              onClick={() => setSelectedMember(member)}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition cursor-pointer"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedMember && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 backdrop-blur-sm bg-black/40"
          onClick={() => setSelectedMember(null)}
        >
          <div
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 text-center text-blue-900 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-semibold mb-1">{selectedMember.name}</h3>
            <p className="text-blue-600 text-sm font-medium mb-3">{selectedMember.role}</p>
            <p className="text-gray-700 text-sm mb-4 whitespace-pre-wrap">{selectedMember.bio}</p>
            <p className="text-gray-500 text-sm mb-6">{selectedMember.email}</p>
            <button
              onClick={() => setSelectedMember(null)}
              className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            >
              Read Less
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
