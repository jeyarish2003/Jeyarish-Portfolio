import { Briefcase } from 'lucide-react';

const Portfolio = () => {
  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "ANDIRAN HEALTH TECH PVT LTD",
      period: "June 2024 - May 2025",
      description: [
        {
          heading: "Population Governance Research",
          points: [
            "Developed an API using Python FastAPI.",
            "Worked on ScyllaDB, PostgreSQL, and Apache Druid.",
            "Managed data streaming using NATS FastStream."
          ]
        },
        {
          heading: "Event Based Surveillance",
          points: [
            "Built an application with Firebase connected to PostgreSQL.",
            "Implemented ETL processes using Python in Firebase Cloud Functions."
          ]
        },
        {
          heading: "Clinical Governance Research",
          points: [
            "Created UI screens using the Flutter framework."
          ]
        }
      ],
      showLearnMore: true,
      isActive: true
    }
  ];

  return (
    <div id="portfolio" className="min-h-screen bg-black text-white py-12 px-6 mx-[50px]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="w-8 h-8 text-white" />
          <h1 className="text-4xl font-bold">Work experience</h1>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-700"></div>

          {experiences.map((experience) => (
            <div key={experience.id} className="relative mb-16 last:mb-0">
              {/* Timeline dot */}
              <div className="absolute left-2.5 w-4 h-4 bg-yellow-500 rounded-full border-4 border-gray-900"></div>

              {/* Content */}
              <div className="ml-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left column - Job details */}
                <div>
                  <h2 className="text-2xl font-bold text-yellow-400 mb-2">
                    {experience.title}
                  </h2>
                  <h3 className="text-xl font-semibold mb-2">
                    {experience.company}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {experience.period}
                  </p>
                </div>

                {/* Right column - Description with bullets */}
                
                <div>
  {experience.description.map((section, idx) => (
    <div key={idx} className="mb-4">
      <h4 className="text-lg font-semibold text-white mb-2">
        {section.heading}
      </h4>
      <ul className="list-disc text-gray-300 space-y-1 pl-4">
        {section.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
