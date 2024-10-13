import React from "react";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "Andrei Bodota",
      email: "bodotaandrei@gmail.com",
      imgSrc: "",
    },
    {
      name: "Jm Dinglasan",
      email: "jm.dinglasan19@gmail.com",
      imgSrc: "",
    },
    {
      name: "Jemen Pastor",
      email: "pastorjemen@gmail.com",
      imgSrc: "",
    },
    {
      name: "Jc Remolacio",
      email: "jcremolacio17@gmail.com",
      imgSrc: "",
    },
    {
      name: "Yuki Villanueva",
      email: "vgmiyu@gmail.com",
      imgSrc: "",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-10 w-full mb-32">
      <h1 className="text-5xl text-center mb-8 tracking-wider">About Us</h1>

      <h2 className="text-lg text-center mb-8 text-gray-600">
        Meet the Team Behind PetCare Hub
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-4 flex items-center justify-between w-full ${
              index >= 3 ? "md:col-span-1 lg:col-span-1" : ""
            }`}
          >
            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 mr-4">
              {member.imgSrc ? (
                <img
                  src={member.imgSrc}
                  alt={member.name}
                  className="rounded-full object-cover w-full h-full"
                />
              ) : (
                <div className="flex items-center justify-center w-full h-full text-gray-500"></div>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.email}</p>
            </div>

            <div className="ml-4 flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h1v4H3v2h2v-2h4v2h2v-2h2v2h2v-2h4v2h2v-2h-1v-4h1v-2h-1v-4h-1V6h-1V4h-4V3h-2v1H7V3H5v1H3v4H2v2h1z"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
