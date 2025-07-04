import Image from "next/image";

export default function About() {
  return (
    <div
      id="About"
      className="min-h-screen bg-[#f4f9fb] flex flex-col items-center justify-center px-6 pt-40 pb-28"
    >
      {/* Content Container */}
      <div className="px-8 md:px-28 w-full flex flex-col md:flex-row md:items-start gap-16">
        {/* Text Section */}
        <div className="md:w-2/3 flex flex-col space-y-12">
          <h2
            className="text-3xl md:text-4xl font-serif font-semibold text-[#264653] order-1 transition-colors duration-300 hover:text-[#1d3557]"
          >
            About Dr. Serena Blake
          </h2>

          {/* Mobile Image */}
          <div className="md:hidden order-2 flex justify-center">
            <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <Image
                src="/Images/DoctorImage.jpg"
                alt="Dr. Serena Blake"
                width={320}
                height={420}
                className="object-cover w-[320px] h-[420px]"
              />
            </div>
          </div>

          {/* Paragraphs */}
          <div className="text-[#4a6b78] text-sm font-light md:text-base leading-relaxed order-3 space-y-6">
            <p className="transition-colors duration-300 hover:text-[#1d3557]">
               Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
            </p>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex md:w-[350px] justify-end md:mt-10">
          <div className="rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            <Image
              src="/Images/DoctorImage.jpg"
              alt="Dr. Serena Blake"
              width={350}
              height={420}
              className="object-cover w-[350px] h-[420px]"
            />
          </div>
        </div>
      </div>

      {/* Bold Horizontal Line at Bottom */}
      <div className="mt-30 w-full px-8 md:px-28">
        <hr className="border-t-[3px] border-[#a0bfc9] opacity-80" />
      </div>
    </div>
  );
}
