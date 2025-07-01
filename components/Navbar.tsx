'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > window.innerHeight - 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ["Hero", "About", "Services", "Faqs", "Contact"];

        const handleScrollSpy = () => {
            let current = "";

            sectionIds.forEach((id) => {
                const section = document.getElementById(id);
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                        current = id;
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScrollSpy);
        return () => window.removeEventListener("scroll", handleScrollSpy);
    }, []);


    const showBg = scrolled;
    const textColorClass = showBg
        ? 'text-black hover:text-gray-700'
        : 'text-gray-800 hover:text-gray-300';

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ease-in-out
          ${showBg ? 'bg-white/60 backdrop-blur-md shadow-md' : 'bg-transparent'}
        `}
            >
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link href="#Hero" className={`text-lg md:text-2xl font-medium transition-colors duration-300 ${textColorClass}`}>
                            <span className="flex items-center space-x-2">
                                <Image src="/Images/Logo.png" alt="Dr. Serena Blake logo" width={60} height={60} />
                                <span className="flex flex-col group cursor-pointer">
                                    <h2 className="text-gray-700 group-hover:underline">Dr. Serena Blake,</h2>
                                    <h2 className="text-gray-700 group-hover:underline">PsyD (Clinical Psychologist)</h2>
                                </span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 text-base font-medium transition-colors duration-300">
                        <Link href="#Hero" className={`${textColorClass} ${activeSection === "Hero" ? "underline underline-offset-4 font-semibold" : ""}`}>Home</Link>
                        <Link href="#About" className={`${textColorClass} ${activeSection === "About" ? "underline underline-offset-4 font-semibold" : ""}`}>About</Link>
                        <Link href="#Services" className={`${textColorClass} ${activeSection === "Services" ? "underline underline-offset-4 font-semibold" : ""}`}>Services</Link>
                        <Link href="#Faqs" className={`${textColorClass} ${activeSection === "Faqs" ? "underline underline-offset-4 font-semibold" : ""}`}>FAQ</Link>
                        <Link href="#Contact" className={`${textColorClass} ${activeSection === "Contact" ? "underline underline-offset-4 font-semibold" : ""}`}>Contact</Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`md:hidden focus:outline-none transition-colors duration-300 ${textColorClass}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} size="sm" />
                    </button>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white/30 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                <div className="flex flex-col pt-20 px-6 space-y-6 text-black text-lg font-medium relative">
                    {/* Close Button Inside Sidebar */}
                    <button
                        className="absolute top-4 right-4 text-black"
                        onClick={() => setMenuOpen(false)}
                    >
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                    </button>

                    <h3 className="font-bold text-2xl">Navigation</h3>
                    <Link href="#Hero" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link href="#About" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link href="#Services" onClick={() => setMenuOpen(false)}>Services</Link>
                    <Link href="#Faqs" onClick={() => setMenuOpen(false)}>FAQ</Link>
                    <Link href="#Contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>

            {/* Translucent Backdrop */}
            {menuOpen && (
                <div
                    className="fixed inset-0 z-30 bg-opacity-30 backdrop-blur-sm"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </>
    );
}
