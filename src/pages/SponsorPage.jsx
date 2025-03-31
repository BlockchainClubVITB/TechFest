import { GlareCard } from "../components/ui/glare-card";

const sponsors = [
  {
    id: 1,
    name: "Notion",
    logo: "https://logowik.com/content/uploads/images/notion-n-icon1721160576.logowik.com.webp",
    url: "https://example.com/1",
  },
  {
    id: 2,
    name: "InterviewBuddy",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxT6W2J3-40UX9t2ELVsd2lBlaVIsMk63iKQ&s",
    url: "https://example.com/4",
  },
  {
    id: 3,
    name: "SYBGEN",
    logo: "https://sybgen.com/wp-content/uploads/2020/07/SYBGEN-1.png",
    url: "https://example.com/5",
  },
];

export default function SponsorPage() {
  return (
    <div className="relative top-120 !min-h-[330vh] md:!min-h-[180vh] flex flex-col items-center justify-start text-white py-16 px-4 sm:px-8 !pb-20 ">
      {/* Headline */}
      <div className="mb-24 sm:mb-32">
        <h1 className="font-poppins text-[48px] sm:text-[92.16px] font-bold text-center tracking-wide text-[#CBFC58]">
          Our Sponsors
        </h1>
      </div>

      {/* First row - 3 sponsors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 !mb-20 !m-20">
        {sponsors.slice(0, 3).map((sponsor) => (
          <a
            href={sponsor.url}
            key={sponsor.id}
            target="_blank"
            rel="noopener noreferrer">
            <GlareCard className="w-full sm:w-[400px] h-[400px] m-4 flex flex-col items-center justify-center rounded-lg shadow-lg">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-100 h-100 object-contain rounded-4xl mx-auto !mb-7 !mr-36" // Increased size to w-32 h-32
              />
              <p className="text-xl font-semibold text-center !mr-42">
                {sponsor.name}
              </p>
            </GlareCard>
          </a>
        ))}
      </div>

      {/* Second row - Centered bottom cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 mb-20 justify-center">
        {sponsors.slice(3, 6).map((sponsor) => (
          <a
            href={sponsor.url}
            key={sponsor.id}
            target="_blank"
            rel="noopener noreferrer">
            <GlareCard className="w-full sm:w-[400px] h-[400px] m-4 flex flex-col items-center justify-center rounded-lg shadow-lg bg-black hover:bg-[#CBFC58] transition duration-300">

              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-100 h-100 object-contain rounded-4xl mx-auto !mb-7 !mr-36" // Increased size, centered, and curved
              />
              <p className="text-xl font-semibold text-center">
                {sponsor.name}
              </p>
            </GlareCard>
          </a>
        ))}
      </div>
    </div>
  );
}
