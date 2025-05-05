import React from 'react';
import aboutImg from '/about-image.jpg';

const About = () => {
  return (
    <section className="bg-[#121212]">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-[#FFFFFF] sm:text-4xl">Meet the Strategist Behind the Brand</h2>
            <p className="mt-4 text-[#AAAAAA] text-lg">
              Hi, I'm Rishav Sagar — a brand strategist and designer based in India. 
              I work with entrepreneurs and startups to build brands that are clear, 
              consistent, and easy to connect with. From strategy to design, I help 
              shape visual identities and messaging that align with your goals and 
              speak to the right audience. Whether it's a complete rebrand or building 
              from the ground up, I help turn ideas into brands that feel intentional 
              and trustworthy.
            </p>
            <div className="mt-8 text-2xl">
              <a href="https://superprofile.bio/brandingtactics?fbclid=PAZXh0bgNhZW0CMTEAAadatm808cqzeYJghPSCZHEXDihI0qSDc2IodHxWVjWtmlOt-e_eQlOYzn0ESw_aem_i1soeOjRWKYNTb4eaAymlg" className="text-blue-500 hover:text-blue-600 font-medium">
                Book 1:1 session with me
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img 
              src={aboutImg} 
              alt="About Us Image" 
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;