"use client";

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserDoctor, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    preferredTime: "",
    agree: false,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\+?\d{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (!formData.preferredTime.trim()) newErrors.preferredTime = "Preferred time is required.";
    if (!formData.agree) newErrors.agree = "You must agree before submitting.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
        preferredTime: "",
        agree: false,
      });
      setErrors({});
    }
  };

  const { ref: contactRef, inView: contactInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: infoRef, inView: infoInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <main id="Contact" className="min-h-screen bg-gradient-to-b from-[#e0f2fe] via-[#f0f9ff] to-[#dbeafe]">
      <section className="pt-32 px-4 pb-16">
        <motion.div
          ref={contactRef}
          initial={{ opacity: 0, y: 40 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="container mx-auto bg-white bg-opacity-90 rounded-3xl shadow-xl p-8"
        >
          <div className="md:hidden flex flex-col gap-10">
            <h1 className="text-4xl font-semibold text-indigo-900">Contact Us</h1>
            <p className="text-slate-700 text-lg">
              Fill out the form below, and we’ll get in touch with you soon. We look forward to connecting!
            </p>

            <Image
              src="/images/ContactImage.jpg"
              alt="Contact"
              width={800}
              height={800}
              className="w-full h-auto object-cover rounded-xl max-h-[400px]"
            />

            <ContactForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              handleSubmit={handleSubmit}
            />
          </div>

          <div className="hidden md:grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-semibold text-indigo-900 mb-6">
                Contact Us
              </h1>
              <p className="text-slate-700 text-lg mb-10 pt-2">
                Fill out the form below, and we’ll get in touch with you soon. We look forward to connecting!
              </p>

              <ContactForm
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                handleSubmit={handleSubmit}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/images/ContactImage.jpg"
                alt="Contact"
                width={800}
                height={800}
                className="w-full h-full object-cover rounded-xl max-h-[500px] max-w-[450px]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <motion.section
        ref={infoRef}
        initial={{ opacity: 0, y: 40 }}
        animate={infoInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="px-4 pb-16 pt-7"
      >
        <div className="container mx-auto bg-white/90 py-12 px-6 mt-20 rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Get in Touch!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center space-y-3">
              <FontAwesomeIcon icon={faUserDoctor} className="text-6xl text-indigo-900" />
              <h3 className="text-xl font-semibold text-slate-800">Dr. Serena Blake</h3>
              <p className="text-sm text-slate-600">PsyD (Clinical Psychologist)</p>
              <p className="text-sm text-slate-600">1287 Maplewood Drive</p>
              <p className="text-sm text-slate-600">Los Angeles, CA 90026</p>
            </div>
            <div className="flex flex-col items-center space-y-3">
              <FontAwesomeIcon icon={faPhone} className="text-6xl text-indigo-900" />
              <h3 className="text-xl font-semibold text-slate-800">Phone Number</h3>
              <p className="text-sm text-slate-600">(323) 555-0192</p>
            </div>
            <div className="flex flex-col items-center space-y-3 break-words">
              <FontAwesomeIcon icon={faEnvelope} className="text-6xl text-indigo-900" />
              <h3 className="text-xl font-semibold text-slate-800">Email Us</h3>
              <p className="text-sm text-slate-600 px-2 break-words">
                serena@blakepsychology.com
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}




function ContactForm({ formData, setFormData, errors, handleSubmit }: any) {
  return (
    <form  method="POST" className="space-y-8" onSubmit={handleSubmit}>
      <div>
        <p className="text-sm text-slate-700 mb-1">Name (required)</p>
        <div className="grid text-sm grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            required
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:text-slate-400"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 placeholder:text-slate-400"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-sm text-slate-700">Phone No. (required)</p>
        <input
          type="tel"
          required
          name="phone"
          className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-sm text-slate-700">Email (required)</p>
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 rounded-full bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-sm text-slate-700">What brings you here? (required)</p>
        <textarea
          required
          name="message"
          rows={4}
          className="w-full px-4 py-3 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:border-indigo-500 resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
      </div>

      <div className="space-y-1 text-sm">
        <p className="text-sm text-slate-700">Preferred time to reach you (required)</p>
        <input
          type="text"
          required
          placeholder="e.g., Weekdays after 2 PM"
          name="preferredTime"
          className="w-full px-4 py-3 rounded-3xl bg-white border border-gray-300 focus:outline-none focus:border-indigo-500"
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
        />
        {errors.preferredTime && <p className="text-xs text-red-500 mt-1">{errors.preferredTime}</p>}
      </div>

      <div className="flex items-start gap-2">
        <input
          type="checkbox"
          checked={formData.agree}
          onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          className="h-5 w-5 text-indigo-600 border-gray-300 rounded"
        />
        <label className="text-sm text-slate-700">I agree to be contacted</label>
      </div>
      {errors.agree && <p className="text-xs text-red-500">{errors.agree}</p>}

      <div className="flex justify-center md:justify-start text-sm">
        <button
          type="submit"
          className="bg-indigo-900 text-white rounded-full px-8 py-4 hover:bg-indigo-800 transition-all duration-300"
        >
          SUBMIT
        </button>
      </div>
    </form>
  );
}
