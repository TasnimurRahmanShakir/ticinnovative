import React from "react";
import Image from "next/image";

export default function AboutUs() {
  const teamMembers = [
    { name: "Kashif Arif", role: "CTO", image: "/team/Kashif-Arif.png" },
    {
      name: "Asif Omar",
      role: "Software Architect",
      image: "/team/Asif-Omar.png",
    },
    { name: "Afshan Omar", role: "ADGM", image: "/team/Afshan-Omar.png" },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="pb-12 w-full lg:w-[80%] mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg text-clip">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          possimus dicta nesciunt exercitationem mollitia molestiae, esse quae
          dolore doloremque nam optio nobis, aperiam molestias? Exercitationem
          atque voluptate optio maiores eos eius tempore tempora reprehenderit
          enim ipsa corrupti doloribus expedita commodi, aliquid minima. <br />
          <br />{" "}
          <span className="font-bold">
            &quot;Deserunt architecto molestias facere commodi nobis. Odit
            repellendus nesciunt perferendis itaque nobis officiis ipsum minus,
            delectus maxime accusamus. Quo repellat beatae aliquam magni
            pariatur, ipsam delectus&quot;
          </span>{" "}
          <br /> <br /> sapiente dolore. Adipisci error explicabo expedita
          voluptates, repellendus ipsa officiis maiores nemo mollitia eos
          accusamus, rem dolorum culpa earum sequi aliquam, debitis enim!
          Aspernatur veritatis provident quidem quis iste in enim cum!
        </p>

        <button className="bg-[#1e388c] text-white px-4 py-3 rounded-lg mt-4">
          Download Company Profile
        </button>
      </div>

      <hr className="w-full h-[2px] border-[#1e388c] mx-auto lg:w-[80%] pb-10" />
      <div>
        <h1 className="text-3xl font-bold mb-4 text-center">
          Our Magnificent <br />{" "}
          <span className="text-[#1e388c]">Management</span>
        </h1>

        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full lg:w-[90%] mx-auto px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white h-[200px] shadow-card rounded-xl p-6 pt-20 text-center relative shadow-lg"
            >
              <hr className="absolute top-0 left-0 w-full border-[#1e388c] border-4 mx-auto overflow-hidden " />

              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-28 h-28 bg-gray-200 rounded-2xl border-4 border-white shadow-md overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {member.name}
              </h3>
              <p className="text-gray-500 font-medium text-sm uppercase tracking-wide">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
