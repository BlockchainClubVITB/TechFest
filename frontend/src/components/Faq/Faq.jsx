import { useState } from "react";

const questions = [
  {
    question: "What is Tech Fest 2025?",
    answer:
      "Tech Fest 2025 is one of the largest technical festivals organized by VIT Bhopal, showcasing innovation, technology, and creativity.",
  },
  {
    question: "What are the dates and timings of the event?",
    answer:
      "The event will take place on March 30-31, 2025, starting at 9 AM each day and concluding at 10 PM.",
  },
  {
    question: "How can I participate in the event?",
    answer:
      "Explore the various events on the Tech Fest website and register for the ones you are interested in.",
  },
  {
    question: "Is there any entry fee for Tech Fest 2025?",
    answer:
      "No, there is no entry fee to attend Tech Fest 2025. However, some events may require a registration fee to participate.",
  },
];

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const toggle = (i) => {
    if (clicked === i) {
      return setClicked(null);
    }
    setClicked(i);
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-16 relative">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-full h-full bg-[#CBFC58]/5 blur-[100px] rounded-full"></div>

      {/* Heading with enhanced animations */}
      <h2 className="text-6xl font-bold text-center mb-12 relative
                    animate-[fadeIn_1s_ease-in]">
        <span className="bg-gradient-to-r from-white to-[#CBFC58] 
                       bg-clip-text text-transparent
                       hover:from-[#CBFC58] hover:to-white
                       transition-all duration-500">
          FAQ
        </span>
        <div className="relative mt-4">
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1
                        bg-gradient-to-r from-[#CBFC58] to-transparent
                        animate-[width_0.5s_ease-in-out]"></div>
          {/* Animated Glow effect */}
          <div className="absolute left-1/2 -translate-x-1/2 w-32 h-1
                        bg-[#CBFC58]/30 blur-md
                        animate-pulse"></div>
        </div>
      </h2>

      {/* FAQ Container with enhanced scrollbar */}
      <div className="space-y-6 max-h-[40rem] overflow-y-auto pr-4
                    [&::-webkit-scrollbar]:w-2
                    [&::-webkit-scrollbar-track]:bg-black/40
                    [&::-webkit-scrollbar-thumb]:bg-[#CBFC58]/40
                    [&::-webkit-scrollbar-thumb]:rounded-full
                    [&::-webkit-scrollbar-thumb]:hover:bg-[#CBFC58]/60">
        {questions.map((ques, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            className={`bg-black/60 backdrop-blur-md rounded-xl 
                     border border-[#CBFC58]/20 p-6
                     hover:border-[#CBFC58]/50 
                     transition-all duration-500 ease-in-out
                     cursor-pointer group
                     hover:shadow-[0_0_30px_rgba(203,252,88,0.15)]
                     ${clicked === i ? 'shadow-[0_0_40px_rgba(203,252,88,0.2)]' : ''}
                     transform hover:-translate-y-1
                     animate-[fadeIn_0.5s_ease-in]`}
            style={{
              animationDelay: `${i * 150}ms`
            }}
          >
            {/* Question with enhanced animations */}
            <div className="flex justify-between items-center">
              <h3 className="text-2xl md:text-3xl text-white/90 
                         group-hover:text-[#CBFC58] transition-colors duration-300
                         font-semibold">
                {ques.question}
              </h3>
              {/* Animated Plus/Minus Icon */}
              <span className={`text-3xl text-[#CBFC58] transition-all duration-500
                            transform ${clicked === i ? 'rotate-[225deg]' : 'rotate-0'}
                            group-hover:scale-125 group-hover:text-white`}>
                +
              </span>
            </div>

            {/* Answer with smooth animation */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden
                       ${clicked === i ? 'max-h-48 mt-6 opacity-100' : 'max-h-0 opacity-0'}`}
            >
              <p className="text-lg md:text-xl leading-relaxed tracking-wide
                         text-white/80 hover:text-white/90 transition-colors
                         border-l-2 border-[#CBFC58]/30 pl-4">
                {ques.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
