import Image from "next/image";

export default function About() {
    return (
        <div id="About" className="min-h-screen bg-white flex flex-col items-center justify-center px-6 pt-40 pb-28">
            {/* Content Container */}
            <div className="px-8 md:px-28 w-full flex flex-col md:flex-row md:items-start gap-16">
                
                {/* Text Section */}
                <div className="md:w-2/3 flex flex-col space-y-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-semibold text-[#6c603f] order-1">
                        About Dr. Serena Blake
                    </h2>

                    {/* Mobile Image */}
                    <div className="md:hidden order-2 flex justify-center">
                        <Image
                            src="/Images/DoctorImage.jpg"
                            alt="Dr. Serena Blake"
                            width={320}
                            height={420}
                            className="rounded-xl object-cover shadow-md w-[320px] h-[420px]"
                        />
                    </div>

                    {/* Paragraphs */}
                    <div className="text-stone-700 text-sm font-light md:text-base leading-relaxed order-3 space-y-6">
                        <p>
                            Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
                        </p>
                        <p>
                            Dr. Serena Blake is dedicated to supporting her clients' journeys by offering active listening, psychological knowledge, empathy, compassion, and insights into behavioral patterns and tendencies. Whether meeting in her Maplewood Drive office or connecting virtually via Zoom, she is committed to creating a safe, supportive space where individuals can thrive.
                        </p>
                    </div>
                </div>

                {/* Desktop Image */}
                <div className="hidden md:flex md:w-[350px] justify-end md:mt-10 ">
                    <Image
                        src="/Images/DoctorImage.jpg"
                        alt="Dr. Serena Blake"
                        width={350}
                        height={420}
                        className="rounded-xl object-cover shadow-md w-[350px] h-[420px]"
                    />
                </div>
            </div>

            {/* Bold Horizontal Line at Bottom */}
            <div className="mt-30 w-full px-8 md:px-28">
                <hr className="border-t-[3px] border-[#6c603f] opacity-80" />
            </div>
        </div>
    );
}
