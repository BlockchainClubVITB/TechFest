// import Button from "../common/Button/Button";
import about from "./about.svg";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-12 px-6 backdrop-blur-md">
      <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16 
                    mx-auto bg-black/40 p-8 md:p-20 rounded-xl
                    border border-[#CBFC58]/20">
        {/* Text Content */}
        <div className="flex-1 text-white order-2 md:order-1">
          {/* Heading with glowing effect */}
          <h3 className="text-4xl md:text-5xl font-normal mb-4 
                       text-[#CBFC58] opacity-90">
            About
          </h3>

          {/* Main Title with stroke effect */}
          <h2 className="text-5xl md:text-8xl lg:text-9xl font-bold uppercase 
                       text-transparent bg-clip-text whitespace-nowrap
                       [text-shadow:_2px_2px_0_#CBFC58] mb-8 md:mb-12
                       tracking-wider">
            VIT Bhopal<br />Tech Fest 2025
          </h2>

          {/* Description with gradient text */}
          <p className="text-lg md:text-xl leading-relaxed 
                     text-white/90 mb-8
                     [text-shadow:_0_0_30px_rgba(203,252,88,0.1)]">
            VIT Bhopal Tech Fest is a premier technical festival that brings
            together students, innovators, and tech enthusiasts from across
            the country. It serves as a platform to showcase cutting-edge
            technology, foster innovation, and inspire creativity.
          </p>
          
          <p className="text-lg md:text-xl leading-relaxed 
                     text-white/90
                     [text-shadow:_0_0_30px_rgba(203,252,88,0.1)]">
            With a variety of events, workshops, and competitions, the fest aims to
            nurture talent, encourage collaboration, and provide exposure to
            the latest advancements in technology. Join us for an unforgettable
            experience filled with learning, networking, and excitement at
            VIT Bhopal Tech Fest 2025!
          </p>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-xl">
            <div className="absolute inset-0 bg-[#CBFC58]/10 blur-3xl rounded-full"></div>
            <img 
              src={about} 
              alt="VIT Bhopal Tech Fest" 
              className="relative w-full h-auto rounded-lg 
                       transition-transform duration-300 hover:scale-105
                       shadow-[0_0_30px_rgba(203,252,88,0.2)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
