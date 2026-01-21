import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Mail } from 'lucide-react';
import { duration } from "@mui/material/styles";

export default function ContactMe({ darkMode }) {
    const gsapRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.from(gsapRef.current, {
            opacity: 0,
            y: 30, // Reduced from 50 (implied, previous was 20 scrubbed)
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                scroller: "body",
                trigger: "#contact",
                start: "top 70%",
                toggleActions: "play none none reverse" // Clean reveal instead of scrub
            }
        })
    })

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState("idle");

    const validateForm = () => {
        const newErrors = {};
        console.log('Validating:', formData);

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        } else if (formData.message.trim().length < 5) {
            newErrors.message = "Message must be at least 5 characters long";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(isSubmitting);
        if (!validateForm()) return;

        setIsSubmitting(true);
        setSubmitStatus("idle");

        try {
            const result = await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    title: "Portfolio contact message",
                    name: formData.name,
                    time: new Date().toLocaleTimeString(),
                    email: formData.email,
                    message: formData.message
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            console.log(result.text);
            setSubmitStatus("success");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error(error);
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div id="contact" className="container min-h-screen py-16 mx-auto px-4 sm:px-6 lg:px-8">
            <h1
                className={`text-center text-3xl md:text-4xl lg:text-5xl font-semibold mb-1 ${darkMode ? "text-green-400" : "text-green-600"}`}
            >
                Get In Touch
            </h1>
            <div
                className={`w-30 md:w-48 h-[0.8px] mx-auto mb-6 ${darkMode
                    ? "bg-gradient-to-r from-green-500 to-indigo-900"
                    : "bg-gradient-to-r from-blue-500 to-indigo-600"
                    }`}
            ></div>
            <div id="contact" ref={gsapRef} className="mx-auto">
                <div className="text-center mb-16">
                    <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${darkMode ? "text-gray-300" : "text-slate-600"}`}>
                        I'd love to hear from you. Let's connect!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Contact Info */}
                    <div className="space-y-7">
                        <div
                            className={`mx-auto rounded-2xl p-4 border transition-all duration-300 ${darkMode
                                ? "bg-[linear-gradient(-135deg,_rgba(0,0,0,0.6),_rgba(49,46,129,0.8))] border-gray-700 hover:border-gray-600"
                                : "bg-white/80 backdrop-blur-sm border-blue-100/50 shadow-lg shadow-blue-100/20 hover:bg-white/90 hover:shadow-xl hover:shadow-blue-200/30"
                                }`}
                        >
                            <h3 className={`text-2xl font-semibold mb-6 ${darkMode ? "text-white" : "text-green-500"}`}>
                                {"Let's Connect"}
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-center space-x-4 group">
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300  text-2xl ${darkMode ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white" : "bg-blue-50 text-blue-600"
                                            }`}
                                    >
                                        <Mail />
                                    </div>
                                    <div>
                                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>Email</p>
                                        <p className={`font-medium ${darkMode ? "text-white" : "text-blue-600"}`}> <a href="mailto:atharvai2005@gmail.com">atharvai2005@gmail.com</a></p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                    <div
                                        className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${darkMode ? "bg-gradient-to-r from-green-500 to-teal-600" : "bg-emerald-50"
                                            }`}
                                    >
                                        <svg
                                            className={`w-6 h-6 ${darkMode ? "text-white" : "text-emerald-500"}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-slate-600"}`}>Phone</p>
                                        <p className={`font-medium ${darkMode ? "text-white" : "text-blue-600"}`}>+917387241068</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-4 group">
                                </div>
                            </div>

                            <div className={`mt-8 pt-8 border-t ${darkMode ? "border-gray-700" : "border-blue-100"}`}>
                                <p className={`text-sm mb-4 ${darkMode ? "text-gray-400" : "text-slate-600"}`}>Follow me on</p>
                                <div className="flex space-x-4">
                                    <a
                                        href="https://www.linkedin.com/in/atharva-jadhav-776894348/"
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${darkMode
                                            ? "bg-transparent hover:bg-gradient-to-r hover:bg-gray-100"
                                            : "bg-transparent hover:bg-blue-100"
                                            }`}
                                    >
                                        <img src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752989689/linkedin_vkc1nt.svg" className="object-cover w-8 h-8">
                                        </img>
                                    </a>
                                    <a
                                        href="https://github.com/Atharva1318-dev"
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${darkMode
                                            ? "bg-transparent  hover:bg-gradient-to-r hover:bg-black"
                                            : "bg-transparent  hover:text-blue-600 hover:bg-blue-100"
                                            }`}
                                    >
                                        <img src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752989689/github_cgqls4.svg" className="object-cover w-8 h-8">
                                        </img>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/atharvajadhav13/"
                                        className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${darkMode
                                            ? "bg-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600"
                                            : "bg-transparent hover:bg-blue-100"
                                            }`}
                                    >
                                        <img src="https://res.cloudinary.com/dkpgnq7ym/image/upload/v1752989690/instagram.svg_mdlstf.webp" className="object-cover w-8 h-8">
                                        </img>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div
                        className={`rounded-2xl p-4 border transition-colors duration-300 ${darkMode
                            ? "bg-[linear-gradient(-135deg,_rgba(0,0,0,0.6),_rgba(49,46,129,0.8))] border-gray-700 hover:border-gray-600"
                            : "bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-indigo-100/60 shadow-lg shadow-indigo-100/25"
                            }`}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your full name"
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${darkMode
                                        ? `bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 ${errors.name
                                            ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                            : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`
                                        : `bg-white/70 text-slate-700 placeholder-slate-400 ${errors.name
                                            ? "border-red-300 focus:ring-red-200/50 focus:border-red-400"
                                            : "border-slate-200 focus:bg-white focus:border-blue-300 focus:ring-blue-200/50"
                                        }`
                                        }`}
                                />
                                {errors.name && <p className="mt-2 text-sm text-red-400">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${darkMode
                                        ? `bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 ${errors.email
                                            ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                            : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`
                                        : `bg-white/70 text-slate-700 placeholder-slate-400 ${errors.email
                                            ? "border-red-300 focus:ring-red-200/50 focus:border-red-400"
                                            : "border-slate-200 focus:bg-white focus:border-blue-300 focus:ring-blue-200/50"
                                        }`
                                        }`}
                                />
                                {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email}</p>}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className={`block text-sm font-medium mb-2 ${darkMode ? "text-gray-300" : "text-slate-600"}`}
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder="Leave your message here"
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${darkMode
                                        ? `bg-black/40 backdrop-blur-sm text-white placeholder-gray-400 ${errors.message
                                            ? "border-red-400/50 focus:ring-red-400/50 focus:border-red-400"
                                            : "border-white/20 focus:border-indigo-400 focus:ring-indigo-400/50"
                                        }`
                                        : `bg-white/70 text-slate-700 placeholder-slate-400 ${errors.message
                                            ? "border-red-300 focus:ring-red-200/50 focus:border-red-400"
                                            : "border-slate-200 focus:bg-white focus:border-blue-300 focus:ring-blue-200/50"
                                        }`
                                        }`}
                                />
                                {errors.message && <p className="mt-2 text-sm text-red-400">{errors.message}</p>}
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`w-full font-semibold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-300 ${darkMode
                                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                    : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700 hover:shadow-lg active:from-blue-700 active:to-indigo-800 focus:ring-blue-300/50"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center justify-center space-x-2">
                                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        <span>Sending...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center space-x-2">
                                        <span>Send Message</span>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            {/* Status */}
                            {submitStatus === "success" && (
                                <div className="p-4 bg-green-900 border border-green-700 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <p className="text-green-400 font-medium">Message sent successfully!</p>
                                    </div>
                                    <p className="text-green-300 text-sm mt-1">Thank you for reaching out. I'll get back to you soon.</p>
                                </div>
                            )}

                            {submitStatus === "error" && (
                                <div className="p-4 bg-red-900 border border-red-700 rounded-lg">
                                    <div className="flex items-center space-x-2">
                                        <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        <p className="text-red-400 font-medium">Failed to send message</p>
                                    </div>
                                    <p className="text-red-300 text-sm mt-1">Please try again or contact me directly via email.</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}