"use client";

export default function RatesSection() {
  return (
    <section
      id="Rates"
      className="min-h-screen bg-gradient-to-b from-[#dbeafe] via-[#f0f9ff] to-[#e0f2fe] flex items-center justify-center px-4 py-32"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-16">
          Rates and Insurance
        </h2>

        {/* Session Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 px-4">
          <div className="bg-white shadow-xl rounded-3xl p-8 transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Individual Session
            </h3>
            <p className="text-3xl font-light text-slate-700">$200</p>
          </div>

          <div className="bg-white shadow-xl rounded-3xl p-8 transition-all hover:shadow-2xl">
            <h3 className="text-2xl font-semibold text-indigo-900 mb-4">
              Couples Session
            </h3>
            <p className="text-3xl font-light text-slate-700">$240</p>
          </div>
        </div>

        {/* Office Hours */}
        <div className="bg-white/80 rounded-3xl shadow-lg p-8 mb-16 max-w-3xl mx-auto hover:shadow-2xl">
          <h3 className="text-2xl font-semibold text-indigo-900 mb-6">
            Office Hours
          </h3>
          <div className="text-slate-700 space-y-4 text-lg md:text-xl font-light">
            <p>
              <span className="font-medium text-indigo-800">In-person:</span>{" "}
              Tue & Thu, <span className="font-semibold">10 AM – 6 PM</span>
            </p>
            <p>
              <span className="font-medium text-indigo-800">Virtual via Zoom:</span>{" "}
              Mon, Wed & Fri, <span className="font-semibold">1 PM – 5 PM</span>
            </p>
          </div>
        </div>

        {/* Insurance Info */}
        <div className="text-slate-700 text-lg md:text-xl font-light space-y-6 max-w-3xl mx-auto">
          <p>
            I accept both private pay and insurance. I am in-network with
            <span className="font-medium text-slate-900"> BCBS</span> and
            <span className="font-medium text-slate-900"> Aetna</span>.
          </p>
          <p>
            For out-of-network plans, I’ve partnered with Mentaya using{" "}
            <a
              href="https://www.mentaya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 underline hover:text-sky-900"
            >
              this tool
            </a>{" "}
            to help you check your eligibility for reimbursement for my services.
          </p>
        </div>
      </div>
    </section>
  );
}
