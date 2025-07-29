import React from "react";
import historyImg from "../assets/benefit.jpg"; // Replace with your actual image path

const History = () => {
  return (
    <section className="bg-white text-blue-900 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="w-full h-full">
          <img
            src={historyImg}
            alt="SAN History"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            Background History of Support Aid Network (SAN)
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Support Aid Network (SAN) was founded in 1998 by a small group of humanitarian professionals and community leaders who shared a vision: to build a world where no one is left behind, and vulnerable communities have the support and resources they need to live with dignity and hope.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Originally established in Hamburg, Germany, but now fully functional in the United States, SAN began as a volunteer-based initiative providing emergency relief to refugees and displaced families in Europe.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Driven by a commitment to practical solutions and community-led action, SAN quickly expanded its reach, partnering with local leaders and international donors to launch education programs, health clinics, livelihood training, and disaster response efforts in crisis-affected regions across Africa, Asia, and Eastern Europe.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            By the mid-2000s, SAN had grown into a respected non-profit known for combining grassroots knowledge with strong operational standards. Its programs served thousands of families each year — from distributing food and medical aid in conflict zones to supporting people with disabilities and marginalized groups to access education and economic opportunities.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Like many mission-driven organizations, SAN faced significant challenges along the way. Shifting donor priorities, global crises, and operational disruptions during the last decade forced the organization to pause some of its field programs and restructure its leadership and funding strategies.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            However, the core team, supported by loyal partners and dedicated staff, never lost sight of SAN’s mission. In 2024, after a period of renewal, SAN relaunched its operations with a clearer strategy, modernized systems, and a new generation of leaders and volunteers ready to meet today’s most urgent needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Now fully back to function, Support Aid Network is more committed than ever to providing reliable aid, building local resilience, and empowering communities to lead their own recovery and growth. From emergency relief to sustainable development, SAN continues to stand by its founding promise: <strong>together, we support, we empower, we rebuild.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;
