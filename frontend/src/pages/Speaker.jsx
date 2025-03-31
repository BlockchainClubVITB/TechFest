export default function Speaker() {
  return (
    <section className="w-full min-h-screen bg-transparent text-white flex flex-col items-center justify-center px-12 py-24 font-inter">
      <div className="text-[48px] sm:text-[92.16px] font-bold text-[#CBFC58] text-center pb-40">Meet Our Speaker</div>
      
      <div className="flex flex-col md:flex-row w-full md:max-w-7xl gap-24 items-center">
        <div className="flex flex-col w-full md:w-1/2 gap-4 md:gap-8 text-center md:text-left">
          <div className="text-5xl md:text-8xl font-bold">John Doe</div>
          <p className="text-3xl md:text-2xl text-[#CBFC58] font-medium">CEO of ABC Corporation</p>
          <p className="text-white/80 text-xl md:text-2xl leading-relaxed">
            John Doe has revolutionized the tech industry with his visionary leadership and strategic thinking. With a background in both engineering and business, he brings a unique perspective to his role.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="John Doe"
            className="w-60 h-60 md:w-120 md:h-120 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
